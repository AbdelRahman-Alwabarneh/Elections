import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AutoplaySlider() {
  const [Alldata, setAlldata] = useState([]); // بيانات الإعلانات
  const [countdown, setCountdown] = useState(null); // بيانات التوقيت
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [Ohidden, sethidden] = useState("hidden");

  useEffect(() => {
    if (Alldata.length === 0) {
      sethidden("hidden");
    } else {
      sethidden("block");
    }
  }, [Alldata]);

  // جلب بيانات الإعلانات من الخادم
  const fetchAds = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/getAds");
      setAlldata(response.data.slice(-6)); // عرض آخر صورتين فقط
    } catch (error) {
      console.error("Error fetching ads:", error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  useEffect(() => {
    let timer;
    if (!isPaused && Alldata.length > 0) {
      timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Alldata.length);
      }, Alldata[currentIndex].ad_plan);
    }
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, Alldata]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Alldata.length) % Alldata.length
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 30);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Alldata.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 30);
  };

  return (
    <div className={`${Ohidden}`}>
      <h2 className="font-cairo text-3xl font-bold pt-12 mb-4 text-center">
        الإعلانات الرسمية للمرشحين
      </h2>
      <p className="font-cairo text-center mb-10">
        تعرف على المرشحين من خلال قسم الإعلانات الرسمية للمرشحين في المملكة الأردنية الهاشمية
      </p>
      <div className="relative w-full h-[602px] overflow-hidden">
        {Alldata.map((slide, index) => (
          <div key={index} className="absolute inset-0">
            <img
              src={slide.image_url} // استخدام image_url من البيانات
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
        <button
          onClick={goToPrevious}
          className="absolute text-[20px] left-2 top-1/2 w-[50px] h-[50px] transform -translate-y-1/2 bg-white/50 p-2 rounded-full z-10"
        >
          &#10095;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 text-[20px] top-1/2 w-[50px] h-[50px] transform -translate-y-1/2 bg-white/50 p-2 rounded-full z-10"
        >
          &#10094;
        </button>
      </div>
      <div className="text-center mt-4">
        <Link
      to="/AdsPage"
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-5"
        >
          عرض جميع الأعلانات
        </Link>
      </div>
    </div>
  );
}

export default AutoplaySlider;
