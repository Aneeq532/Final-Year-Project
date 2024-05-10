import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TrackingID() {
  const [trackingId, setTrackingId] = useState('');

  const handleChange = (event) => {
    setTrackingId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to track the item with the trackingId
    console.log(`Tracking ID: ${trackingId}`);
  };

  return (
        <div className="container mx-auto px-4 py-8 flex items-center justify-center "> 
          <div className="bg-white rounded-lg p-6 shadow-md max-w-sm"> 
            <h1 className="text-3xl font-bold mb-8">Tracking Application</h1>
            <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trackingId">
            Enter Tracking Id
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="trackingId"
            type="text"
            value={trackingId}
            onChange={handleChange}
          />
        </div>
        <Link to="/Student/Stepper">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          >
          Track
          
        </button>
            </Link>
      </form>
    </div>
    </div>
  );
}

export default TrackingID;
