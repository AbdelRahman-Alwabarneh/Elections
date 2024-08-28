// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Navbar from '../../layouts/navbar'; // تأكد من مسار Navbar

// function AddCandidateForm() {
//     const [N_Id, setN_Id] = useState('');
//     const [numOfVotes, setNumOfVotes] = useState('');
//     const [candidate_name, setCandidateName] = useState('');
//     const [local_list_id, setLocalListId] = useState('');
//     const [circle_id, setCircleId] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!N_Id || !numOfVotes || !candidate_name || !local_list_id || !circle_id) {
//             setError('يرجى ملء جميع الحقول.');
//             return;
//         }

//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.post('http://localhost:3002/api/candidates', {
//                 N_Id,
//                 numOfVotes,
//                 candidate_name,
//                 local_list_id,
//                 circle_id
//             });

//             Swal.fire('نجاح', response.data.message, 'success');
//             // يمكنك هنا إعادة تعيين القيم إذا لزم الأمر
//             setN_Id('');
//             setNumOfVotes('');
//             setCandidateName('');
//             setLocalListId('');
//             setCircleId('');
//         } catch (error) {
//             console.error('Error adding candidate:', error);
//             Swal.fire('خطأ', `حدث خطأ أثناء إضافة المرشح: ${error.response?.data?.error || 'خطأ غير معروف'}`, 'error');
//             setError(error.response?.data?.error || 'حدث خطأ أثناء إضافة المرشح.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <Navbar />
//             <div className="flex flex-col items-center justify-center p-6 bg-white shadow-2xl rounded-lg mt-20 mx-auto w-full max-w-4xl">
//                 <h4 className="text-3xl font-bold mb-4 text-green-800">إضافة مرشح</h4>

//                 <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <label htmlFor="N_Id" className="block text-sm font-medium text-gray-700">رقم الهوية:</label>
//                             <input
//                                 type="text"
//                                 id="N_Id"
//                                 value={N_Id}
//                                 onChange={(e) => setN_Id(e.target.value)}
//                                 placeholder="أدخل الرقم الوطني"
//                                 className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//                             />
//                         </div>

                   

//                         <div className="mb-4">
//                             <label htmlFor="candidate_name" className="block text-sm font-medium text-gray-700">اسم المرشح:</label>
//                             <input
//                                 type="text"
//                                 id="candidate_name"
//                                 value={candidate_name}
//                                 onChange={(e) => setCandidateName(e.target.value)}
//                                 placeholder="أدخل اسم المرشح"
//                                 className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label htmlFor="local_list_id" className="block text-sm font-medium text-gray-700">رقم القائمة:</label>
//                             <input
//                                 type="text"
//                                 id="local_list_id"
//                                 value={local_list_id}
//                                 onChange={(e) => setLocalListId(e.target.value)}
//                                 placeholder="أدخل رقم القائمة"
//                                 className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <label htmlFor="circle_id" className="block text-sm font-medium text-gray-700">رقم الدائرة:</label>
//                             <input
//                                 type="text"
//                                 id="circle_id"
//                                 value={circle_id}
//                                 onChange={(e) => setCircleId(e.target.value)}
//                                 placeholder="أدخل رقم الدائرة"
//                                 className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//                             />
//                         </div>

//                         <button 
//                             type="submit" 
//                             className={`w-full px-4 py-2 rounded-md text-white ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
//                             disabled={loading}
//                         >
//                             {loading ? 'جاري التحميل...' : 'إضافة المرشح'}
//                         </button>

//                         {error && <div className="text-red-600 mt-4 text-center">{error}</div>}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddCandidateForm;





import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../../layouts/navbar';

function AddCandidateForm() {
    const [N_Id, setN_Id] = useState('');
        const [numOfVotes, setNumOfVotes] = useState('');
        const [candidate_name, setCandidateName] = useState('');
        const [local_list_id, setLocalListId] = useState('');
        const [circle_id, setCircleId] = useState('');
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            if (!N_Id  || !candidate_name || !local_list_id || !circle_id) {
                setError('يرجى ملء جميع الحقول.');
                return;
            }
    
            setLoading(true);
            setError('');
    
            try {
                const response = await axios.post('http://localhost:3001/api/candidates', {
                    N_Id,
                    numOfVotes,
                    candidate_name,
                    local_list_id,
                    circle_id
                });
    
                Swal.fire('نجاح', response.data.message, 'success');
                // يمكنك هنا إعادة تعيين القيم إذا لزم الأمر
                setN_Id('');
                setNumOfVotes('');
                setCandidateName('');
                setLocalListId('');
                setCircleId('');
            } catch (error) {
                console.error('Error adding candidate:', error);
                Swal.fire('خطأ', `حدث خطأ أثناء إضافة المرشح: ${error.response?.data?.error || 'خطأ غير معروف'}`, 'error');
                setError(error.response?.data?.error || 'حدث خطأ أثناء إضافة المرشح.');
            } finally {
                setLoading(false);
            }
        };
    
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg mt-10 mx-auto w-full max-w-lg border-t-4 border-red-600">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">إضافة مرشح</h2>

                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <div className="flex flex-col">
                        <label htmlFor="N_Id" className="text-sm font-medium text-gray-700">رقم الهوية:</label>
                        <input
                            type="text"
                            id="N_Id"
                            value={N_Id}
                            onChange={(e) => setN_Id(e.target.value)}
                            placeholder="أدخل الرقم الوطني"
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="candidate_name" className="text-sm font-medium text-gray-700">اسم المرشح:</label>
                        <input
                            type="text"
                            id="candidate_name"
                            value={candidate_name}
                            onChange={(e) => setCandidateName(e.target.value)}
                            placeholder="أدخل اسم المرشح"
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="local_list_id" className="text-sm font-medium text-gray-700">رقم القائمة:</label>
                        <input
                            type="text"
                            id="local_list_id"
                            value={local_list_id}
                            onChange={(e) => setLocalListId(e.target.value)}
                            placeholder="أدخل رقم القائمة"
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="circle_id" className="text-sm font-medium text-gray-700">رقم الدائرة:</label>
                        <input
                            type="text"
                            id="circle_id"
                            value={circle_id}
                            onChange={(e) => setCircleId(e.target.value)}
                            placeholder="أدخل رقم الدائرة"
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className={`w-full py-3 rounded-md text-white font-bold ${loading ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'}`}
                        disabled={loading}
                    >
                        {loading ? 'جاري التحميل...' : 'إضافة المرشح'}
                    </button>

                    {error && <div className="text-red-600 text-center">{error}</div>}
                </form>
            </div>
        </div>
    );
}

export default AddCandidateForm;
