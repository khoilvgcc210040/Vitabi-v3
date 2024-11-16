"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface WorkingHoursData {
  id: number;
  hospital: string;
  dayOfWeek: string;
  openTime: string;
  closeTime: string;
}

const initialWorkingHours: WorkingHoursData[] = [
  { id: 1, hospital: "Family Medical Practice District 7", dayOfWeek: "Monday", openTime: "8 a.m.", closeTime: "6 p.m." },
  { id: 2, hospital: "Family Medical Practice District 7", dayOfWeek: "Tuesday", openTime: "8 a.m.", closeTime: "6 p.m." },
  { id: 3, hospital: "Family Medical Practice District 7", dayOfWeek: "Wednesday", openTime: "8 a.m.", closeTime: "6 p.m." },
  { id: 4, hospital: "Family Medical Practice District 7", dayOfWeek: "Thursday", openTime: "8 a.m.", closeTime: "6 p.m." },
  { id: 5, hospital: "Family Medical Practice District 7", dayOfWeek: "Friday", openTime: "8 a.m.", closeTime: "6 p.m." },
  { id: 6, hospital: "Family Medical Practice District 7", dayOfWeek: "Saturday", openTime: "8 a.m.", closeTime: "1 p.m." },
  { id: 7, hospital: "Franco Vietnamese Hospital", dayOfWeek: "Monday", openTime: "8 a.m.", closeTime: "5 p.m." },
  { id: 8, hospital: "Franco Vietnamese Hospital", dayOfWeek: "Tuesday", openTime: "8 a.m.", closeTime: "5 p.m." },
  { id: 9, hospital: "Franco Vietnamese Hospital", dayOfWeek: "Wednesday", openTime: "8 a.m.", closeTime: "5 p.m." },
  { id: 10, hospital: "Franco Vietnamese Hospital", dayOfWeek: "Thursday", openTime: "8 a.m.", closeTime: "5 p.m." },
  { id: 11, hospital: "Franco Vietnamese Hospital", dayOfWeek: "Friday", openTime: "8 a.m.", closeTime: "5 p.m." },
  { id: 12, hospital: "Franco Vietnamese Hospital", dayOfWeek: "Saturday", openTime: "8 a.m.", closeTime: "noon" },
];

const WorkingHoursList: React.FC = () => {
  const router = useRouter();
  const [workingHours, setWorkingHours] = useState<WorkingHoursData[]>(initialWorkingHours);

  const handleDeleteWorkingHour = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
    if (confirmDelete) {
      setWorkingHours(workingHours.filter((entry) => entry.id !== id));
    }
  };

  const handleEditWorkingHour = (entry: WorkingHoursData) => {
    router.push(`/EditWorkingHour?id=${entry.id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Working Hours List</h1>
      <div className="flex gap-4 mb-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition"
          onClick={() => router.push("/Addworkinghour")}
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
            <th className="border px-4 py-2 text-left font-semibold">Day of Week</th>
            <th className="border px-4 py-2 text-left font-semibold">Open Time</th>
            <th className="border px-4 py-2 text-left font-semibold">Close Time</th>
            <th className="border px-4 py-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {workingHours.map((entry, index) => (
            <tr key={entry.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border px-4 py-3 text-gray-700">{entry.hospital}</td>
              <td className="border px-4 py-3 text-gray-700">{entry.dayOfWeek}</td>
              <td className="border px-4 py-3 text-gray-700">{entry.openTime}</td>
              <td className="border px-4 py-3 text-gray-700">{entry.closeTime}</td>
              <td className="border px-4 py-3 text-center">
                <button
                  className="bg-gray-500 text-white px-4 py-1 rounded mr-2 hover:bg-gray-600 transition"
                  onClick={() => handleEditWorkingHour(entry)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => handleDeleteWorkingHour(entry.id)}
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

export default WorkingHoursList;
