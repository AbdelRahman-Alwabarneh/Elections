import React, { useState, useEffect } from 'react';
import { MessageSquare, ThumbsUp, Clock, Users, BarChart } from 'lucide-react';

import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";

const Debate = () => {
  const [timeLeft, setTimeLeft] = useState(345600); // 4 days in seconds
  const [votes, setVotes] = useState({ candidate1: 0, candidate2: 0 });
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState(1253); // Example number of online users

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${days}ي ${hours}س ${mins}د`;
  };

  const handleVote = (candidate) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] + 1,
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      setChatMessages([...chatMessages, { user: 'أنت', message: chatMessage }]);
      setChatMessage('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-green-50 min-h-screen" dir="rtl">
        {/* <header className="bg-red-900 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center text-[#ffffff]">
            <h1 className="text-3xl font-bold">الانتخابات البرلمانية الأردنية 2024</h1>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Users className="ml-2" />
                {onlineUsers} ناخب متصل
              </span>
              <span className="flex items-center">
                <Clock className="ml-2" />
                إغلاق صناديق الاقتراع في: {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </header> */}
        <main className="container mx-auto p-4">
          <div className='flex justify-center items-center mx-auto m-5 w-[90%] h-[600px] rounded-md'>
            <iframe src="http://localhost:5173/debate-room/ny9colk1723930983778?type=group-call" className=' w-full h-full rounded-md' frameborder="0"></iframe>
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mb-8">
            {['عبدالرحمن', 'وبارنه'].map((candidate, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="w-24 h-24 bg-gradient-to-br from-red-700 to-black rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  {candidate.split(' ').map(word => word[0]).join('')}
                </div>
                <h2 className="text-center text-2xl font-semibold mb-4">{candidate}</h2>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleVote(`candidate${index + 1}`)}
                    className="flex items-center bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors"
                  >
                    <ThumbsUp className="ml-2" /> تصويت ({votes[`candidate${index + 1}`]})
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BarChart className="ml-2" />
              نتائج الاستطلاع الحالية
            </h2>
            <div className="h-12 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-700"
                style={{ width: `${(votes.candidate1 / (votes.candidate1 + votes.candidate2)) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <span>عبدالرحمن {votes.candidate1}</span>
              <span>وبارنه{votes.candidate2}</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <MessageSquare className="ml-2" />
              نقاش الناخبين
            </h2>
            <div className="h-96 bg-green-50 p-4 mb-4 rounded-lg overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <p key={index} className="mb-2">
                  <strong>{msg.user}:</strong> {msg.message}
                </p>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors"
              >
                إرسال
              </button>
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="شارك برأيك..."
                className="flex-grow p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </form>
          </div>
        </main>
      </div>
      <Footer />

    </>
  );
};

export default Debate;