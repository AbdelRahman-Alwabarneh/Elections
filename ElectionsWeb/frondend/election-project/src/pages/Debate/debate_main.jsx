import React, { useState, useEffect } from 'react';
import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";

const candidates = [
    { name: 'أحمد', list: 'قائمة الإصلاح' },
    { name: 'محمد', list: 'قائمة التنمية' },
    { name: 'عمر', list: 'قائمة العدالة' },
    { name: 'خالد', list: 'قائمة الوحدة' },
    { name: 'فاطمة', list: 'قائمة المستقبل' },
    { name: 'رانيا', list: 'قائمة التغيير' },
    { name: 'ليلى', list: 'قائمة النهضة' },
    { name: 'زينب', list: 'قائمة الأمل' }
];

const generateRandomDate = () => {
    const start = new Date(2024, 0, 1);
    const end = new Date(2024, 11, 31);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const debates = Array.from({ length: 16 }, (_, i) => {
    const candidate1 = candidates[Math.floor(Math.random() * candidates.length)];
    let candidate2;
    do {
        candidate2 = candidates[Math.floor(Math.random() * candidates.length)];
    } while (candidate2 === candidate1);

    return {
        id: i + 1,
        candidate1,
        candidate2,
        date: i < 4 ? new Date() : generateRandomDate(),
    };
});

const Card = ({ children, className }) => (
    <div className={`bg-white border-2 border-red-600 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children, isLive }) => (
    <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 relative">
        {children}
        {isLive && <LiveIndicator />}
    </div>
);

const CardContent = ({ children }) => (
    <div className="p-4">
        {children}
    </div>
);

const CardFooter = ({ children }) => (
    <div className="p-4 bg-gray-50 border-t border-gray-200">
        {children}
    </div>
);

const LiveIndicator = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(v => !v);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-2 right-2 flex items-center">
            <div className={`w-3 h-3 rounded-full bg-green-500 mr-1 ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
            <span className="text-sm font-bold text-green-300">LIVE</span>
        </div>
    );
};

const CandidateInfo = ({ candidate }) => (
    <div className="text-center">
        <div className="mb-2 text-sm font-semibold text-gray-600">{candidate.list}</div>
        <div className="w-24 h-24 rounded-full mx-auto mb-2 border-4 border-red-600 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center shadow-inner">
            <span className="text-3xl text-red-800 font-bold">{candidate.name[0]}</span>
        </div>
        <p className="font-semibold text-lg">{candidate.name}</p>
    </div>
);

const DebateCard = ({ debate }) => {
    const [showAlert, setShowAlert] = useState(false);

    const handleWatchDebate = () => {
        const today = new Date();
        if (today.toDateString() === debate.date.toDateString()) {
            window.location.href = '/debate';
        } else {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        }
    };

    const isToday = new Date().toDateString() === debate.date.toDateString();

    return (
        <Card className="w-full transform hover:scale-105 transition-transform duration-300">
            <CardHeader isLive={isToday}>
                <h2 className="text-xl font-bold text-center">
                    مناظرة انتخابية
                </h2>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between mb-4">
                    <CandidateInfo candidate={debate.candidate1} />
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            ضد
                        </div>
                    </div>
                    <CandidateInfo candidate={debate.candidate2} />
                </div>
                <p className={`text-lg text-center ${isToday ? 'text-green-600 font-bold' : 'text-gray-600'}`}>
                    التاريخ: {debate.date.toLocaleDateString('ar-JO')}
                    {isToday && <span className="mr-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">اليوم</span>}
                </p>
            </CardContent>
            <CardFooter>
                <button 
                    className={`w-full font-bold py-2 px-4 rounded transition duration-300 ${
                        isToday 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    }`}
                    onClick={handleWatchDebate}
                    disabled={!isToday}
                >
                    {isToday ? 'مشاهدة المناظرة' : 'المناظرة غير متاحة'}
                </button>
                {showAlert && (
                    <div className="mt-2 p-2 bg-red-100 text-red-700 text-center rounded">
                        لا يمكن مشاهدة المناظرة قبل موعدها
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

const DebatesPage = () => {
    return (
        <div dir="rtl">
            <Navbar />
            <div className="container mx-auto px-4 py-8 bg-gray-100">
                <h1 className="text-4xl font-bold mb-8 text-center text-red-600">المناظرات الانتخابية الأردنية</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {debates.map((debate) => (
                        <DebateCard key={debate.id} debate={debate} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DebatesPage;