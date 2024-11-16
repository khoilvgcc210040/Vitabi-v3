"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface HospitalData {
  id: number;
  name: string;
  country: string;
}

const initialHospitals: HospitalData[] = [
  { id: 1, name: "Columbia Asia International Hospital - Gia Dinh", country: "Vietnam" },
  { id: 2, name: "Alliance Health at Marina Bay", country: "Thailand" },
];

const HospitalList: React.FC = () => {
  const router = useRouter();
  const [hospitals, setHospitals] = useState<HospitalData[]>(initialHospitals);

  const handleDeleteHospital = (id: number) => {
   
    const confirmDelete = window.confirm("Are you sure you want to delete this hospital?");
    if (confirmDelete) {
      setHospitals(hospitals.filter((hospital) => hospital.id !== id));
    }
  };

  const handleEditHospital = (hospital: HospitalData) => {
    router.push(
      `/EditHospital?id=${hospital.id}`
    );
  };
  

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Hospital List</h1>
      <div className="flex gap-4 mb-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition"
          onClick={() => router.push("/AddHospital")}
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
            <th className="border px-4 py-2 text-left font-semibold">Name</th>
            <th className="border px-4 py-2 text-left font-semibold">Country</th>
            <th className="border px-4 py-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={hospital.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border px-4 py-3 text-gray-700">{hospital.name}</td>
              <td className="border px-4 py-3 text-gray-700">{hospital.country}</td>
              <td className="border px-4 py-3 text-center">
                <button
                  className="bg-gray-500 text-white px-4 py-1 rounded mr-2 hover:bg-gray-600 transition"
                  onClick={() => handleEditHospital(hospital)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => handleDeleteHospital(hospital.id)}
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

export default HospitalList;
