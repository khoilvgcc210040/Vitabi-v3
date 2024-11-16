"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface HospitalImageData {
  id: number;
  hospitalName: string;
}

const initialHospitalImages: HospitalImageData[] = [
  { id: 1, hospitalName: "Hanoi French Hospital" },
  { id: 2, hospitalName: "Hanoi French Hospital" },
  { id: 3, hospitalName: "Hanoi French Hospital" },
  { id: 4, hospitalName: "Raffles Medical International Clinic in Hanoi" },
  { id: 5, hospitalName: "Raffles Medical International Clinic in Hanoi" },
  { id: 6, hospitalName: "Raffles Medical International Clinic in Hanoi" },
  { id: 7, hospitalName: "Family Medical Practice - International Clinic" },
  { id: 8, hospitalName: "Family Medical Practice - International Clinic" },
  { id: 9, hospitalName: "Family Medical Practice - International Clinic" },
  { id: 10, hospitalName: "Sakura Medical & Dental Clinic Hanoi" },
  { id: 11, hospitalName: "Sakura Medical & Dental Clinic Hanoi" },
];

const HospitalImagesList: React.FC = () => {
  const router = useRouter();
  const [hospitalImages, setHospitalImages] = useState<HospitalImageData[]>(initialHospitalImages);

  const handleDeleteImage = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this hospital image?");
    if (confirmDelete) {
      setHospitalImages(hospitalImages.filter((image) => image.id !== id));
    }
  };

  const handleEditImage = (image: HospitalImageData) => {
    router.push(`/EditHospitalImage?id=${image.id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Hospital Images List</h1>
      <div className="flex gap-4 mb-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition"
          onClick={() => router.push("/AddHospitalImage")}
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
            <th className="border px-4 py-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hospitalImages.map((image, index) => (
            <tr key={image.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border px-4 py-3 text-gray-700">{image.hospitalName}</td>
              <td className="border px-4 py-3 text-center">
                <button
                  className="bg-gray-500 text-white px-4 py-1 rounded mr-2 hover:bg-gray-600 transition"
                  onClick={() => handleEditImage(image)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => handleDeleteImage(image.id)}
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

export default HospitalImagesList;
