import React, { useState, useEffect } from 'react';
import { Clock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Log_in_new = () => {
  const navigate = useNavigate();

  const [nid, set_nid] = useState(sessionStorage.getItem("nid") || "");
  const [email, set_email] = useState(sessionStorage.getItem("email") || "");
  const [otp, set_otp] = useState("");
  const [user, set_user] = useState("");
  const [result, set_result] = useState("");
  const [errors, set_errors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/db/vs/user`, { nid })
      .then((res) => { set_user(res.data) })
      .catch((err) => console.log(err))
  }, []);

  const validateInputs = () => {
    let tempErrors = {};
    if (!nid || !/^\d{10}$/.test(nid)) {
      tempErrors.nid = "الرقم الوطني يجب أن يتكون من 10 أرقام";
    }
    if (!otp || otp.length < 6) {
      tempErrors.otp = "كلمة المرور المؤقتة يجب أن تتكون من 6 أحرف على الأقل";
    }
    set_errors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  async function handel_submit(e) {
    e.preventDefault();
    // if (!validateInputs()) return;

    try {
      const response = await axios.post(`http://localhost:3001/db/vs/log-in-new`, { nid, otp });
      set_result(response.data);

      if (response.data == "matched") {
        alert("تم تسجيل الدخول بنجاح !!!");
        navigate("/update-pass");
      } else {
        alert("حدث خطا !!!");
      }
    } catch (error) {
      console.log("Log in failed", error);
      alert("Log in failed", error);
    }

    set_nid("");
    set_email("");
    set_otp("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white flex justify-center items-center "
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20230710/original/pngtree-jordanian-flag-painting-adorns-brick-wall-solid-square-symbol-photo-picture-image_4200049.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%", // Set to your desired width
        height: "100vh" // Set to your desired height or use a specific value
      }} >
      <div className="min-h-screen w-full bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div className="bg-white/20 backdrop-blur-lg w-full max-w-md rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">التسجيل للمشاركة في الانتخابات</h2>
          <h3 className="text-lg mb-6 text-center">تم ارسال كلمة مرور مؤقتة على ايملك</h3>
          <form className="space-y-6" onSubmit={handel_submit}>
            <div>
              <label htmlFor="nationalId" className="block text-sm font-medium mb-1">الرقم الوطني</label>
              <div className="relative">
                <input
                  id="nationalId"
                  name="nationalId"
                  type="text"
                  placeholder="أدخل الرقم الوطني"
                  value={nid}
                  onChange={(e) => { set_nid(e.target.value) }}
                  className={`w-full pl-3 pr-10 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border ${errors.nid ? 'border-red-500' : 'border-white/30'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                  required
                />
                <LogIn className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              {errors.nid && <p className="text-red-500 text-xs mt-1">{errors.nid}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => { set_email(e.target.value) }}
                className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border border-white/30 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">كلمة المرور المؤقتة</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="أدخل كلمة المرور المؤقتة"
                  value={otp}
                  onChange={(e) => { set_otp(e.target.value) }}
                  className={`w-full pl-3 pr-10 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border ${errors.otp ? 'border-red-500' : 'border-white/30'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                  required
                />
                <LogIn className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              تسجيل
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Log_in_new;