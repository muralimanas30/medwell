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

    useEffect(() => {
        console.log("Initializing WebRTC Peer Connection...");
        peerConnectionRef.current = new RTCPeerConnection({
            iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        });

        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                console.log("User media obtained successfully.");
                localVideoRef.current.srcObject = stream;
                stream.getTracks().forEach((track) =>
                    peerConnectionRef.current.addTrack(track, stream)
                );
            })
            .catch((error) => console.error("Error accessing media devices:", error));

        peerConnectionRef.current.ontrack = (event) => {
            console.log("Received remote track.");
            remoteVideoRef.current.srcObject = event.streams[0];
        };

        return () => {
            console.log("Cleaning up WebRTC connection...");
            peerConnectionRef.current.close();
        };
    }, []);

    // 🚀 Start Call (User)
    const startCall = async () => {
        if (role !== "user") {
            alert("Only users can start a call.");
            return;
        }

        console.log("Starting a new call...");

        const callDoc = await addDoc(collection(db, "calls"), {
            role: "user",
            createdAt: new Date(),
        });

        setCallId(callDoc.id);
        console.log(`Call started with ID: ${callDoc.id}`);

        const offer = await peerConnectionRef.current.createOffer();
        await peerConnectionRef.current.setLocalDescription(offer);
        console.log("Offer created and set as local description.");

        await setDoc(doc(db, "calls", callDoc.id), { offer }, { merge: true });
        console.log("Offer stored in Firestore.");

        onSnapshot(doc(db, "calls", callDoc.id), (snapshot) => {
            const data = snapshot.data();
            console.log("Firestore call document updated:", data);
            if (data?.answer && !peerConnectionRef.current.currentRemoteDescription) {
                console.log("Setting remote description from doctor's answer...");
                peerConnectionRef.current.setRemoteDescription(
                    new RTCSessionDescription(data.answer)
                );
            }
        });

        peerConnectionRef.current.onicecandidate = async (event) => {
            if (event.candidate) {
                console.log("New ICE candidate generated:", event.candidate);
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

        console.log("Attempting to join the latest call...");

        try {
            const callsQuery = query(
                collection(db, "calls"),
                where("role", "==", "user"),
                orderBy("createdAt", "desc"),
                limit(1)
            );

            const querySnapshot = await getDocs(callsQuery);

            if (querySnapshot.empty) {
                console.log("No active calls found.");
                alert("No active calls available.");
                return;
            }

            const latestCall = querySnapshot.docs[0];
            setCallId(latestCall.id);
            console.log(`Joining call with ID: ${latestCall.id}`);

            const callData = latestCall.data();

            if (!callData.offer) {
                console.log("No valid offer found in the call document.");
                alert("No valid offer found for this call.");
                return;
            }

            await peerConnectionRef.current.setRemoteDescription(
                new RTCSessionDescription(callData.offer)
            );
            console.log("Remote description set with the received offer.");

            const answer = await peerConnectionRef.current.createAnswer();
            await peerConnectionRef.current.setLocalDescription(answer);
            console.log("Answer created and set as local description.");

            await setDoc(doc(db, "calls", latestCall.id), { answer }, { merge: true });
            console.log("Answer stored in Firestore.");

            onSnapshot(collection(db, "calls", latestCall.id, "iceCandidates"), (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        console.log("Adding received ICE candidate:", change.doc.data());
                        peerConnectionRef.current.addIceCandidate(
                            new RTCIceCandidate(change.doc.data())
                        );
                    }
                });
            });
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
