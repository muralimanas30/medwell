import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, getAllChats } from '../features/chat/chatSlice';
const Chatbot = ({ chatType }) => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.chat[chatType]); 
    const [message, setMessage] = useState("");

    
    const handleSendMessage = () => {
        if (!message.trim()) return;
        dispatch(sendMessage({ type: chatType, message }));
        setMessage(""); 
    };

    
    const handleGetChats = () => {
        dispatch(getAllChats());
    };

    return (
        <div className="w-full max-w-md mx-auto my-6 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Chatbot ({chatType})</h2>

            {/* Chatbox */}
            <div className="h-64 overflow-y-auto border border-gray-300 p-3 rounded-lg bg-gray-100">
                {chatMessages && chatMessages.length > 0 ? (
                    chatMessages.map((chatItem, index) => (
                        <p key={index} className={`mb-2 p-2 rounded-lg text-sm ${chatItem.role === "user" ? "bg-blue-200 text-right" : "bg-green-200 text-left"}`}>
                            <strong>{chatItem.role}:</strong> {chatItem.msg}
                        </p>
                    ))
                ) : (
                    <p className="text-gray-500">No messages yet...</p>
                )}
            </div>

            {/* Input & Buttons */}
            <div className="mt-4 flex">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Send
                </button>
                <button onClick={handleGetChats} className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    Fetch
                </button>
            </div>
        </div>
    );
};

// PropTypes Validation
Chatbot.propTypes = {
    chatType: PropTypes.oneOf(["diagnosisChat", "dietChat", "fitnessChat"]).isRequired,
};

export default Chatbot;