import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../layouts/navbar';
import Footer from '../../layouts/footer';
import Swal from 'sweetalert2';

const LocalLists = () => {
  const location = useLocation();
  const { circle } = location.state || {};

  const [localLists, setLocalLists] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedList, setSelectedList] = useState(null);
  const [selectedCandidates, setSelectedCandidates] = useState({});

  useEffect(() => {
    if (circle && circle.circle_id) {
      const fetchData = async () => {
        try {
          // Fetch local lists
          const listsResponse = await axios.get('http://localhost:3001/api/local-lists', {
            params: { circle_id: circle.circle_id }
          });
          setLocalLists(listsResponse.data);

          // Fetch users data
          const usersResponse = await axios.get('http://localhost:3001/api/users');
          const usersData = usersResponse.data.reduce((acc, user) => {
            acc[user.N_Id] = user.name;
            return acc;
          }, {});
          setUsers(usersData);
        } catch (error) {
          setError('Failed to fetch data.');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setLoading(false);
      setError('No circle information provided.');
    }
  }, [circle]);

  const filteredLists = localLists.filter((list) =>
    list.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleListSelection = (listId) => {
    if (listId === selectedList) {
      setSelectedList(null);
      setSelectedCandidates({});
    } else {
      setSelectedList(listId);
      setSelectedCandidates({});
    }
  };

  const handleCandidateSelection = (listId, candidateId) => {
    setSelectedCandidates((prevState) => {
      const updatedCandidates = { ...prevState };
      if (!updatedCandidates[listId]) {
        updatedCandidates[listId] = {};
      }

      updatedCandidates[listId] = {
        ...updatedCandidates[listId],
        [candidateId]: !updatedCandidates[listId][candidateId]
      };

      return updatedCandidates;
    });
  };

  const handleVote = () => {
    Swal.fire({
      title: 'هل انت متأكد من اتمام عملية التصويت؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم، صوت!',
      cancelButtonText: 'إلغاء'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post('http://localhost:3001/api/local-lists/vote', {
            listId: selectedList,
            candidates: selectedCandidates[selectedList]
              ? Object.keys(selectedCandidates[selectedList]).filter(
                  (candidateId) => selectedCandidates[selectedList][candidateId]
                )
              : []
          });
          Swal.fire('تم التصويت!', 'تمت عملية التصويت بنجاح.', 'success');
          // Optionally, you can refresh the list or handle other UI updates here
        } catch (error) {
          Swal.fire('خطأ', 'حدث خطأ أثناء التصويت.', 'error');
        }
      }
    });
  };

  const fadeInUp = {
    animation: 'fadeInUp 0.6s ease-out'
  };

  // Keyframes for the animation
  const keyframes = `
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <div>
      <Navbar />
      <main className="p-6 bg-gray-100 min-h-screen">
        <style>
          {keyframes}
        </style>
        <div className="max-w-6xl mx-auto" style={fadeInUp}>
          <h1 className="text-3xl font-bold mb-6 text-[#6E0B00]">القوائم الأنتخابية المحلية</h1>

          {/* Search input for filtering lists */}
          <div className="mb-6 flex justify-start">
            <input
              type="text"
              placeholder="ابحث عن قائمة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-lg px-4 py-2 text-gray-800 rounded-md border-2 border-gray-300 focus:outline-none focus:border-[#6E0B00] focus:ring-2 focus:ring-[#6E0B00] transition duration-300"
            />
          </div>

          {/* Displaying the local lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLists.map((list) => (
              <div
                key={list.id}
                className={`bg-[#6E0B00] shadow-md rounded-lg p-8 transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-800 duration-300 ${
                  selectedList === list.id ? 'ring-4 ring-red-600' : ''
                }`}
                style={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-white mb-4">{list.name}</h2>

                {/* List checkbox */}
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedList === list.id}
                    onChange={() => handleListSelection(list.id)}
                    className="form-checkbox h-5 w-5 text-red-600 ml-3"
                  />
                  <span className="text-white">اختر القائمة</span>
                </div>

                {/* Displaying the candidates with checkboxes */}
                <ul className="text-gray-100 text-md mt-4">
                  {list.candidates && list.candidates.length > 0 ? (
                    list.candidates.map((candidate) => (
                      <li key={candidate.id} className="mb-1 flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCandidates[list.id]?.[candidate.N_Id] || false}
                          onChange={() => handleCandidateSelection(list.id, candidate.N_Id)}
                          className="form-checkbox h-4 w-4 text-red-600 ml-3"
                          disabled={selectedList !== list.id}
                        />
                        {users[candidate.N_Id] || 'اسم غير معروف'}
                      </li>
                    ))
                  ) : (
                    <li>لا يوجد مرشحين</li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Vote button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleVote}
              className="bg-[#6E0B00] text-white font-bold py-2 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-red-800 duration-300"
              disabled={!selectedList}
            >
              تصويت
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocalLists;
