import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const LocalResults = () => {
    const [circles, setCircles] = useState([]);
    const [activeCircle, setActiveCircle] = useState(null);
    const [circleResults, setCircleResults] = useState([]);
    const [threshold, setThreshold] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);
    const [candidatesByList, setCandidatesByList] = useState({});
    const [seatWeight, setSeatWeight] = useState(0);

    useEffect(() => {
        const fetchCircles = async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/apii/local-lists');
                const uniqueCircles = [...new Set(data.map(list => list.circle_id))];
                setCircles(uniqueCircles);
                setActiveCircle(uniqueCircles[0]);
            } catch (error) {
                console.error('Error fetching circles:', error);
            }
        };
        fetchCircles();
    }, []);

    useEffect(() => {
        if (activeCircle) {
            const fetchCircleData = async () => {
                try {
                    const [resultsRes, thresholdRes, votesRes, seatWeightRes] = await Promise.all([
                        axios.get(`http://localhost:3001/apii/local-list/circle/${activeCircle}`),
                        axios.get(`http://localhost:3001/apii/circle/${activeCircle}/threshold`),
                        axios.get(`http://localhost:3001/apii/circle/${activeCircle}/votes`),
                        axios.get(`http://localhost:3001/apii/lists/seatWeight/${activeCircle}`)
                    ]);

                    setCircleResults(resultsRes.data.filter(result => result.status === 'approved'));
                    setThreshold(thresholdRes.data.threshold);
                    setTotalVotes(parseInt(votesRes.data.totalVotes));
                    setSeatWeight(seatWeightRes.data.seatWeight);
                } catch (error) {
                    console.error('Error fetching circle data:', error);
                }
            };
            fetchCircleData();
        }
    }, [activeCircle]);

    useEffect(() => {
        if (circleResults.length > 0) {
            const fetchCandidates = async () => {
                try {
                    const candidatesByList = {};
                    await Promise.all(circleResults.map(async (result) => {
                        const { data } = await axios.get(`http://localhost:3001/apii/local-candidate-info/${result.id}`);
                        candidatesByList[result.id] = data;
                    }));
                    setCandidatesByList(candidatesByList);
                } catch (error) {
                    console.error('Error fetching candidates:', error);
                }
            };
            fetchCandidates();
        }
    }, [circleResults]);

    const CircleTabButton = ({ circleId, isActive, onClick }) => (
        <button
            className={`px-4 py-2 font-semibold transition-colors duration-200 ${isActive
                ? 'bg-green-700 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } rounded-lg mr-2 mb-2`}
            onClick={onClick}
        >
            {circleId === 3 ? "الزرقاء" : `عمان ${circleId === 1 ? `الأولى` : `الثانية`} `}
        </button>
    );

    const CandidateCard = ({ candidate }) => (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-medium">{candidate.name}</p>
        </div>
    );

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">نتائج القائمة المحلية</h2>
            <h3 className="text-xl mb-4 text-center text-gray-700">الدائرة الانتخابية</h3>
            <div className="mb-6 flex flex-wrap justify-center">
                {circles.map((circleId) => (
                    <CircleTabButton
                        key={circleId}
                        circleId={circleId}
                        isActive={activeCircle === circleId}
                        onClick={() => setActiveCircle(circleId)}
                    />
                ))}
            </div>
            {activeCircle && circleResults.length > 0 ? (
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="flex-1 md:w-1/2 mb-8 md:mb-0">
                        <div className="text-center mb-8">
                            <p className="text-lg font-semibold">عتبة الحسم: {threshold.toFixed(2)}%</p>
                            <p className="text-lg font-semibold">إجمالي الأصوات: {totalVotes.toLocaleString()}</p>
                        </div>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={circleResults}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="numOfvotes" fill="#007A3D" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="flex-1 md:w-1/2">
                        <div className="grid grid-cols-1 gap-6">
                            {circleResults.map((result) => (
                                <div key={result.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                                    <h3 className="font-semibold text-xl mb-4">{result.name}</h3>
                                    <div className="text-green-700 font-medium text-lg">
                                        {result.numOfvotes.toLocaleString()} صوت
                                    </div>
                                    <div className="text-gray-600 mt-2">
                                        {((result.numOfvotes / totalVotes) * 100).toFixed(2)}% من الأصوات
                                    </div>
                                    {candidatesByList[result.id] ? (
                                        <div className="mt-6">
                                            <h4 className="font-semibold mb-2">المرشحون:</h4>
                                            <div className="grid grid-cols-1 gap-2">
                                                {candidatesByList[result.id].slice(0, seatWeight).map((candidate, index) => (
                                                    <CandidateCard key={index} candidate={candidate} />
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <p>Loading candidates...</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-700">Loading results...</p>
            )}
        </div>
    );
};

export default LocalResults;
