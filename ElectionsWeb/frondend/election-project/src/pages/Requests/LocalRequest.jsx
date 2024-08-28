import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddList from './AddList';
import AddPartyList from './AddPartyList';

import Navbar from '../../layouts/navbar'
import Footer from '../../layouts/footer'

function LocalRequest() {
  const navigate = useNavigate();

  const handleCreateList = () => {
    navigate('/AddList'); // الانتقال إلى صفحة إضافة القائمة
  };
  const handleCreateList2 = () => {
    navigate('/AddPartyList'); // الانتقال إلى صفحة إضافة القائمة
  };


  return (
    <div><Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32 ">
        <h1 className="mx-auto max-w-4xl max-sm:xl max-sm:mb-20 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          <span className="inline-block">
            <span className="relative whitespace-nowrap text-red-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-green-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">رشح نفسك</span>
            </span>
          </span>
          <span className="inline-block"> كن صوتًا للتغيير. !</span>
        </h1>
        <p className="mx-auto -mt-4 max-w-2xl max-sm:xl max-sm:mb-20 text-lg tracking-tight text-slate-700 sm:mt-6">
          يرجى التأكد من استيفاء جميع الشروط القانونية قبل تقديم طلب الترشح. يجب أن تكون جميع البيانات المقدمة صحيحة ودقيقة.
          <span className="border-b border-dotted border-slate-300"></span>
        </p>
        <p className="mx-auto -mt-4 max-w-2xl text-sm tracking-tight text-slate-700 sm:mt-6">
  للاطلاع على كافة النصوص القانونية المتعلقة بالترشح والواردة بقانون الانتخابات لمجلس النواب لسنة 2024 
  <a href="رابط_المستندات" className="border-b border-dotted border-slate-300 text-blue-600 hover:text-blue-800">
    انقر هنا
  </a>
</p>
        <div className="mt-12 flex flex-col justify-center gap-y-5  sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-9">
          <div
            className="relative flex flex-1 flex-row items-stretch gap-x-9 sm:flex-none "
            data-headlessui-state=""
          >
       <button
  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-1 bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300 animate-fade-in-right"
  id="headlessui-menu-button-:r4:"
  aria-haspopup="true"
  aria-expanded="false"
  data-headlessui-state=""
  type="button"
  onClick={handleCreateList} // استدعاء الدالة عند النقر على الزر
>
  <span className="">إنشاء قائمة محلية</span>
</button>
<button
  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-1 bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300 animate-fade-in-right"
  id="headlessui-menu-button-:r4:"
  aria-haspopup="true"
  aria-expanded="false"
  data-headlessui-state=""
  type="button"
  onClick={handleCreateList2} // استدعاء الدالة عند النقر على الزر
>
  <span className="">إنشاء قائمة حزبية</span>
</button>


          </div>
        </div>
      </div>
      {/* <div><Footer /></div> */}
    
    </div>
  );
}

export default LocalRequest;
