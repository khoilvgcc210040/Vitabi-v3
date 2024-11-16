"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface DistanceInfoData {
  id: number;
  hospital: string;
  distance: string;
  duration: string;
  lastUpdated: string;
}

const initialData: DistanceInfoData[] = [
  { id: 1, hospital: "Binh Duong Urban Clinic", distance: "256 km", duration: "4 hours 49 mins", lastUpdated: "March 9, 2024, 2:02 a.m." },
  // Add more data here
];

const DistanceInfoList: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<DistanceInfoData[]>(initialData);

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
    if (confirmDelete) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Distance Information List</h1>
      <div className="flex gap-4 mb-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition"
          onClick={() => router.push("/AddDistanceinfo")}
        >
          Add New
        </button>
        <button
          className="bg-gray-500 text-white px-6 py-2 rounded shadow-md hover:bg-gray-600 transition"
          onClick={() => router.push("/admin")}
        >
          Back to Dashboard
        </button>
      </div>
      <table className="w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border px-4 py-2 text-left font-semibold">Hospital</th>
            <th className="border px-4 py-2 text-left font-semibold">Distance</th>
            <th className="border px-4 py-2 text-left font-semibold">Duration</th>
            <th className="border px-4 py-2 text-left font-semibold">Last Updated</th>
            <th className="border px-4 py-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border px-4 py-3 text-gray-700">{item.hospital}</td>
              <td className="border px-4 py-3 text-gray-700">{item.distance}</td>
              <td className="border px-4 py-3 text-gray-700">{item.duration}</td>
              <td className="border px-4 py-3 text-gray-700">{item.lastUpdated}</td>
              <td className="border px-4 py-3 text-center">
                <button
                  className="bg-gray-500 text-white px-4 py-1 rounded mr-2 hover:bg-gray-600 transition"
                  onClick={() => router.push(`/EditDistanceinfo?id=${item.id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistanceInfoList;
