import React, { useState, useEffect } from 'react';
import { Clock, Eye, EyeOff, User, Mail, Flag } from 'lucide-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Log_in = () => {
    const navigate = useNavigate();

    const [nid, set_nid] = useState("");
    const [email, set_email] = useState("");
    const [user, set_user] = useState("");
    const [status, set_status] = useState("");
    const [errors, set_errors] = useState({ nid: "", email: "" });

    const validateInputs = (e) => {

        // e.preventDefault();
        // if (!validateInputs()) return;

        sessionStorage.setItem("nid", nid);
        sessionStorage.setItem("email", email);

        let isValid = true;
        const newErrors = { nid: "", email: "" };

        if (!/^\d{10}$/.test(nid)) {
            newErrors.nid = "الرقم الوطني يجب أن يتكون من 10 أرقام";
            isValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
            isValid = false;
        }

        set_errors(newErrors);
        return isValid;



    };

    async function handel_submit(e) {
        e.preventDefault();
        // if (!validateInputs()) return;

        console.log(nid, email);
        sessionStorage.setItem("nid", nid);

        try {
            const response = await axios.post(`http://localhost:3001/db/vs/sign_up`, { nid, email })
                .catch(err => { console.log(err) });
            console.log("ssssssss");
            set_status(response.data);
            console.log(status);

            if (response.data === "password") {
                alert("تم التحقق من المستخدم !!!");
                navigate("/log-in-home");
            } else if (response.data === "otp") {
                alert("مستخدم جديد !!!");
                navigate("/log-in-new");
            }
            else if (response.data === "nothing") {
                alert("حدث خطا !!!");
            }
        } catch (error) {
            console.log("Log in failed", error);
            alert("Log in failed");
        }

        set_nid("");
        set_email("");
    }

    return (
        <div className="min-h-screen   text-white flex justify-center items-center "
            style={{
                backgroundImage: "url('https://png.pngtree.com/background/20230710/original/pngtree-jordanian-flag-painting-adorns-brick-wall-solid-square-symbol-photo-picture-image_4200049.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%", // Set to your desired width
                height: "100vh" // Set to your desired height or use a specific value
            }} >
            <div className="min-h-screen w-full bg-black bg-opacity-50 flex justify-center items-center p-4">
                <div className="bg-white/20  backdrop-blur-lg w-full max-w-md rounded-lg p-8 shadow-lg">
                    <div className="flex justify-center mb-6">
                        <Flag className="text-green-400" size={48} />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-center">التسجيل للمشاركة في الانتخابات</h2>
                    <form className="space-y-6" onSubmit={handel_submit}>
                        <div className="relative">
                            <label htmlFor="nationalId" className="block text-sm font-medium mb-1">الرقم الوطني</label>
                            <div className="flex items-center">
                                <User className="absolute left-3 text-gray-400" size={18} />
                                <input
                                    id="nationalId"
                                    name="nationalId"
                                    type="text"
                                    placeholder="أدخل الرقم الوطني"
                                    value={nid}
                                    onChange={(e) => { set_nid(e.target.value) }}
                                    className="w-full pl-10 pr-3 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border border-white/30 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                    required
                                />
                            </div>
                            {errors.nid && <p className="text-red-300 text-xs mt-1">{errors.nid}</p>}
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
                            <div className="flex items-center">
                                <Mail className="absolute left-3 text-gray-400" size={18} />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="أدخل بريدك الإلكتروني"
                                    value={email}
                                    onChange={(e) => { set_email(e.target.value) }}
                                    className="w-full pl-10 pr-3 py-2 bg-white/10 text-white placeholder-gray-300 rounded-md border border-white/30 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                    required
                                />
                            </div>
                            {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                        >
                            تسجيل
                        </button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-300">
                        شارك في بناء مستقبل الأردن. صوتك مهم!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Log_in;