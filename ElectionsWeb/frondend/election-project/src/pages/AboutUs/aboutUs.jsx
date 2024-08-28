import React from 'react';
import { useState, useEffect } from 'react';

import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="flex flex-col w-full ">
          <div className="bg-red-700 flex justify-center items-center text-white p-4 sm:p-8 w-full h-[50vh]  max-sm:h-[70vh] md:h-[93vh]"
            style={{
              backgroundImage: "url('https://png.pngtree.com/background/20230710/original/pngtree-jordanian-flag-painting-adorns-brick-wall-solid-square-symbol-photo-picture-image_4200049.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-right">من نحن</h2>
              <div className="space-y-4 sm:space-y-6 text-right text-base sm:text-lg bg-black bg-opacity-50 p-4 sm:p-7 rounded-md">
                <p>
                  الهيئة المستقلة للانتخابات هي الجهة المسؤولة عن إدارة العملية الانتخابية في الأردن وضمان نزاهتها وشفافيتها.
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold">مهمتنا</h3>
                <p>
                  نسعى لتعزيز الديمقراطية في الأردن من خلال إدارة انتخابات حرة ونزيهة، وضمان مشاركة جميع المواطنين في العملية الانتخابية.
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold">رؤيتنا</h3>
                <p>
                  نطمح لأن نكون مؤسسة رائدة في مجال إدارة الانتخابات، تحظى بثقة الشعب الأردني وتساهم في تطوير العملية الديمقراطية في المملكة.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 p-4 sm:p-8 md:p-24">
          <div className="p-4 sm:p-8 w-full mb-6 sm:mb-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">قيمنا</h2>
              <ul className="flex flex-wrap justify-center text-gray-600 text-base sm:text-xl">
                <li className="m-1 sm:m-2 p-2 bg-[#00000020] text-red-700 rounded">الشفافية</li>
                <li className="m-1 sm:m-2 p-2 bg-[#00000020] text-green-600 rounded">النزاهة</li>
                <li className="m-1 sm:m-2 p-2 bg-[#00000020] text-gray-100 rounded">الحيادية</li>
                <li className="m-1 sm:m-2 p-2 bg-[#00000020] text-black rounded">الكفاءة</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-right">عن الهيئة</h2>
            <div className="text-right text-base sm:text-lg space-y-4">
              <p>
                تأسست الهيئة المستقلة للانتخاب عام 2012 كجهة مستقلة تعنى بإدارة العملية الانتخابية والإشراف عليها دون تدخل أو تأثير من أي جهة, وتعد الهيئة إحدى ثمرات الإصلاح السياسي في المملكة الأردنية الهاشمية بقيادة جلالة الملك عبدالله الثاني ابن الحسين، وتعبر عن استجابة المؤسسة الرسمية للمطالب الشعبية.
              </p>
              <ul className="list-disc list-inside">
                <li>تأسست الهيئة بهدف ضمان إجراء انتخابات نيابية تتوافق مع المعايير الدولية، وبما يكفل إعادة ثقة المواطن بالعملية الانتخابية ومخرجاتها، ومعالجة تراكمات الماضي السلبية والبناء على ما تم تحقيقه من إنجازات وخطواتٍ إصلاحية.</li>
                <li>باشرت الهيئة عملها في شهر أيار من العام 2012 وتمكنت خلال فترة قياسية من العمل على بناء هيكلها المؤسسي وتوفير ضمانات استدامته، والإعداد لإجراء انتخابات مجلس النواب الأردني السابع عشر التي جرت مطلع العام 2013 كأول انتخابات تديرها الهيئة بعد إنشائها.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-8 m-4 sm:m-10 md:m-20 flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-6xl mb-4 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-right">أهدافنا الاستراتيجية</h2>
            <ul className="text-right text-base sm:text-lg list-disc list-inside space-y-2">
              <li>تعزيز ثقة المواطنين في العملية الانتخابية</li>
              <li>ضمان نزاهة وشفافية الانتخابات</li>
              <li>تطوير الإجراءات والتقنيات المستخدمة في العملية الانتخابية</li>
              <li>تعزيز المشاركة السياسية للمواطنين</li>
            </ul>
          </div>
          <img src="https://jordanews.com/wp-content/uploads/2024/04/main_image662f77aaf2651.jpg" alt="Authority Image 2" className="w-full md:w-80 h-auto mt-4 md:mt-0" />
        </div>

        <div className="bg-[#6E0B00] flex flex-col md:flex-row justify-between items-center text-white p-4 sm:p-8">
          <div className="max-w-6xl p-4 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-right">تواصل معنا</h2>
            <div className="text-right text-base sm:text-lg space-y-2">
              <p>نحن نرحب بتواصلكم واستفساراتكم. يمكنكم الاتصال بنا عبر:</p>
              <p>الهاتف: +962 6 000 0000</p>
              <p>البريد الإلكتروني: info@iec.jo</p>
              <p>العنوان: عمان، الأردن</p>
            </div>
          </div>
          <a href="contact" className='px-4 py-2 m-4 bg-white text-[#6E0B00] rounded-md'>تواصل معنا</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;