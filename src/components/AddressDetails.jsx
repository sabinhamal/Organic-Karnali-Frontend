import React, { useState } from "react";

const AddressDetails = () => {
  const [addressDetails, setAddressDetails] = useState({
    street: "123 Main St",
    city: "Springfield",
    zip: "12345",
    country: "USA",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempAddress, setTempAddress] = useState({ ...addressDetails });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setAddressDetails(tempAddress);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempAddress({ ...addressDetails });
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#fff8f3] to-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Address Details</h2>
      <ul className="space-y-3">
        <li>
          <span className="font-bold text-gray-800">Street:</span> {addressDetails.street}
        </li>
        <li>
          <span className="font-bold text-gray-800">City:</span> {addressDetails.city}
        </li>
        <li>
          <span className="font-bold text-gray-800">ZIP:</span> {addressDetails.zip}
        </li>
        <li>
          <span className="font-bold text-gray-800">Country:</span> {addressDetails.country}
        </li>
      </ul>
      <button
        onClick={handleEdit}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all justify-items-end"
      >
        Update Address
      </button>

      {isEditing && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Edit Address Details</h3>
          <input
            type="text"
            value={tempAddress.street}
            onChange={(e) => setTempAddress({ ...tempAddress, street: e.target.value })}
            placeholder="Street"
            className="block w-full mb-2 p-2 border rounded-md"
          />
          <input
            type="text"
            value={tempAddress.city}
            onChange={(e) => setTempAddress({ ...tempAddress, city: e.target.value })}
            placeholder="City"
            className="block w-full mb-2 p-2 border rounded-md"
          />
          <input
            type="text"
            value={tempAddress.zip}
            onChange={(e) => setTempAddress({ ...tempAddress, zip: e.target.value })}
            placeholder="ZIP"
            className="block w-full mb-2 p-2 border rounded-md"
          />
          <input
            type="text"
            value={tempAddress.country}
            onChange={(e) => setTempAddress({ ...tempAddress, country: e.target.value })}
            placeholder="Country"
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

export default AddressDetails;
