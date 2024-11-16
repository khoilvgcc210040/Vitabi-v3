import React, { useState } from "react";

interface CancelBookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReason: (reason: string) => void;
}

export default function CancelBookingDialog({
  isOpen,
  onClose,
  onSubmitReason,
}: CancelBookingDialogProps) {
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    onSubmitReason(reason);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg p-8 w-full max-w-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Cancel Booking</h2>

        {/* Cancel Reason */}
        <div className="mb-4">
          <label className="font-semibold block mb-1">Cancel Reason:</label>
          <textarea
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6 gap-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit Reason
          </button>
        </div>
      </div>
    </div>
  );
}
