import React, { useState } from 'react';

function MessageBox() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the message here
    console.log('Message sent:', message);
    setMessage('');
  };
  function fun(){
    alert("Message has been delivered successfully")
  }

  return (
   
    <div className="flex flex-col w-96 p-6 mx-auto bg-white rounded-lg shadow-md"> {/* Changed width */}
      <h2 className="text-xl font-medium mb-4">New Message</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="to" className="block mb-2 text-sm font-medium">
          To:
        </label>
        <input
          id="to"
          type="text"
          placeholder="Recipient Name"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          
        />
        <label htmlFor="message" className="block mb-2 text-sm font-medium mt-4">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={handleChange}
          placeholder="Write your message"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          rows="5"
        />
        <button
          type="submit"
          className="inline-flex items-center px-3 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={fun}
        >
          Send
        </button>
      </form>
    </div>
    
  );
}

export default MessageBox;
