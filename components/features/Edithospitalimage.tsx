"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface EditHospitalImageProps {
  hospitalId: number;
  currentImageUrl: string;
}

const EditHospitalImage: React.FC<EditHospitalImageProps> = ({ hospitalId, currentImageUrl }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    hospital: hospitalId,
    photo: null as File | null,
    originalUrl: "",
    uniqueUrl: "",
  });

  useEffect(() => {
    // Fetch and set data here if necessary, e.g., for pre-filling fields
    // Set the hospital and current image URL
    setFormData((prevData) => ({
      ...prevData,
      originalUrl: currentImageUrl,
    }));
  }, [hospitalId, currentImageUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Logic để xử lý cập nhật dữ liệu
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Edit Hospital Image</h1>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Hospital:</label>
        <select
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          disabled
        >
          <option value="1">Hanoi French Hospital</option>
          <option value="2">Raffles Medical International Clinic in Hanoi</option>
          {/* Other options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Photo:</label>
        <p className="mb-2">
          Currently:{" "}
          <a href={currentImageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {currentImageUrl}
          </a>
        </p>
        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Original URL:</label>
        <input
          type="text"
          name="originalUrl"
          value={formData.originalUrl}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Unique URL:</label>
        <input
          type="text"
          name="uniqueUrl"
          value={formData.uniqueUrl}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-4"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => router.push("/HospitalImagesList")}
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default EditHospitalImage;
