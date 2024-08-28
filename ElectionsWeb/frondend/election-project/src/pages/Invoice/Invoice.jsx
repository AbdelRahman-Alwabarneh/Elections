import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
import { useState, useEffect, } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Invoice = () => {
  const nameAd = sessionStorage.getItem("nameAd");
  const price = sessionStorage.getItem("price"); // السعر

  
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r bg-[#22ad68] text-white text-center">
            <h1 className="text-2xl font-bold">تم الدفع بنجاح!</h1>
            <p className="mt-1 text-lg">شكراً لك على الشراء.</p>
          </div>
          <div className="p-6">
            <div className="mb-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                تفاصيل الطلب
              </h2>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-gray-700 font-medium">اسم المنتج:</span>
              <span className="text-gray-900">{nameAd}</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-gray-700 font-medium">سعر المنتج:</span>
              <p>
                {price}
                <span className="ml-1 text-sm"><sub>JOD</sub></span>{" "}
              </p>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-gray-700 font-medium">حالة الدفع:</span>
              <span className="text-green-600 font-semibold">تم الدفع</span>
            </div>
          </div>
          <div className="p-6 bg-gray-50 text-center">
            <Link to="/" className="bg-[#059b4f] text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              العودة إلى الرئيسية
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Invoice;
