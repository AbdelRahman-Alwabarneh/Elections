import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';
import { Users } from 'lucide-react';



const PartyResults = ({ partyResults }) => {
    const winners = {
        "first": [
            { name: "أحمد الخالدي" },
            { name: "ليث الفايز" },
            { name: "زينب النابلسي" },
        ],
        "second": [
            { name: "محمد العجارمة" },
            { name: "خالد الحياري" },
            { name: "سعاد الشرفاء" }
        ],
        "third": [
            { name: "خليل المومني" },
            { name: "سعيد الطراونة" },
            { name: "مها المعايطة" }
        ],
    };
    const winnerGroups = ["first", "second", "third"];

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">توزيع مقاعد الحزب</h2>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className="flex flex-col w-full lg:w-1/2 space-y-8">
                    <div className="h-96 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={partyResults}
                                    dataKey="numOfVotes"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={150}
                                >
                                    {partyResults.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => value.toLocaleString()} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {partyResults.map((party, index) => (
                            <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-3">
                                <div className={`w-4 h-4 rounded-full mr-3`} style={{ backgroundColor: party.color }}></div>
                                <div>
                                    <span className="font-medium">{party.name}</span>
                                    <span className="block text-sm text-gray-600">{party.numOfVotes.toLocaleString()} صوت</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                    {partyResults.map((party, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                            <h3 className="text-xl font-bold mb-3">{party.name}</h3>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-medium">الأصوات:</span>
                                <span className="font-bold text-lg">{party.numOfVotes.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                                <div
                                    className="bg-green-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${(party.numOfVotes / Math.max(...partyResults.map(p => p.numOfVotes))) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                <strong>المنظم:</strong> {party.organizer}
                            </p>
                            <div className="border-t pt-4">
                                <h4 className="font-semibold mb-2 flex items-center">
                                    <Users size={18} className="mr-2" />
                                    الفائزون:
                                </h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {winners[winnerGroups[index]]?.map((winner, wIndex) => (
                                        <li key={wIndex} className="text-sm">{winner.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartyResults;