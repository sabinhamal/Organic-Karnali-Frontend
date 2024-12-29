import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-16 w-full relative">
      <div className="px-6 xl:px-16 w-full flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <img 
            src="./src/assets/logo.png" 
            alt="Organic Karnali Logo" 
            className="w-32 h-16 mx-auto md:mx-0"
          />
          <br></br>
          <h2 className="text-xl font-semibold">Organic Karnali</h2>
          <p className="text-sm text-gray-400">Nurturing your health naturally</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <a href="#home" className="hover:text-gray-300 transition">Home</a>
          <a href="#about" className="hover:text-gray-300 transition">About Us</a>
          <a href="#shop" className="hover:text-gray-300 transition">Shop</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400 absolute bottom-4 right-6 md:right-16">
        © {new Date().getFullYear()} Organic Karnali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
