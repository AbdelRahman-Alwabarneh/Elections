import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update_password = () => {
  const navigate = useNavigate();
  const [nid, set_nid] = useState(sessionStorage.getItem("nid") || "");
  const [pass, set_pass] = useState("");
  const [confirmPass, set_confirmPass] = useState("");
  const [showPassword, set_showPassword] = useState(false);
  const [errors, set_errors] = useState({});

  const validateInputs = () => {
    let tempErrors = {};
    if (!pass || pass.length < 8) {
      tempErrors.pass = "كلمة المرور يجب أن تتكون من 8 أحرف على الأقل";
    }
    if (pass !== confirmPass) {
      tempErrors.confirmPass = "كلمة المرور غير متطابقة";
    }
    set_errors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  async function handel_submit(e) {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const response = await axios.post(`http://localhost:3001/db/vs/new-pass`, { nid, pass });
      alert("تم تحديث كلمة المرور بنجاح!");
      navigate("/log-in-home");
    } catch (error) {
      console.log("فشل تحديث كلمة المرور", error);
      alert("فشل تحديث كلمة المرور: " + error.message);
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20230710/original/pngtree-jordanian-flag-painting-adorns-brick-wall-solid-square-symbol-photo-picture-image_4200049.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%", // Set to your desired width
        height: "100vh" // Set to your desired height or use a specific value
      }}  >
      <div className="min-h-screen bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div className="bg-white/20 backdrop-blur-lg w-full max-w-md rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">كلمة مرور جديدة</h2>
          <form className="space-y-6" onSubmit={handel_submit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1 text-white">كلمة المرور الجديدة</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة مرور جديدة"
                  value={pass}
                  onChange={(e) => set_pass(e.target.value)}
                  className={`w-full pl-3 pr-10 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border ${errors.pass ? 'border-red-500' : 'border-white/30'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                  required
                />
                <button
                  type="button"
                  onClick={() => set_showPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.pass && <p className="text-red-500 text-xs mt-1">{errors.pass}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1 text-white">تأكيد كلمة المرور</label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="أكد كلمة المرور الجديدة"
                  value={confirmPass}
                  onChange={(e) => set_confirmPass(e.target.value)}
                  className={`w-full pl-3 pr-10 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border ${errors.confirmPass ? 'border-red-500' : 'border-white/30'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                  required
                />
              </div>
              {errors.confirmPass && <p className="text-red-500 text-xs mt-1">{errors.confirmPass}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              تحديث كلمة المرور
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update_password;