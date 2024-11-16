import React, { useState } from "react";
import CancelBookingDialog from "./Cancelbookingdialog"; // Điều chỉnh đường dẫn nếu cần

interface EditBookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    id: number;
    hospital: string;
    appointmentDate: string;
    appointmentStartTime: string;
    appointmentEndTime: string;
    insurance: string;
  };
  onSave: (updatedData: {
    hospital: string;
    appointmentDate: string;
    appointmentStartTime: string;
    appointmentEndTime: string;
    insurance: string;
  }) => void;
  onCancel: (reason: string) => void;
}

export default function EditBookingDialog({
  isOpen,
  onClose,
  bookingData,
  onSave,
  onCancel,
}: EditBookingDialogProps) {
  const [hospital, setHospital] = useState(bookingData.hospital);
  const [appointmentDate, setAppointmentDate] = useState(
    bookingData.appointmentDate
  );
  const [appointmentStartTime, setAppointmentStartTime] = useState(
    bookingData.appointmentStartTime
  );
  const [appointmentEndTime, setAppointmentEndTime] = useState(
    bookingData.appointmentEndTime
  );
  const [insurance, setInsurance] = useState(bookingData.insurance);

  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);

  const handleSave = () => {
    onSave({
      hospital,
      appointmentDate,
      appointmentStartTime,
      appointmentEndTime,
      insurance,
    });
    onClose();
  };

  const handleCancelClick = () => {
    setIsCancelDialogOpen(true);
  };

  const handleCancelAppointment = (reason: string) => {
    onCancel(reason);
    setIsCancelDialogOpen(false);
    onClose();
  };

  const handleCancelDialogClose = () => {
    setIsCancelDialogOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && !isCancelDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg p-8 w-full max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-4xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">
              Edit Booking (#{bookingData.id})
            </h2>
            <hr />
            {/* Hospital */}
            <div className="mb-4">
              <label className="font-semibold block mb-1 mt-4">Hospital:</label>
              <input
                type="text"
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
              />
            </div>

            {/* Appointment Time */}
            <div className="mb-4">
              <label className="font-semibold block mb-1">
                Appointment Time:
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="date"
                  className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
                <input
                  type="time"
                  className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
                  value={appointmentStartTime}
                  onChange={(e) => setAppointmentStartTime(e.target.value)}
                />
                <span>~</span>
                <input
                  type="time"
                  className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
                  value={appointmentEndTime}
                  onChange={(e) => setAppointmentEndTime(e.target.value)}
                />
              </div>
            </div>

            {/* Insurance */}
            <div className="mb-4">
              <label className="font-semibold block mb-1">Insurance:</label>
              <div className="flex flex-col gap-1">
                <label>
                  <input
                    type="radio"
                    name="insurance"
                    value="Cashless Payment Supported"
                    checked={insurance === "Cashless Payment Supported"}
                    onChange={(e) => setInsurance(e.target.value)}
                    className="mr-2"
                  />
                  Cashless Payment Supported
                </label>
                <label>
                  <input
                    type="radio"
                    name="insurance"
                    value="Insurance supported (NOT CASHLESS)"
                    checked={insurance === "Insurance supported (NOT CASHLESS)"}
                    onChange={(e) => setInsurance(e.target.value)}
                    className="mr-2"
                  />
                  Insurance supported (NOT CASHLESS)
                </label>
                <label>
                  <input
                    type="radio"
                    name="insurance"
                    value="Insurance not supported"
                    checked={insurance === "Insurance not supported"}
                    onChange={(e) => setInsurance(e.target.value)}
                    className="mr-2"
                  />
                  Insurance not supported
                </label>
              </div>
            </div>
            <hr />
            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleCancelClick}
              >
                Cancel Appointment
              </button>
              <div className="flex gap-2">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CancelBookingDialog */}
      {isCancelDialogOpen && (
        <CancelBookingDialog
          isOpen={isCancelDialogOpen}
          onClose={handleCancelDialogClose}
          onSubmitReason={handleCancelAppointment}
        />
      )}
    </>
  );
}
