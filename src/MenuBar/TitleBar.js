import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link


const TitleBar = () => {
  return (
    <nav className="bg-[#219EBC]">  
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo container */}
        <div className="mr-4">
          <img src="https://seeklogo.com/images/B/buitems-logo-9E9FC33264-seeklogo.com.png" alt="logo" className="h-8 mr-4" />
        </div>
        <h1 className="text-lg font-bold text-white">Automated Student Service with Tracking</h1>
        <ul className="flex space-x-4">
          {/* Add buttons here */}
          <li>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">Student</button> 
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">Chairperson</button> 
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">Admin</button> 
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">FocalPerson</button> 
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TitleBar;
