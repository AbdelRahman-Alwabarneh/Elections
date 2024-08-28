import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HeroSection() {
  const slides = [
    {
      image:
        "https://cdn.discordapp.com/attachments/1244726801100443701/1275794573326553119/image_2.png?ex=66c72fc9&is=66c5de49&hm=c24df5caf06f7ab92d091dda6fdecd2ecc3866b5f9271916afa609d429b61664&",
      duration: 5000,
    },
  ];
  const [countdown, setCountdown] = useState([]); // بيانات التوقيت
  const [Ratio, setRatio] = useState([]); // بيانات النسبة في المية

  // جلب بيانات التوقيت من الخادم
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

  useEffect(() => {
    fetchCountdown();

    // تحديث العداد كل دقيقة
    const interval = setInterval(() => {
      fetchCountdown();
    }, 60000); // تحديث كل دقيقة

    return () => clearInterval(interval);
  }, []);

  // حساب الوقت المتبقي
  const calculateRemainingTime = () => {
    if (!countdown) return { days: 0, hours: 0, minutes: 0 };

    const { days, hours, minutes } = countdown;

    return { days, hours, minutes };
  };

  const remainingTime = calculateRemainingTime();

  const votingPercentage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/overview"
      );

      setRatio(response.data);
    } catch (error) {
      console.error("Error fetching countdown:", error);
    }
  };

  useEffect(() => {
    votingPercentage();
  }, []);

  return (
    <div className="relative w-full h-[602px] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className="absolute inset-0">
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-1000 opacity-100`}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col items-center justify-center text-white p-8 opacity-100 transition-opacity duration-1000`}
          >
            <div className="text-center max-w-2xl px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                الوقت المتبقي لإغلاق التصويت
              </h2>
              <div className="bg-white/20 rounded-lg p-6 mb-8">
                <div className="flex flex-col sm:flex-row justify-center gap-4 rtl:gap-reverse">
                  <div className="text-center flex-shrink-0 min-w-[120px]">
                    <div className="text-4xl md:text-6xl font-bold mb-2 font-mono">
                      {remainingTime.minutes}
                    </div>
                    <div className="text-sm md:text-xl">دقيقة</div>
                  </div>

                  <div className="text-center flex-shrink-0 min-w-[120px]">
                    <div className="text-4xl md:text-6xl font-bold mb-2 font-mono">
                      {remainingTime.hours}
                    </div>
                    <div className="text-sm md:text-xl">ساعة</div>
                  </div>

                  <div className="text-center flex-shrink-0 min-w-[120px]">
                    <div className="text-4xl md:text-6xl font-bold mb-2 font-mono">
                      {remainingTime.days}
                    </div>
                    <div className="text-sm md:text-xl">يوم</div>
                  </div>
                </div>
              </div>
              {countdown.Timer ? (
                <>
                <div className="mb-6">
                  <div className="text-lg md:text-xl mb-2">
                    النسبة المئوية للإجمالي الكلي للناخبين
                  </div>
                  <div className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2">
                    {Ratio.votingPercentage}%
                  </div>
                </div>
                <div className="text-xs md:text-sm bg-white/10 rounded-full px-2 md:px-4 py-1 md:py-2 inline-block">
                يتم إجراء التحديثات بشكل دوري كل دقيقتين
              </div>
                </>
                
              ) : (
                <div className="text-center">
                  <h1 className="text-white text-4xl font-bold mb-6">
                  لقد انتهى التصويت
                  </h1>
                  <p className="text-white text-lg mb-6">
                  يمكنك الآن الاطلاع على نتائج التصويت
                  </p>
                  <Link
                    to="/results"
                    className="inline-block bg-[#3aa023] text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  >
                    عرض النتائج
                  </Link>
                </div>
              )}
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSection;
