import React, { useEffect,  useState } from "react";

interface HospitalDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    id: number;
    hospital: string;
    appointmentTime: string;
    insurance: string;
    contactNumber: string;
    address: string;
    country: string;
    workingHours: string[];
    user: {
      name: string;
      gender: string;
      birthday: string;
      email: string;
      phone: string;
    };
    requestedDate: string;
    preferredDate: string;
  };
}

export default function HospitalDetailDialog({
  isOpen,
  onClose,
  bookingData,
}: HospitalDetailDialogProps) {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [insurance, setInsurance] = useState("");

  // Disable background scroll when dialog is open
  useEffect(() => {
    if (bookingData.appointmentTime) {
      const [date, start, , end] = bookingData.appointmentTime.split(" ");
      setDate(date);
      setStartTime(start);
      setEndTime(end);
    }
    setInsurance(bookingData.insurance || "");

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, bookingData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 dark:bg-gray-900 dark:bg-opacity-80">
      <div
        className="bg-white dark:bg-gray-800 dark:text-white rounded-lg p-6 w-7/12 h-5/6 max-w-2xl overflow-y-auto relative"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 dark:text-gray-200">
          Booking Detail (#{bookingData.id})
        </h2>
        <hr className="border-gray-300 dark:border-gray-600" />
        {/* Hospital Section */}
        <div className="mb-4 mt-8">
          <h3 className="font-semibold dark:text-gray-300">Hospital:</h3>
          <p className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 dark:text-gray-200">
            {bookingData.hospital}
          </p>
        </div>

        {/* Appointment Time Section */}
        <div className="mb-4 mt-8">
          <h3 className="font-semibold dark:text-gray-300">Appointment Time:</h3>
          <div className="flex gap-2 items-center">
            <input
              type="date"
              className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-transparent dark:text-white"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-transparent dark:text-white"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <span>~</span>
            <input
              type="time"
              className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-transparent dark:text-white"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
            <span>(UTC)</span>
          </div>
        </div>

        {/* Insurance Section */}
        <div className="mb-4">
          <h3 className="font-semibold dark:text-gray-300">Insurance:</h3>
          <div className="flex flex-col gap-1">
            <label className="dark:text-gray-200">
              <input
                type="radio"
                name="insurance"
                value="Cashless Payment Supported"
                checked={insurance === "Cashless Payment Supported"}
                onChange={(e) => setInsurance(e.target.value)}
              />
              Cashless Payment Supported
            </label>
            <label className="dark:text-gray-200">
              <input
                type="radio"
                name="insurance"
                value="Insurance supported (NOT CASHLESS)"
                checked={insurance === "Insurance supported (NOT CASHLESS)"}
                onChange={(e) => setInsurance(e.target.value)}
              />
              Insurance supported (NOT CASHLESS)
            </label>
            <label className="dark:text-gray-200">
              <input
                type="radio"
                name="insurance"
                value="Insurance not supported"
                checked={insurance === "Insurance not supported"}
                onChange={(e) => setInsurance(e.target.value)}
              />
              Insurance not supported
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-left mb-6 gap-2">
          <button
            className="bg-gray-500 dark:bg-gray-700 text-xs font-sans text-white px-4 py-2 rounded"
            onClick={() => alert("Rejected")}
          >
            Reject
          </button>
          <button
            className="bg-black dark:bg-blue-700 text-xs font-sans text-white px-4 py-2 rounded"
            onClick={() => alert("Confirmed")}
          >
            Confirmed
          </button>
        </div>
        <hr className="border-gray-300 dark:border-gray-600" />
        
        {/* Hospital Details Section */}
        <div className="mb-4 mt-8">
          <h3 className="font-semibold dark:text-gray-300">Hospital:</h3>
          <a href="#" className="text-blue-500 dark:text-blue-400 underline">
            {bookingData.hospital}
          </a>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold dark:text-gray-300">Contact Number:</h3>
          <p className="dark:text-gray-200">{bookingData.contactNumber}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold dark:text-gray-300">Address:</h3>
          <p className="dark:text-gray-200">{bookingData.address}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold dark:text-gray-300">Country:</h3>
          <p className="dark:text-gray-200">{bookingData.country}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold dark:text-gray-300">Working Hour:</h3>
          <ul>
            {bookingData.workingHours && bookingData.workingHours.length > 0 ? (
              bookingData.workingHours.map((hour, index) => (
                <li key={index} className="dark:text-gray-200">{hour}</li>
              ))
            ) : (
              <li className="dark:text-gray-200">No working hours available.</li>
            )}
          </ul>
        </div>
        <hr className="border-gray-300 dark:border-gray-600" />

        {/* User Info Section */}
        <div className="mb-4 mt-12">
          <div className="mb-4">
            <h3 className="font-semibold dark:text-gray-300">Requested Date:</h3>
            <p className="dark:text-gray-200">{bookingData.requestedDate}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold dark:text-gray-300">Preferred Date:</h3>
            <p className="dark:text-gray-200">{bookingData.preferredDate}</p>
          </div>

          <p className="dark:text-gray-200">Name: {bookingData.user?.name || "N/A"}</p>
          <p className="dark:text-gray-200">Gender: {bookingData.user?.gender || "N/A"}</p>
          <p className="dark:text-gray-200">Birthday: {bookingData.user?.birthday || "N/A"}</p>
          <p className="dark:text-gray-200">Email: {bookingData.user?.email || "N/A"}</p>
          <p className="dark:text-gray-200">Phone Number: {bookingData.user?.phone || "N/A"}</p>
        </div>

        {/* Close Button */}
        <div className="flex justify-end">
          <button
            className="bg-gray-500 dark:bg-gray-700 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
