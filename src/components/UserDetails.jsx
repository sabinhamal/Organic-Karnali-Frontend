import React, { useState } from "react";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 123 456 7890",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempDetails, setTempDetails] = useState({ ...userDetails });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserDetails(tempDetails);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempDetails({ ...userDetails });
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#fff8f3] to-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">User Details</h2>
      <ul className="space-y-3">
        <li>
          <span className="font-bold text-gray-800">Name:</span> {userDetails.name}
        </li>
        <li>
          <span className="font-bold text-gray-800">Email:</span> {userDetails.email}
        </li>
        <li>
          <span className="font-bold text-gray-800">Phone:</span> {userDetails.phone}
        </li>
      </ul>
      <button
        onClick={handleEdit}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all"
      >
        Update Details
      </button>

      {isEditing && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Edit User Details</h3>
          <input
            type="text"
            value={tempDetails.name}
            onChange={(e) => setTempDetails({ ...tempDetails, name: e.target.value })}
            placeholder="Name"
            className="block w-full mb-2 p-2 border rounded-md"
          />
          <input
            type="email"
            value={tempDetails.email}
            onChange={(e) => setTempDetails({ ...tempDetails, email: e.target.value })}
            placeholder="Email"
            className="block w-full mb-2 p-2 border rounded-md"
          />
          <input
            type="tel"
            value={tempDetails.phone}
            onChange={(e) => setTempDetails({ ...tempDetails, phone: e.target.value })}
            placeholder="Phone"
            className="block w-full mb-2 p-2 border rounded-md"
          />
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 px-4 py-2 rounded-full hover:bg-gray-400 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
