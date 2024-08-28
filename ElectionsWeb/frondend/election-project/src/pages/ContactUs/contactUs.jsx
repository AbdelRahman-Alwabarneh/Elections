import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";

const ContactUs = () => {


  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [message, set_message] = useState("");


  async function handel_submit(e) {
    e.preventDefault();
    console.log("inside contact handle");
    // if (!validateInputs()) return;

    console.log(name, email, message);

    try {
      console.log("inside contact try");
      const response = await axios.post(`http://localhost:3001/db/vs/contact-message`, { name, email, message })
        .catch(err => { console.log(err) });
      console.log("inside message");

      alert("تم الارسال بنجاح");

    } catch (error) {
      console.log("Log in failed", error);
      alert("Log in failed");
    }

    set_name("");
    set_email("");
    set_message("");
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 ">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-red-700 text-white p-8 md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-right">اتصل بنا</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full p-3 rounded text-right text-gray-800"

                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => set_name(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full p-3 rounded text-right text-gray-800"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => set_email(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="اكتب رسالتك هنا"
                  className="w-full h-32 p-3 rounded text-right text-gray-800"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => set_message(e.target.value)}
                  required
                />
                {/* <textarea
                placeholder="اكتب رسالتك هنا"
                className="w-full p-3 rounded h-32 text-right text-gray-800"
              ></textarea> */}
                <button
                  type="submit"
                  onClick={handel_submit}
                  className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition duration-300"
                >
                  إرسال
                </button>
              </form>
            </div>
            <div className="bg-white p-8 md:w-1/2 flex items-center justify-center">
              <div className="text-center">
                <div className="w-80 mx-auto mb-6">
                  {/* <div className="w-full h-full bg-red-700 relative">
                  <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
                  <div className="absolute top-0 left-0 w-0 h-0 
                                  border-t-[80px] border-t-transparent
                                  border-l-[160px] border-l-green-600"></div>
                </div> */}
                  <img src="https://th.bing.com/th/id/OIP.vvVRVsZGl8ozlVbBeEtz2QHaD4?w=323&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="w-full h-auto" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">الهيئة المستقلة للانتخابات</h2>
                <p className="text-gray-600">عمان، الأردن</p>
                <p className="text-gray-600">هاتف: +962 XXXXXXXX</p>
                <p className="text-gray-600">البريد الإلكتروني: info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;