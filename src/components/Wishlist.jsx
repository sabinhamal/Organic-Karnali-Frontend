import React from "react";

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: "Product A", price: 20 },
    { id: 2, name: "Product B", price: 15 },
    { id: 3, name: "Product C", price: 30 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Wishlist</h2>
      <ul className="divide-y divide-gray-200">
        {wishlistItems.map((item) => (
          <li key={item.id} className="py-4 flex justify-between items-center">
            <span>{item.name}</span>
            <span className="font-bold">${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
