import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Debate() {
  const navigate = useNavigate();

  const [personOneID, setPersonOneID] = useState("");
  const [personTwoID, setPersonTwoID] = useState("");
  const [description, setDescription] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // شيك بوكس

  const [VpersonOneID, setVpersonOneID] = useState("hidden");
  const [VpersonTwoID, setVpersonTwoID] = useState("hidden");
  const [Vdescription, setVdescription] = useState("hidden");
  const [VtermsAccepted, setVtermsAccepted] = useState("hidden");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (personOneID.length !== 10) {
      setVpersonOneID("block");
      return;
    } else {
      setVpersonOneID("hidden");
    }
    if (personTwoID.length !== 10) {
      setVpersonTwoID("block");
      return;
    } else {
      setVpersonTwoID("hidden");
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

    sessionStorage.setItem("title", "");
    sessionStorage.setItem("image", "");
    sessionStorage.setItem("plan", "50");
    sessionStorage.setItem("nameAd", "مناظرة");
    sessionStorage.setItem("candidate_one_id", personOneID);
    sessionStorage.setItem("candidate_two_id", personTwoID);
    sessionStorage.setItem("price", "50.00");
    sessionStorage.setItem("request_type", false);
    sessionStorage.setItem("description", description);
    navigate("/payment"); // وجهة الصفحة التالية
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#000000]">
            شراء مناظرة
          </h2>
          <div className="flex justify-center space-x-4 mt-4 mb-3">
           
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="personOneID"
              >
                الرقم الوطني للمناظر الأول
              </label>
              <input
                id="personOneID"
                type="text"
                placeholder="أدخل الرقم الوطني للشخص الأول"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37ff7d] transition"
                value={personOneID}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value) && value.length <= 10) {
                    setPersonOneID(value);
                  }
                }}
                maxLength={10}
              />
              <div className={`${VpersonOneID} mt-2 text-sm text-[red]`}>
                {personOneID.length !== 10
                  ? "الرقم الوطني يجب أن يكون مكوناً من 10 أرقام"
                  : null}
              </div>
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="personTwoID"
              >
                الرقم الوطني للمناظر الثاني
              </label>
              <input
                id="personTwoID"
                type="text"
                placeholder="أدخل الرقم الوطني للشخص الثاني"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37ff7d] transition"
                value={personTwoID}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value) && value.length <= 10) {
                    setPersonTwoID(value);
                  }
                }}
                maxLength={10}
              />
              <div className={`${VpersonTwoID} mt-2 text-sm text-[red]`}>
                {personTwoID.length !== 10
                  ? "الرقم الوطني يجب أن يكون مكوناً من 10 أرقام"
                  : null}
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
                placeholder="أدخل وصف المناظرة"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37ff7d] transition h-32 resize-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className={`${Vdescription} mt-2 text-sm text-[red]`}>
                الرجاء إدخال وصف المناظرة
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-[#182D7E] border-gray-300 rounded focus:ring-[#37ff7d] transition"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label
                htmlFor="terms"
                className="ml-2 mr-2 text-gray-700 font-medium"
              >
                أوافق على{" "}
                <span className="hover:text-blue-500 text-blue-700">
                  <Link to="/Laws">الشروط والأحكام</Link>
                </span>
              </label>
            </div>
            <div className={`${VtermsAccepted} mt-2 text-sm text-[red]`}>
              يجب الموافقة على{" "}
              <Link to="/Laws" className="hover:text-blue-500 text-blue-700">
                الشروط والأحكام
              </Link>
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

export default Debate;
