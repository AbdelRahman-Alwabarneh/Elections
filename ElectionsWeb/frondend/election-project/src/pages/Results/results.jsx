import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
import PartyResults from "./partyResult";
import LocalResults from "./localResult";
import { Users, Flag } from "lucide-react";
import starImg from "../../assets/images/starImg.png";
import { useNavigate } from "react-router-dom";
const Results = () => {
    const navigate = useNavigate();
    useEffect(() => {
        fetchCountdown();
      }, []);
    const [countdown, setCountdown] = useState([]);
    const fetchCountdown = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3001/api/getCountdown"
          );
    
          setCountdown(response.data);
        } catch (error) {
          console.error("Error fetching countdown:", error);
        }
      };
    
   
    
      if(countdown.Timer){
        navigate("/");
      }
    
    const [activeMainTab, setActiveMainTab] = useState("party");
    const [partyResults, setPartyResults] = useState([]);

    useEffect(() => {
        fetchPartyResults();
    }, []);

    const fetchPartyResults = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/party-lists/threshold");
            const partiesPassingThreshold = response.data.partiesPassingThreshold.map((party, index) => ({
                name: party.name,
                numOfVotes: party.numOfVotes,
                color: getFlagColor(index),
                organizer: party.organizer
            }));
            setPartyResults(partiesPassingThreshold);
        } catch (error) {
            console.error("Error fetching party results:", error);
        }
    };

    const getFlagColor = (index) => {
        const flagColors = ["#D31145", "#007A3D", "#000000", "#F3F4F6"];
        return flagColors[index % flagColors.length];
    };

    const TabButton = ({ label, isActive, onClick, icon }) => (
        <button
            className={`flex items-center px-4 py-2 rounded-t-lg font-semibold transition-all duration-300 text-sm md:text-base ${isActive
                ? "text-white bg-green-700 border-t-2 border-r-2 border-l-2 border-green-700 shadow-md"
                : "bg-white text-green-700 hover:bg-green-200 hover:shadow-lg"
                }`}
            onClick={onClick}
        >


            {icon}
            <span className="ml-2">{label}</span>
        </button>
    );

    return (
        <>
            <Navbar />
            <main className="bg-gradient-to-b from-gray-100 to-gray-200">
                <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 animate-fadeIn">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                نتائج الانتخابات البرلمانية الأردنية
                            </h1>
                            <div className="flex items-center justify-center m-5">
                                <img src={starImg} alt="Star" className="w-20 md:w-24 animate-pulse" />
                            </div>
                            <div className="flex justify-center">
                                <div className="w-10 h-7 md:w-12 md:h-8 bg-black  transform hover:scale-110 transition-transform duration-300"></div>
                                <div className="w-10 h-7 md:w-12 md:h-8 bg-white border border-gray-300  transform hover:scale-110 transition-transform duration-300"></div>
                                <div className="w-10 h-7 md:w-12 md:h-8 bg-green-700  transform hover:scale-110 transition-transform duration-300"></div>
                                <div className="w-10 h-7 md:w-12 md:h-8 bg-red-700  transform hover:scale-110 transition-transform duration-300"></div>
                            </div>
                        </div>

                        <div className="bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-3xl">
                            <div className="flex border-b border-gray-200 overflow-x-auto">
                                <TabButton
                                    label="نتائج الاحزاب"
                                    isActive={activeMainTab === "party"}
                                    onClick={() => setActiveMainTab("party")}
                                    icon={<Users size={20} className="text-current" />}
                                />
                                <TabButton
                                    label="نتائج القائمة المحلية"
                                    isActive={activeMainTab === "local"}
                                    onClick={() => setActiveMainTab("local")}
                                    icon={<Flag size={20} className="text-current" />}
                                />
                            </div>

                            <div className="p-4 md:p-6 lg:p-8">
                                {activeMainTab === "party" ? (
                                    <PartyResults partyResults={partyResults} />
                                ) : (
                                    <LocalResults />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Results;