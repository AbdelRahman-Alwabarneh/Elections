import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../layouts/navbar';
import Footer from '../../layouts/footer';
import Swal from 'sweetalert2';

const PartyListsPage = () => {
  const [partyLists, setPartyLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedParty, setSelectedParty] = useState(null);

  useEffect(() => {
    const fetchPartyLists = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/party-lists');
        setPartyLists(response.data);
      } catch (error) {
        setError('Failed to fetch party lists.');
      } finally {
        setLoading(false);
      }
    };

    fetchPartyLists();
  }, []);

  const filteredLists = partyLists.filter((list) =>
    list.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePartySelection = (partyId) => {
    setSelectedParty(partyId);
  };

  const handleVote = () => {
    Swal.fire({
      title: 'هل أنت متأكد من إتمام عملية التصويت؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم، صوت!',
      cancelButtonText: 'إلغاء'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post('http://localhost:3001/api/party-lists/vote', {
            partyId: selectedParty
          });
          Swal.fire('تم التصويت!', 'تمت عملية التصويت بنجاح.', 'success');
          setSelectedParty(null); // Reset selection after voting
        } catch (error) {
          Swal.fire('خطأ', 'حدث خطأ أثناء التصويت.', 'error');
        }
      }
    });
  };

  const fadeInUp = {
    animation: 'fadeInUp 0.6s ease-out'
  };

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <main className="p-6 bg-gray-100 min-h-screen">
        <style>
          {keyframes}
        </style>
        <div className="max-w-6xl mx-auto" style={fadeInUp}>
          <h1 className="text-3xl font-bold mb-6 text-[#6E0B00]">قوائم الأحزاب</h1>

          {/* Search Bar */}
          <div className="mb-6 flex justify-start">
            <input
              type="text"
              placeholder="ابحث عن قائمة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-lg px-4 py-2 text-gray-800 rounded-md border-2 border-gray-300 focus:outline-none focus:border-[#6E0B00] focus:ring-2 focus:ring-[#6E0B00] transition duration-300"
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLists.map((list) => (
              <div
                key={list.party_id}
                className={`bg-[#6E0B00] shadow-md rounded-lg p-8 transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-800 duration-300 ${
                  selectedParty === list.party_id ? 'ring-4 ring-red-600' : ''
                }`}
                style={fadeInUp}
                onClick={() => handlePartySelection(list.party_id)}
              >
                <h2 className="text-2xl font-bold text-white mb-4">{list.name}</h2>
                {selectedParty === list.party_id && (
                  <button
                    onClick={handleVote}
                    className="bg-[#6E0B00] text-white font-bold py-2 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-white hover:text-[#6E0B00] duration-300"
                    disabled={!selectedParty}
                  >
                    تصويت
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PartyListsPage;
