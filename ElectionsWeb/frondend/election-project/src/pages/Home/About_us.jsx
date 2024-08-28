import services_svg from "../../assets/images/image 4.png";

function About() {
  return (
    <div className="bg-[#312d2d] text-white pt-12">
      <h2 className="font-cairo text-3xl font-bold text-center  mb-3 ">
        الأنتخابات الأردنية
      </h2>
      <p className="font-cairo text-center mb-[50px]">
        .تُمثّل الانتخابات البرلمانية الأردنية فرصة جوهرية لكل مواطن للتعبير عن
        رأيه بحرية <br /> .والمشاركة في بناء الوطن وتعزيز المسار الديمقراطي
      </p>
      <div className="font-cairo sm:flex items-center justify-center max-w-screen-xl mx-auto [direction:rtl]">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src={services_svg} />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="border-b-2 border-[#000] uppercase">
              عن الهيئة
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              الانتخابات البرلمانية
            </h2>
            <p className="font-semibold">
              هي الأساس الذي يُبنى عليه نظام الحكم الديمقراطي في الأردن،
              <br />
              حيث تُمكّن المواطنين من اختيار ممثليهم في البرلمان،
              <br />
              الذي يعدّ الركيزة الأساسية في صياغة التشريعات ورسم السياسات
              الوطنية.
              <br />
              من خلال مشاركتكم في الانتخابات، تساهمون بشكل مباشر في تشكيل
              المستقبل السياسي والاقتصادي والاجتماعي للأردن،
              <br />
              وتضمنون أن تكون أصواتكم مسموعة في اتخاذ القرارات التي تؤثر على
              حياتكم اليومية
              <br />
              تُمثّل هذه الانتخابات فرصة لكل مواطن للتعبير عن رأيه والمشاركة في
              بناء الوطن، وضمان أن يعكس البرلمان تنوع واحتياجات المجتمع الأردني.
              <br />
              ندعوكم جميعًا للمشاركة الفعالة في هذه الانتخابات،
              <br />
              لأن مستقبلكم ومستقبل الأردن يبدأ بصوتكم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
