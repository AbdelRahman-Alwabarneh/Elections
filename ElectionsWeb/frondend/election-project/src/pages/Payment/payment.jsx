import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
const initialOptions = {
  "client-id":
    "AXSHzO_ufOdxM-ouhu0UJ_8xAsr5RnrYC09jLAs5YTnLe97HTxEWyy7jXJ-Qm5Qh-Yid6GNCWX9DX807",
  currency: "USD",
  intent: "capture",
};

const PaymentPage = () => {
  const title = sessionStorage.getItem("title"); // العنوان
  const image = sessionStorage.getItem("image"); // رابط الصورة
  const description = sessionStorage.getItem("description"); // الوصف
  const plan = sessionStorage.getItem("plan"); // نوع الخطة كم ثانية
  const request_type = sessionStorage.getItem("request_type"); // ترو او فولس
  const price = sessionStorage.getItem("price"); // السعر
  const nameAd = sessionStorage.getItem("nameAd"); // اسم الأعلان
  const candidate_one_id = sessionStorage.getItem("candidate_one_id"); // رقم الوطني للمناظر الأول
  const candidate_two_id = sessionStorage.getItem("candidate_two_id"); // رقم الوطني للمناظر الثاني
  // تعريف حالات لحفظ قيم الإدخال
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNameChange = (e) => setCardName(e.target.value);
  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleCvvChange = (e) => setCvv(e.target.value);
  const [showdata, setShowdata] = useState("hidden");

  const handleExpiryMonthChange = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // إزالة أي حرف غير رقمي

    if (value.length <= 2) {
      const month = parseInt(value);
      if (value === "" || (month >= 0 && month <= 12)) {
        setExpiryMonth(value);
      } else {
      }
    }
  };
  const handleExpiryYearChange = (event) => {
    const value = event.target.value;
    // التحقق من أن الإدخال هو رقم ولا يتجاوز طوله رقمين
    if (/^\d{0,2}$/.test(value)) {
      setExpiryYear(value);
      setShowdata("hidden");
    } else {
      setShowdata("block");
    }
  };

  const [showCardName, setShowCardName] = useState("hidden");
  const [showCardNumber, setShowCardNumber] = useState("hidden");
  const [showCvv, setShowCvv] = useState("hidden");

  const Checknumbers = /^(\d{4}[-\s]?){3}\d{4}$/.test(cardNumber);
  const CheckCvv = /^\d{3}$/.test(cvv);
  const navigate = useNavigate();

  async function ads() {
    try {
      const response = await axios.post("http://localhost:3001/api/AddAds", {
        request_type: request_type,
        title: title,
        image: image,
        description: description,
        plan: plan,
        candidate_one_id: candidate_one_id,
        candidate_two_id: candidate_two_id,
      });
    } catch (err) {
      console.log("Error occurred:", err);
    }
  }



  function Submit() {
    if (!Checknumbers) {
      setShowCardNumber("block");
    } else {
      setShowCardNumber("hidden");
    }
    if (cardName === "") {
      setShowCardName("block");
      return;
    } else {
      setShowCardName("hidden");
    }
    if (!CheckCvv || cvv === "") {
      setShowCvv("block");
      return;
    } else {
      setShowCvv("hidden");
    }
    ads();
    navigate("/invoice");
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-5xl w-full flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0">
          {/* ملخص الطلب (اليمين) */}
          <div className="lg:w-1/3 mt-[16px] ml-[30px]">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right border-b-2 border-gold pb-2">
              ملخص الطلب
            </h3>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl shadow-inner">
              <div className="flex justify-between items-center text-gray-700 mb-4">
                <p className="font-semibold">اسم المنتج</p>
                <p className="font-bold">{nameAd}</p>
              </div>
              <div className="flex justify-between items-center text-gray-700 mb-4">
                <p className="font-semibold">سعر المنتج</p>
                <p className="font-bold">
                  {price}
                  <span className="ml-1 text-[10px] font-bold">JOD</span>{" "}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-gold via-gray-300 to-gold my-4"></div>
              <div className="flex justify-between items-center text-gray-900 font-bold text-xl">
                <p>الإجمالي</p>
                <p>
                  {price}
                  <span className="ml-1 text-sm">JOD</span>{" "}
                </p>
              </div>
            </div>
          </div>

          {/* خيارات الدفع (اليسار) */}
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 border-b-2 border-gold pb-4">
              الدفع
            </h2>

            {/* معلومات الفوترة */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right">
                معلومات بطاقة الدفع
              </h3>
              <form>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-right"
                    htmlFor="cardName"
                  >
                    اسم حامل البطاقة
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    className="shadow-lg appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gold transition duration-300 text-right"
                    placeholder="أدخل اسم حامل البطاقة"
                    value={cardName}
                    onChange={handleCardNameChange}
                  />
                  <div className={`${showCardName}  mt-2 text-sm text-[red]`}>
                    الرجاء إدخال اسم حامل البطاقة
                  </div>
                </div>{" "}
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-right"
                    htmlFor="cardNumber"
                  >
                    رقم البطاقة
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="shadow-lg appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gold transition duration-300 text-right"
                    placeholder="xxxx xxxx xxxx xxxx"
                    value={cardNumber}
                    maxLength={16} // يمنع إدخال أكثر من 16 رقم
                    onChange={(e) => {
                      const value = e.target.value;
                      // يسمح فقط بإدخال أرقام
                      if (/^\d*$/.test(value)) {
                        handleCardNumberChange(e);
                      }
                    }}
                  />
                  <div className={`${showCardNumber} mt-2 text-sm text-[red]`}>
                    الرجاء إدخال رقم البطاقة المكون من 16 رقم
                  </div>
                </div>
                <div className="flex space-x-reverse space-x-4 mb-6">
                  <div className="w-[50%]">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-right"
                      htmlFor="cardExpiry"
                    >
                      تاريخ انتهاء البطاقة
                    </label>
                    <div className="flex items-center shadow-lg border-2 border-gray-200 rounded-lg overflow-hidden">
                      <input
                        type="text"
                        id="expiryMonth"
                        placeholder="MM"
                        maxLength="2"
                        className="w-20 py-3 px-4 text-gray-700 leading-tight focus:outline-none text-center"
                        value={expiryMonth}
                        onChange={handleExpiryMonthChange}
                      />
                      <span className="text-gray-500 mx-2">/</span>
                      <input
                        type="text"
                        id="expiryYear"
                        placeholder="YY"
                        maxLength="2"
                        className="w-20 py-3 px-4 text-gray-700 leading-tight focus:outline-none text-center"
                        value={expiryYear}
                        onChange={handleExpiryYearChange}
                      />
                    </div>
                    <div className={`${showdata}  mt-2 text-sm text-[red]`}>
                      الرجاء إدخال رمز الأمان بشكل صحيح
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 text-right"
                      htmlFor="cvv"
                    >
                      رمز الأمان (CVV)
                    </label>
                    <input
                      maxLength={3}
                      type="text"
                      id="cvv"
                      className="shadow-lg appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gold transition duration-300 text-right"
                      placeholder="xxx"
                      value={cvv}
                      onChange={(e) => {
                        const value = e.target.value;
                        // يسمح فقط بإدخال أرقام
                        if (/^\d*$/.test(value)) {
                          handleCvvChange(e);
                        }
                      }}
                    />
                    <div className={`${showCvv}  mt-2 text-sm text-[red]`}>
                      الرجاء إدخال رمز الأمان بشكل صحيح
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                Submit();
              }}
            >
              <div className="flex items-center justify-between mb-7">
                <button
                  type="submit"
                  className="bg-gradient-to-r w-full from-green-500 to-green-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline hover:from-green-600 hover:to-green-700 transition duration-300 shadow-lg"
                >
                  إكمال الشراء
                </button>
              </div>
            </form>
            {/* طريقة الدفع */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right">
                طرق دفع اخرى
              </h3>
              <div className="flex flex-col space-y-4">
                <PayPalScriptProvider options={initialOptions}>
                  <div className="flex justify-center items-center">
                    <PayPalButtons
                      className="paypal-button w-full"
                      style={{
                        layout: "horizontal",
                        shape: "rect",
                        color: "blue",
                        tagline: false,
                      }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            {
                              description: "",
                              amount: {
                                currency_code: "USD",
                                value: price,
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                          ads();
                          navigate("/invoice");
                        });
                      }}
                    />
                  </div>
                </PayPalScriptProvider>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
