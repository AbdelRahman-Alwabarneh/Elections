import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Debate_screen() {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();

    const handleRoomIdGenerate = () => {
        const randomId = Math.random().toString(36).substring(2, 9);
        const timestamp = Date.now().toString().substring(-4);
        setRoomId(randomId + timestamp);
    };

    const handleOneAndOneCall = () => {
        if (!roomId) {
            alert("Please Generate Room Id First");
            return;
        }
        navigate(`/debate-room/${roomId}?type=one-on-one`);
    };

    const handleGroupCall = () => {
        if (!roomId) {
            alert("Please Generate Room Id First");
            return;
        }
        navigate(`/debate-room/${roomId}?type=group-call`);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-50 font-sans">
            <div className="text-center">
                <h1 className="text-4xl mb-2 text-gray-800">Welcome to Video Calling App</h1>
                <p className="text-lg mb-5 text-gray-600">
                    Start a video call with a randomly generated Room ID
                </p>
                <div className="flex justify-center items-center mb-5">
                    <input
                        type="text"
                        className="p-2 mr-2 border border-gray-300 rounded w-56 text-lg text-center"
                        placeholder="Generated Room ID"
                        value={roomId}
                        readOnly
                    />
                    <button
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                        onClick={handleRoomIdGenerate}
                    >
                        Generate
                    </button>
                </div>
                <div className="flex justify-center mt-5">
                    <button
                        className="p-4 mx-2 bg-blue-500 text-white rounded text-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        onClick={handleOneAndOneCall}
                        disabled={!roomId}
                    >
                        One-on-One Call
                    </button>
                    <button
                        className="p-4 mx-2 bg-blue-500 text-white rounded text-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        onClick={handleGroupCall}
                        disabled={!roomId}
                    >
                        Group Call
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Debate_screen;
