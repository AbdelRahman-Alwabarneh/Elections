import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../layouts/navbar';

function AddList() {
  const [name, setName] = useState('');
  const [N_Id, setN_Id] = useState('');
  const [circle_id, setCircleId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !N_Id || !circle_id) {
      setError('يرجى تعبئة جميع الحقول المطلوبة.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/lists', {
        name: name,
        N_Id: N_Id,
        circle_id: circle_id
      });
      const listId = response.data.list_id;
      navigate('/CandidatesRequest', { state: { listId } });
      setSuccess(response.data.message);
      setName('');
      setN_Id('');
      setCircleId('');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || 'حدث خطأ غير متوقع.');
      } else {
        setError('لا يمكن الاتصال بالخادم. تأكد من تشغيل الخادم وحاول مرة أخرى.');
      }
      console.error('Error adding list:', error.response?.data || error.message);
    }
  };

  return (<div>
    <Navbar />
    <div className="bg-[#f5f5f5] min-h-screen p-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">طلب إضافة قائمة</h2>
        {success && <p className="text-green-600 mb-4 text-center text-lg">{success}</p>}
        {error && <p className="text-red-600 mb-4 text-center text-lg">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-[#007A7D]">اسم القائمة</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#007A7D]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="N_Id" className="block text-lg font-medium text-[#007A7D]">رقم الهوية الوطنية</label>
            <input
              type="text"
              id="N_Id"
              value={N_Id}
              onChange={(e) => setN_Id(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#007A7D]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="circle_id" className="block text-lg font-medium text-[#007A7D]">رقم الدائرة</label>
            <input
              type="text"
              id="circle_id"
              value={circle_id}
              onChange={(e) => setCircleId(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#007A7D]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2d6a4f] text-white py-3 px-4 rounded-lg shadow-md hover:bg-green-500 transition duration-300"
          >
            إضافة القائمة
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AddList;
