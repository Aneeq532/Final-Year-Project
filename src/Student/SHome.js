import React from 'react';

const SHome = () => {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-20">
      <table className="w-1/2 border-collapse border border-gray-400 shadow-md rounded-lg">
        <thead>
          <tr className="text-left border-b border-gray-400">
            <th className="p-4 font-medium">APPLICATION ID</th>
            <th className="p-4 font-medium">APPLICATION TYPE</th>
            <th className="p-4 font-medium">DATE</th>
            <th className="p-4 font-medium">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-400 hover:bg-gray-100" onClick={()=>{alert('Clicked')}}>
            <td className="p-4">92</td>
            <td className="p-4">CMS Password Reset</td>
            <td className="p-4">18/09/23</td>
            <td className="p-4">Approved</td>
          </tr>
          <tr className="border-b border-gray-400 hover:bg-gray-100" onClick={()=>{alert('Clicked')}}>
            <td className="p-4">84</td>
            <td className="p-4">Name Correction</td>
            <td className="p-4">18/09/23</td>
            <td className="p-4">New</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SHome;
