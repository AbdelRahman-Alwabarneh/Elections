import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
import JordanMap from '../../assets/images/JordanMap.png';
import PinImage from '../../assets/images/PinImage.png';

const ElectoralList = () => {
  const location = useLocation();
  const { circle } = location.state || {};

  console.log("Circle in ElectoralList:", circle); // Debugging line

  return (
    <div>
      <Navbar />
      <main className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full h-full flex justify-center items-center gap-16">
          {/* Card for "قوائم حزبية" */}
          <Link
            to={{
              pathname: "/party-lists",
              // state: { circle },
            }}
            className="w-96 h-96 bg-[#6E0B00] shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-800 flex flex-col items-center justify-center"
          >
            <div className="p-6 flex flex-col items-center justify-center h-full">
              <img src={JordanMap} alt="Jordan Map" className="w-24 h-24 mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-white">قوائم حزبية</h2>
              {circle && (
                <p className="text-lg text-white mt-2">{circle.name}</p>
              )}
            </div>
          </Link>

          {/* Card for "قوائم محلية" */}
          <Link
            to={{
              pathname: "/circles",
              state: { circle },
            }}
            className="w-96 h-96 bg-[#6E0B00] shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-800 flex flex-col items-center justify-center"
          >
            <div className="p-6 flex flex-col items-center justify-center h-full">
              <img src={PinImage} alt="Local Pin" className="w-24 h-24 mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-white">قوائم محلية</h2>
              {circle && (
                <p className="text-lg text-white mt-2">{circle.name}</p>
              )}
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ElectoralList;
