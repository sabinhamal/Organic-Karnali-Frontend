import React from "react";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import CartDetails from "./CartDetails";
import OrderHistory from "./OrderHistory";
import Wishlist from "./Wishlist";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefefe] to-[#fff8f3] flex items-center justify-center">
      <div className="w-full max-w-7xl p-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-green-600 via-green-400 to-green-700 bg-clip-text text-transparent">
          Welcome to Your Dashboard
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserDetails />
          <AddressDetails />
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CartDetails />
          <Wishlist />
        </div>
        <div className="mt-8">
          <OrderHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
