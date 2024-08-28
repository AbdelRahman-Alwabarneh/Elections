import { useState } from "react";
import { useInView } from "react-intersection-observer";

const faqData = [
  {
    question: "ما هي ساعات العمل لديكم؟",
    answer:
      "ساعات العمل لدينا 24 ساعة على مدار الأسبوع",
  },
  {
    question: "كيف يمكنني التواصل مع خدمة العملاء؟",
    answer:
      "يمكنك التواصل مع خدمة العملاء عبر الهاتف أو البريد الإلكتروني أو الدردشة المباشرة.",
  },

  {
    question: "ما هي سياسة الإرجاع لديكم؟",
    answer:
      "لا يمكنك اعادة الأموال بعد الشراء",
  },


  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نوفر عدة طرق للدفع مثل البطاقات الائتمانية، التحويل البنكي، والدفع عبر خدمات الباي بال.",
  },
 


];

function FAQ() {
  const [openFAQs, setOpenFAQs] = useState({});
  const [ref, inView] = useInView({ triggerOnce: true });

  function toggleFAQ(index) {
    setOpenFAQs((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <section className="pt-[50px] bg-[#ffffff] font-cairo [direction:rtl] text-[#469c1e]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg font-medium max-w-3xl mx-auto">
            أكثر الأسئلة شيوعاً يمكنك التعرف عليها من هنا
          </p>
        </div>
        <div
          ref={ref}
          className={`max-w-4xl mx-auto space-y-4 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#469c1e] rounded-lg border border-[#15f820] shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                type="button"
                className="flex items-center justify-between w-full px-6 py-4 border-b rounded-b-lg border-white"
              >
                <span className="text-lg sm:text-xl font-semibold text-white">
                  {faq.question}
                </span>
                <i
                  className={`text-white ${
                    openFAQs[index]
                      ? "fa-solid fa-angle-up"
                      : "fa-solid fa-angle-down"
                  }`}
                ></i>
              </button>
              <div
                className={`${openFAQs[index] ? "block" : "hidden"} px-6 py-4`}
              >
                <p className="text-white font-medium text-base whitespace-pre-wrap">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
       
        </div>
      </div>
    </section>
  );
}

export default FAQ;
