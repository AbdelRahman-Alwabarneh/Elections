import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../layouts/navbar';

function AddPartyList() {
    const [listName, setListName] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [circle, setCircle] = useState('');
    const [logo, setLogo] = useState('');
    const [filePath, setFilePath] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Check for all required fields
        if (!listName || !organizer || !logo ) {
            setError('يرجى تعبئة جميع الحقول المطلوبة.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/party', {
                name: listName,
                organizer: organizer,
                logo: logo,
               
            });

            const partyList = response.data.party_id;
            navigate('/CandidatesRequest', { state: { partyList } });
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    setError('حدث خطأ: البيانات غير مكتملة أو غير صحيحة.');
                } else if (error.response.status === 500) {
                    setError('حدث خطأ في الخادم. حاول مرة أخرى لاحقًا.');
                } else {
                    setError('حدث خطأ غير متوقع.');
                }
            } else {
                setError('لا يمكن الاتصال بالخادم. تأكد من تشغيل الخادم وحاول مرة أخرى.');
            }
            console.error('Error adding list:', error.response?.data || error.message);
        }
    };

    return (
        <div dir="rtl" className="bg-white text-gray-900">
            <Navbar />
            <form className="max-w-lg mx-auto mt-10 p-6 bg-red-50 rounded-lg shadow-md" onSubmit={handleSubmit}>
                {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
                <h4 className="text-3xl text-center font-bold mb-4 text-green-700">طلب إنشاء قائمة حزبية</h4>

                <div className="mb-6">
                    <label htmlFor="listName" className="block mb-2 text-sm font-medium text-gray-900 text-right">
                        اسم القائمة الحزبية
                    </label>
                    <input
                        type="text"
                        id="listName"
                        className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="organizer" className="block mb-2 text-sm font-medium text-gray-900 text-right">
                        اسم مفوض القائمة
                    </label>
                    <input
                        type="text"
                        id="organizer"
                        className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
                        value={organizer}
                        onChange={(e) => setOrganizer(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="circle" className="block mb-2 text-sm font-medium text-gray-900 text-right">
                        عدد المترشحين
                    </label>
                    <input
                        type="text"
                        id="circle"
                        className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
                        value={circle}
                        onChange={(e) => setCircle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 text-right">
                        عنوان مقر القائمة
                    </label>
                    <input
                        type="text"
                        id="address"
                        className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
                        value={filePath}
                        onChange={(e) => setFilePath(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="logo" className="block mb-2 text-sm font-medium text-gray-900 text-right">
                        شعار القائمة
                    </label>
                    <input
                        type="text"
                        id="logo"
                        className="shadow-sm bg-white border border-gray-300 rounded-lg w-full p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    التالي
                </button>
            </form>
        </div>
    );
}

export default AddPartyList;