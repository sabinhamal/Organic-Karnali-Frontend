import React, { Suspense } from "react";
import UserDetails from "../components/UserDetails";
import AddressDetails from "../components/AddressDetails";
import CartDetails from "../components/CartDetails";
import OrderHistory from "../components/OrderHistory";
import Wishlist from "../components/Wishlist";
import Footer from "../components/Footer";

const DashboardPage = () => {
  return (
    <div className="min-h-screen w-full flex items-start justify-center bg-gradient-to-b from-[#fefefe] to-[#fff8f3]">
      <div className="flex flex-col items-center w-full">
        <header className="w-full h-[15rem] flex items-center justify-center bg-gradient-to-b from-green-600 via-green-400 to-green-700">
          <h1 className="text-5xl font-extrabold text-white bg-clip-text text-transparent">
            User Dashboard
          </h1>
        </header>

        <main className="w-full max-w-7xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <UserDetails />
            <AddressDetails />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CartDetails />
            <Wishlist />
          </div>
          <div className="mb-8">
            <OrderHistory />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
