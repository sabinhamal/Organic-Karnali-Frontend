import React from "react";

const OrderHistory = () => {
  const orders = [
    { id: 1, date: "2025-01-01", items: 3, total: 45 },
    { id: 2, date: "2024-12-15", items: 2, total: 30 },
    { id: 3, date: "2024-11-20", items: 5, total: 75 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Order History</h2>
      <ul className="divide-y divide-gray-200">
        {orders.map((order) => (
          <li key={order.id} className="py-4">
            <p className="font-medium">Order #{order.id}</p>
            <p className="text-sm text-gray-500">Date: {order.date}</p>
            <p className="text-sm text-gray-500">Items: {order.items}</p>
            <p className="text-sm text-gray-500">Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
