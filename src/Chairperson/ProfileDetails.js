import React from 'react';
import { Link } from 'react-router-dom'; 
import './styles.css';

function ProfileDetails() {
  return (
    <div className="flex flex-col bg-blue-500 p-6 rounded-lg shadow-md w-96 mx-auto mt-10"> 
    <h2 className="text-xl font-medium mb-4 text-white">Setting</h2>
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <p className="text-base font-medium text-white">Profile Details</p>
        
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium text-white">Full Name:</p>
            <p className="text-sm text-gray-300">Dr. Shah Marjan</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium text-white">Email:</p>
            <p className="text-sm text-gray-300">engr.shahmarjanbuitms.edu.pk</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium text-white">Department:</p>
            <p className="text-sm text-gray-300">Software Eng.</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium text-white">Designation:</p>
            <p className="text-sm text-gray-300">Assistant Professor</p>
          </div>
          <Link to = "/Chairperson/ProfileEdit">

          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-500">
          Edit Profile
        </button>
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default ProfileDetails;
