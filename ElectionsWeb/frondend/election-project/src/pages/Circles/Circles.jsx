import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import JordanMap from '../../assets/images/JordanMap.png';
import Navbar from '../../layouts/navbar';
import Footer from '../../layouts/footer';

const Circles = () => {
  const [circles, setCircles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCircles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/circles/circles');
        setCircles(response.data);
      } catch (error) {
        setError('Failed to fetch circles data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCircles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleCardClick = (circle) => {
    navigate('/local-lists', { state: { circle } }); // Pass the circle to LocalLists
  };

  const fadeInUp = {
    animation: 'fadeInUp 0.6s ease-out'
  };

  const keyframes = `
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <div className=" bg-gray-100 min-h-screen">
      <Navbar />

      <style>
        {keyframes}
      </style>
      <div className="max-w-6xl mx-auto mt-5 m-5 min-h-[77vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {circles.map((circle) => (
            <div
              key={circle.circle_id}
              onClick={() => handleCardClick(circle)}
              className="cursor-pointer bg-[#FFFBF6] border-2 border-[#6E0B00] shadow-md rounded-lg p-6 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-[#FCE9E4]"
              style={fadeInUp}
            >
              <img src={JordanMap} alt={`Map for ${circle.name}`} className="w-20 h-20 mb-4" />
              <h2 className="text-lg font-bold text-center text-gray-800">{circle.name}</h2>
              <p className="text-sm text-center text-gray-600">{circle.city}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Circles;
