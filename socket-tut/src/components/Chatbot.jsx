import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, getAllChats } from '../features/chat/chatSlice';
import MarkdownRenderer from './MarkdownRenderer'; // Import the MarkdownRenderer
import Symptoms from './Symptoms'
import { chatCategories } from '../utils/symptoms';



const Chatbot = ({ chatType }) => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.chat[chatType]);
    const { loading } = useSelector(state => state.chat);
    const [message, setMessage] = useState("");

    const [showOptions, setShowOptions] = useState(true);
    const [response, setResponse] = useState(null);
    const [showSymptoms, setShowSymptoms] = useState(true); // Show Symptoms initially


    console.log(chatType);

    const handleSubmit = async (selectedOptions) => {
        const message = selectedOptions.join(", ") + " are my selected options.";
        dispatch(sendMessage({ type: chatType, message }));
        setResponse(null);
        setShowSymptoms(false);
    };
    // Ref for the chat container
    const chatContainerRef = useRef(null);

    // Scroll to bottom whenever chatMessages updates
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatMessages]);

    useEffect(() => {
        handleGetChats();
    }, []);


    const handleSendMessage = () => {
        if (!message.trim()) return;
        dispatch(sendMessage({ type: chatType, message }));
        setMessage("");
    };

    const handleGetChats = () => {
        dispatch(getAllChats());
    };

    return (
        <div className="w-full mx-auto my-6 p-6 bg-white shadow-lg rounded-lg relative">
            {/* Symptoms Component (Appears on top) */}
            {showSymptoms && (
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex justify-center items-center z-50">
                    <Symptoms onSubmit={handleSubmit} setShowSymptoms={setShowSymptoms} userOptions={chatCategories[chatType]} />
                </div>
            )}

            <h2 className="text-lg font-bold text-gray-800 mb-3">Chatbot ({chatType})</h2>

            {/* Chatbox */}
            <div
                ref={chatContainerRef} // Attach the ref here
                className="h-96 overflow-y-auto border border-gray-300 p-3 rounded-lg bg-gray-100"
            >
                {chatMessages && chatMessages.length > 0 ? (
                    chatMessages.map((chatItem, index) => (
                        <div
                            key={index}
                            className={`mb-2 max-w-[70%] p-2 rounded-lg text-sm ${
                                chatItem.role === "user"
                                    ? "ml-auto bg-blue-200 text-right" // User message (right-aligned)
                                    : "mr-auto bg-green-200 text-left" // Bot message (left-aligned)
                            }`}
                        >
                            <strong className="text-neutral">{chatItem.role}:</strong>
                            {/* Render AI response as Markdown */}
                            <MarkdownRenderer markdown={chatItem.msg} />    
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No messages yet...</p>
                )}
            </div>

            {/* Input & Buttons */}
            <div className="mt-4 flex">
                <input
                    disabled={loading}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button onClick={handleSendMessage} disabled={loading} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    {loading ? <span className="loading loading-dots loading-lg"></span> : 'Send'}
                </button>
                <button onClick={handleGetChats} disabled={loading} className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    Fetch
                </button>
            </div>
        </div>
    );
};

Chatbot.propTypes = {
    chatType: PropTypes.oneOf(["diagnosisChat", "dietChat", "fitnessChat"]).isRequired,
};

export default Chatbot;
