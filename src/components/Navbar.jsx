import { Heart, Search, ShoppingCart, UserRound, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import logo from "../assets/logo.png"
import LoginModal from "./LoginModal"
import SignupModal from './SignupModal';
import { fadeInUp } from '../utils/animations';
import Sidebar from './Sidebar';
import SearchModal from './SearchModal';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    //Toggle Modal
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const toggleLoginModal = () => { setIsLoginModalOpen(!isLoginModalOpen) };

    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const toggleSignupModal = () => { setIsSignupModalOpen(!isSignupModalOpen) };

    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const toggleSearch = () => { setIsSearchOpen(!isSearchOpen) }

    //Count of favourite and cart items 
    const [favouriteCount, setFavouriteCount] = useState(0)
    const [cartCount, setCartCount] = useState(0)

    //Sidebar close & open
    const [toggleSidebar, setToggleSidebar] = useState(false);

    //Disable scroll when sidebar is toggled
    useEffect(() => {
        document.body.style.overflow = toggleSidebar ? "hidden" : "auto";
    }, [toggleSidebar])

    //Disable sidebar everytime new route is opened
    useEffect(() => {
        setToggleSidebar(false);
    }, [location])

    return (
        <div className="flex items-center justify-center w-full">
            <LoginModal isLoginModalOpen={isLoginModalOpen} toggleLoginModal={toggleLoginModal} openSignupModal={toggleSignupModal} />
            <SignupModal isSignupModalOpen={isSignupModalOpen} toggleSignupModal={toggleSignupModal} openLoginModal={toggleLoginModal} />
            <SearchModal isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />
            <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
                className='absolute top-6 xl:w-[75rem] lg:w-[60rem] w-full xl:px-0 px-6 rounded-full border-zinc-300 flex items-center justify-between'>

                <div className='flex items-center justify-start gap-4 w-1/3 cursor-pointer' onClick={() => setToggleSidebar(!toggleSidebar)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180" viewBox="0 0 24 24" width="26" height="26" color="black" fill="none">
                        <path d="M20 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 5L4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 19L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h1 className="text-lg md:block hidden">Menu</h1>
                </div>
                <div className='w-1/3 flex items-center justify-center'>
                    <Link to={'/'}><img src={logo} className='cursor-pointer md:w-44 w-20 brightness-75' alt="" /></Link>
                </div>
                <div className='flex items-center justify-end md:gap-9 gap-4 w-1/3'>
                    <Search onClick={toggleSearch} className="text-zinc-700 cursor-pointer md:w-[24px] w-[20px]" />
                    <UserRound onClick={toggleLoginModal} className="text-zinc-700 cursor-pointer md:w-[24px] w-[20px]" />

                    <div className="relative md:block hidden">
                        <Heart className="text-zinc-700 cursor-pointer w-[24px]" />
                        <h3 className="bg-black text-white rounded-full flex justify-center text-xs py-0.5 px-1.5 absolute -top-2 -right-3">
                            {favouriteCount}
                        </h3>
                    </div>
                    <div className="relative">
                        <ShoppingCart className="text-zinc-700 cursor-pointer md:w-[24px] w-[20px]" />
                        <h3 className="bg-black text-white rounded-full flex justify-center text-xs py-0.5 px-1.5 absolute -top-2 -right-3">
                            {cartCount}
                        </h3>
                    </div>
                </div>

                {/* Sidebar  */}
                <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />

            </motion.div >
        </div >
    )
}

export default Navbar