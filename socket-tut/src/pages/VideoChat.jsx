import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
    db,
    collection,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
    orderBy,
    limit,
    doc,
    onSnapshot,
} from "./firebase";

const VideoChat = () => {
    const [callId, setCallId] = useState("");
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerConnectionRef = useRef(null);

    // Get user role from Redux
    const role = useSelector((state) => state.userState.user.role);
    console.log(role);

    useEffect(() => {
        // Initialize WebRTC Peer Connection
        peerConnectionRef.current = new RTCPeerConnection({
            iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        });

        // Get user media (video/audio)
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                localVideoRef.current.srcObject = stream;
                stream.getTracks().forEach((track) =>
                    peerConnectionRef.current.addTrack(track, stream)
                );
            })
            .catch((error) => console.error("Error accessing media devices:", error));

        // Handle remote track (doctor's video)
        peerConnectionRef.current.ontrack = (event) => {
            remoteVideoRef.current.srcObject = event.streams[0];
        };

        // Cleanup function
        return () => {
            peerConnectionRef.current.close();
        };
    }, []);

    // 🚀 Start Call (User)
    const startCall = async () => {
        if (role !== "user") {
            alert("Only users can start a call.");
            return;
        }

        // Create a new call in Firestore
        const callDoc = await addDoc(collection(db, "calls"), {
            role: "user",
            createdAt: new Date(), // Timestamp for sorting
        });

        setCallId(callDoc.id);
        alert(`Call started. Share this Call ID with the doctor: ${callDoc.id}`);

        const offer = await peerConnectionRef.current.createOffer();
        await peerConnectionRef.current.setLocalDescription(offer);

        await setDoc(doc(db, "calls", callDoc.id), { offer }, { merge: true });

        // Listen for doctor's answer
        onSnapshot(doc(db, "calls", callDoc.id), (snapshot) => {
            const data = snapshot.data();
            if (data?.answer && !peerConnectionRef.current.currentRemoteDescription) {
                peerConnectionRef.current.setRemoteDescription(
                    new RTCSessionDescription(data.answer)
                );
            }
        });

        // Handle ICE Candidates
        peerConnectionRef.current.onicecandidate = async (event) => {
            if (event.candidate) {
                await addDoc(
                    collection(db, "calls", callDoc.id, "iceCandidates"),
                    event.candidate.toJSON()
                );
            }
        };
    };

    // 🚀 Join Call (Doctor - Fetch Latest Call)
    const joinCall = async () => {
        if (role !== "doctor") {
            alert("Only doctors can accept calls.");
            return;
        }

        try {
            // Query Firestore for the latest call initiated by a user
            const callsQuery = query(
                collection(db, "calls"),
                where("role", "==", "user"),
                orderBy("createdAt", "desc"),
                limit(1)
            );

            const querySnapshot = await getDocs(callsQuery);

            if (querySnapshot.empty) {
                alert("No active calls available.");
                return;
            }

            // Get the latest call's ID
            const latestCall = querySnapshot.docs[0];
            setCallId(latestCall.id); // Automatically set Call ID in state

            const callData = latestCall.data();

            if (!callData.offer) {
                alert("No valid offer found for this call.");
                return;
            }

            // Accept the call
            await peerConnectionRef.current.setRemoteDescription(
                new RTCSessionDescription(callData.offer)
            );
            const answer = await peerConnectionRef.current.createAnswer();
            await peerConnectionRef.current.setLocalDescription(answer);

            // Save the answer in Firestore
            await setDoc(doc(db, "calls", latestCall.id), { answer }, { merge: true });

            // Listen for ICE candidates
            onSnapshot(collection(db, "calls", latestCall.id, "iceCandidates"), (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        peerConnectionRef.current.addIceCandidate(
                            new RTCIceCandidate(change.doc.data())
                        );
                    }
                });
            });

            alert(`Joined call successfully with ID: ${latestCall.id}`);

        } catch (error) {
            console.error("Error joining call:", error);
            alert("Failed to join the call.");
        }
    };

    return (
        <div>
            <h2>WebRTC Video Chat</h2>
            <p>Current Role: <b>{role}</b></p>

            <video ref={localVideoRef} autoPlay playsInline></video>
            <video ref={remoteVideoRef} autoPlay playsInline></video>

            {role === "user" && (
                <>
                    <button onClick={startCall}>Start Call</button>
                    {callId && (
                        <p>
                            Call ID: <b>{callId}</b> (Waiting for doctor to join)
                        </p>
                    )}
                </>
            )}

            {role === "doctor" && (
                <>
                    <button onClick={joinCall}>Join Latest Call</button>
                </>
            )}
        </div>
    );
};

export default VideoChat;