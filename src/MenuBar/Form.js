import React, { useState } from 'react';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    if (!fullName || !email || !issue) {
      alert('Please fill out all required fields (Full Name, Email, and Issue).');
      return;
    }

    // Send form data to server (replace with your backend logic)
    console.log({
      fullName,
      email,
      faculty,
      department,
      semester,
      issue,
    });

    // Clear form after submission (optional)
    setFullName('');
    setEmail('');
    setFaculty('');
    setDepartment('');
    setSemester('');
    setIssue('');
  };
  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <form className="flex flex-col space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold text-center mb-4">Fill the form to Contact Chairperson</h1>
        <div className="flex flex-col space-y-1">
          <label htmlFor="fullName" className="text-sm font-medium">Full Name *</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium">Email *</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="faculty" className="text-sm font-medium">Faculty *</label>
          <input
            id="faculty"
            type="text"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="department" className="text-sm font-medium">Department *</label>
          <input
            id="department"
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="semester" className="text-sm font-medium">Semester (Optional)</label>
          <input
            id="semester"
            type="text"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="issue" className="text-sm font-medium">Your Issue *</label>
          <textarea
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;