import React from 'react';

function FeePaymentSummary({ name, trackingId, semester, feesPaid }) {
  return (
    <div className="bg-white rounded-lg shadow-md px-4 py-6 flex flex-col justify-center items-center">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">Fee Payment Summary</h2>
      </div>
      <div className="text-gray-500 text-base mb-4">
        <p>Hi {name},</p>
        <p>This is a confirmation that your semester fees for {semester} have been paid.</p>
      </div>
      <div className="flex space-x-7">
        <div className="bg-green-100 text-green-500 rounded-lg px-4 py-2 flex items-center space-x-2">
          <span className="text-xl font-bold">{trackingId}</span>
          <p className="text-base">Tracking ID</p>
        </div>
        <div className="bg-green-100 text-green-500 rounded-lg px-4 py-2 flex items-center space-x-2">
          <span className="text-xl font-bold">{feesPaid}</span>
          <p className="text-base">Amount Paid</p>
        </div>
      </div>
    </div>
  );
}

export default FeePaymentSummary;
