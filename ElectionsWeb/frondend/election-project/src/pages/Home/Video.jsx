import React from "react";
import Video1 from "../../assets/videos/videoplayback.mp4";
function Video() {
  return (
    <>
      <div className="text-center  bg-[#ffffff]">
        <h2 className="font-cairo text-3xl font-bold pt-12 mb-4">
          آلية التصويت
        </h2>
        <p className="font-cairo">
          .في هذا المقطع، ستتعلم آلية التصويت في الانتخابات الأردنية وممارسة حقك
          الديمقراطي
        </p>
        <div className="block md:flex justify-center items-center max-h-screen px-4 py-8 md:px-10 md:py-12">
          <div className="relative w-full max-w-screen-lg h-auto">
            {/* ظل وخلفية */}
            <div className="absolute inset-0 bg-[#ffd4a1] from-purple-500 to-indigo-600 opacity-30 rounded-xl blur-lg"></div>

            {/* عنصر الفيديو */}
            <video
              controls
              className="relative w-full h-full max-h-96 md:max-h-screen rounded-xl shadow-2xl border border-gray-700 object-cover"
            >
              <source src={Video1} type="video/mp4" />
              .المتصفح الذي تستخدمه لا يدعم تشغيل الفيديو
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
