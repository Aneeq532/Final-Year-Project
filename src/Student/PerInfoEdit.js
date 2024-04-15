import React, { useState } from 'react';

function SettingForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [studentCard, setStudentCard] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      case 'semester':
        setSemester(value);
        break;
      default:
        break;
    }
  };

  const handleStudentCardUpload = (event) => {
    setStudentCard(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', { fullName, email, department, semester, studentCard });
    // Reset the form after submission
    setFullName('');
    setEmail('');
    setDepartment('');
    setSemester('');
    setStudentCard(null);
  };

  return (
    <div className="cbg-white rounded-lg px-4 py-6 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-md max-w-sm p-6">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-8">Setting</h1>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 text-base font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-base font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block text-gray-700 text-base font-bold mb-2">
              Department
            </label>
            <input
              type="text"
              name="department"
              id="department"
              value={department}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="semester" className="block text-gray-700 text-base font-bold mb-2">
              Semester
            </label>
            <input
              type="text"
              name="semester"
              id="semester"
              value={semester}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="studentCard" className="block text-gray-700 text-base font-bold mb-2">
              Student Card
            </label>
            <input
              type="file"
              name="studentCard"
              id="studentCard"
              onChange={handleStudentCardUpload}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            /> 
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingForm;