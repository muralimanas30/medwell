import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { db, collection, addDoc, setDoc, getDoc, doc, onSnapshot } from './firebase';

const VideoChat = () => {
    const [callId, setCallId] = useState("");
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);

    // Get user role from Redux
    const role = useSelector((state) => state.userState?.user?.role);
    console.log(role);

    const peerConnection = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                localVideoRef.current.srcObject = stream;
                stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
            })
            .catch((error) => console.error("Error accessing media devices.", error));

        peerConnection.ontrack = (event) => {
            remoteVideoRef.current.srcObject = event.streams[0];
        };

        peerConnection.onicecandidate = async (event) => {
            if (event.candidate && callId) {
                await addDoc(collection(db, "calls", callId, "iceCandidates"), event.candidate.toJSON());
            }
        };
    }, [callId]);

    // 🚀 Start Call (Only User)
    const startCall = async () => {
        if (role !== "user") {
            alert("Only users can start a call.");
            return;
        }

        const callDoc = await addDoc(collection(db, "calls"), { role: "user" });
        setCallId(callDoc.id);

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        await setDoc(doc(db, "calls", callDoc.id), { offer });

        onSnapshot(doc(db, "calls", callDoc.id), (snapshot) => {
            const data = snapshot.data();
            if (data?.answer && !peerConnection.currentRemoteDescription) {
                peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
            }
        });
    };

    // 🚀 Join Call (Only Doctor)
    const joinCall = async () => {
        if (role !== "doctor") {
            alert("Only doctors can accept calls.");
            return;
        }

        const callDoc = doc(db, "calls", callId);
        const callData = (await getDoc(callDoc)).data();

        if (!callData) {
            alert("Invalid Call ID");
            return;
        }

        if (callData.role !== "user") {
            alert("This call was not initiated by a user.");
            return;
        }

        if (callData?.offer) {
            await peerConnection.setRemoteDescription(new RTCSessionDescription(callData.offer));
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
            await setDoc(callDoc, { answer }, { merge: true });
        }

        onSnapshot(collection(db, "calls", callId, "iceCandidates"), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data()));
                }
            });
        });
    };

    return (
        <div>
            <h2>WebRTC Video Chat</h2>
            <p>Current Role: <b>{role}</b></p>

            <video ref={localVideoRef} autoPlay playsInline></video>
            <video ref={remoteVideoRef} autoPlay playsInline></video>

            {role === "user" && <button className="btn btn-primary" onClick={startCall}>Start Call</button>}

            {role === "doctor" && (
                <>
                    <input
                        type="text"
                        value={callId}
                        onChange={(e) => setCallId(e.target.value)}
                        placeholder="Enter Call ID"
                    />
                    <button onClick={joinCall}>Join Call</button>
                </>
            )}
        </div>
    );
};

export default VideoChat;
