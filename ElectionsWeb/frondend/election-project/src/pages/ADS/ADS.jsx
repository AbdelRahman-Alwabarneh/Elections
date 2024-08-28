import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
function AdsPage() {
  const [adsData, setAdsData] = useState([]);

  // جلب بيانات الإعلانات من الخادم
  const fetchAds = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/getAds");
      setAdsData(response.data); // حفظ جميع البيانات
    } catch (error) {
      console.error("Error fetching ads:", error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      <h1 className="font-cairo text-4xl font-bold text-center mb-8">الإعلانات الرسمية للمرشحين</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {adsData.map((ad, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={ad.image_url} alt={`Ad ${index + 1}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-cairo text-xl font-bold mb-2">{ad.title}</h2>
              <p className="font-cairo text-gray-700">{ad.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AdsPage;
