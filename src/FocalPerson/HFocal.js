import React from 'react';

function HFocal() {
  return (
    <div className="bg-white rounded-lg px-4 py-6 flex flex-col justify-center items-center"> 
      <div className="mb-4"> 
        <h2 className="text-xl font-bold text-gray-800">Welcome To Focal-Person DashBoard</h2>
        <p className="text-gray-500 text-base">There are currently:</p>
      </div>
      <div className="flex space-x-7"> 
        <div className="bg-blue-100 text-blue-500 rounded-lg px-4 py-2 flex items-center space-x-2">
          <span className="text-2xl font-bold">10</span>
          <p className="text-base">New Requests</p>
        </div>
        <div className="bg-blue-100 text-blue-500 rounded-lg px-4 py-2 flex items-center space-x-2">
          <span className="text-2xl font-bold">14</span>
          <p className="text-base">Pending Requests</p>
        </div>
        <div className="bg-blue-100 text-blue-500 rounded-lg px-4 py-2 flex items-center space-x-2">
          <span className="text-2xl font-bold">55</span>
          <p className="text-base">Total Requests</p>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto"> 
        <div className="w-full table-auto bg-blue-500 rounded-lg shadow-md p-10">
          <h1 className="text-3xl font-bold mb-8">Tracking Application</h1>
          {/* ... Your table code ... */}
          <table className="w-full table-auto bg-blue-500">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="p-2">Application ID</th>
              <th className="p-2">Application Type</th>
              <th className="p-2">Date</th>
              <th className="p-2">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-2">92</td>
              <td className="p-2">CMS Password Reset</td>
              <td className="p-2">18/09/23</td>
              <td className="p-2">Software</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-2">84</td>
              <td className="p-2">Name Correction</td>
              <td className="p-2">18/09/23</td>
              <td className="p-2">Software</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-2">88</td>
              <td className="p-2">WOW</td>
              <td className="p-2">18/09/23</td>
              <td className="p-2">Super</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default HFocal;
