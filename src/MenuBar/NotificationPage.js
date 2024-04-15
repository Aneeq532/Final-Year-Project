import React from 'react';

const NotificationPage = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="flex justify-between items-center py-4 px-4 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Notifications</h1>
        <button className="text-blue-500 hover:text-blue-700">
          Mark all as read
        </button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Application ID</h3>
            <h3 className="text-lg font-medium">Application Type </h3>
            <h3 className="text-lg font-medium">Date</h3>
            <h3 className="text-lg font-medium">Status</h3>
            
          </div>
          <p className="py-2 text-center color-red">NO RECORD FOUND</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
