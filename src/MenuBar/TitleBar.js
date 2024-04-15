import React from 'react';

const TitleBar = () => {
  return (
    <nav className="bg-[#597DFF]">  {/* Updated background color class */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo container */}
        <div className="mr-4">
          <img src="https://seeklogo.com/images/B/buitems-logo-9E9FC33264-seeklogo.com.png" alt="logo" className="h-8 mr-4" />
        </div>
        <h1 className="text-lg font-bold text-white">Automated Student Service with Tracking</h1>
        <ul className="flex space-x-4">
          {/* Add menu items here if needed */}
        </ul>
      </div>
    </nav>
  );
};

export default TitleBar;
