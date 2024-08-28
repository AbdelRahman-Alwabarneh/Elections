import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ADS_Page() {
  const navigate = useNavigate();

  // إنشاء State لكل حقل من الحقول
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [plan, setPlan] = useState("5000");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [Vtitle, setVtitle] = useState("hidden");
  const [Vimage, setVimage] = useState("hidden");
  const [Vdescription, setVdescription] = useState("hidden");
  const [VtermsAccepted, setVtermsAccepted] = useState("hidden");

  // دالة للتعامل مع تقديم النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setVtitle("block");
      return;
    } else {
      setVtitle("hidden");
    }
    if (image === "") {
        setVimage("block");
      return;
    } else {
        setVimage("hidden");
    }
    if (description === "") {
        setVdescription("block");
      return;
    } else {
        setVdescription("hidden");
    }
    if (termsAccepted === false) {
        setVtermsAccepted("block");
      return;
    } else {
        setVtermsAccepted("hidden");
    }

    sessionStorage.setItem("title", title);
    sessionStorage.setItem("image", image);
    sessionStorage.setItem("description", description);
    sessionStorage.setItem("plan", plan);
    sessionStorage.setItem("request_type", true);
    sessionStorage.setItem("candidate_one_id", "");
    sessionStorage.setItem("candidate_two_id", "");
    if (plan == "5000") {
      sessionStorage.setItem("price", "10.00");
      sessionStorage.setItem("nameAd", "اعلان 5 ثواني");
    }
    if (plan == "15000") {
      sessionStorage.setItem("price", "12.00");
      sessionStorage.setItem("nameAd", "اعلان 15 ثانية");
    }
    if (plan == "30000") {
      sessionStorage.setItem("price", "14.00");
      sessionStorage.setItem("nameAd", "اعلان 30 ثانية");
    }
    navigate("/payment");
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#000000]">
            طلب إعلان
          </h2>
          <div className="flex justify-center space-x-4 mt-4 mb-3">

 
</div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="title"
              >
                العنوان
              </label>
              <input
                id="title"
                type="text"
                placeholder="أدخل عنوان الإعلان"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37ff7d] transition"
                value={title} // القيمة المخزنة في state
                onChange={(e) => setTitle(e.target.value)} // تحديث القيمة في state
              />
              <div className={`${Vtitle}  mt-2 text-sm text-[red]`}>
                الرجاء إدخال عنوان الأعلان
              </div>
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="image"
              >
                 الصورة <span><sub>1920x602</sub></span>
              </label>
              <input
                id="image"
                type="text"
                placeholder="أدخل رابط الصورة"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37ff7d] transition"
                value={image} // القيمة المخزنة في state
                onChange={(e) => setImage(e.target.value)} // تحديث القيمة في state
              />
                 <div className={`${Vimage}  mt-2 text-sm text-[red]`}>
                الرجاء إدخال صورة الأعلان
              </div>
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="description"
              >
                الوصف
              </label>
              <textarea
                id="description"
                placeholder="أدخل وصف الإعلان"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37ff7d] transition h-32 resize-none"
                value={description} // القيمة المخزنة في state
                onChange={(e) => setDescription(e.target.value)} // تحديث القيمة في state
              ></textarea>
                <div className={`${Vdescription}  mt-2 text-sm text-[red]`}>
                الرجاء إدخال وصف الأعلان
              </div>
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="plan"
              >
                خطة الإعلان
              </label>
              <select
                id="plan"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37ff7d] transition"
                value={plan} // القيمة المخزنة في state
                onChange={(e) => setPlan(e.target.value)} // تحديث القيمة في state
              >
                <option value="5000">إعلان 5 ثواني -- 10 دنانير</option>
                <option value="15000">إعلان 15 ثانية -- 12 دنانير</option>
                <option value="30000">إعلان 30 ثانية -- 14 دنانير</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-[#182D7E] border-gray-300 rounded focus:ring-[#37ff7d] transition"
                checked={termsAccepted} // القيمة المخزنة في state
                onChange={(e) => setTermsAccepted(e.target.checked)} // تحديث القيمة في state
              />
              <label
                htmlFor="terms"
                className="ml-2 mr-2 text-gray-700 font-medium"
              >
                أوافق على{" "}
                <span className="hover:text-blue-500 text-blue-700">
                  <Link to="/Laws" >الشروط والأحكام</Link>
                </span>
              </label>
              
            </div>
            <div className={`${VtermsAccepted}  mt-2 text-sm text-[red]`}>
                يجب الموافقة على <Link to="/Laws" className="hover:text-blue-500 text-blue-700">الشروط والأحكام</Link>
              </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#26a935] text-white rounded-md font-medium text-lg hover:bg-[#2bc03d] transition"
            >
              إرسال الطلب
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ADS_Page;
