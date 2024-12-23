import { Heart, Menu, Search, ShoppingCart, UserRound, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import logo from "../assets/logo.png"
import video from "../assets/Organic Karnali - Home.mp4"
import Accordion from './Accordion';

const Navbar = () => {

    const navbarItems = [
        'Home', 'About Us', 'Shop', 'Contact'
    ]


    //Count of favourite and cart items 
    const [favouriteCount, setFavouriteCount] = useState(0)
    const [cartCount, setCartCount] = useState(0)


    //Sidebar close & open
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <div className="flex items-center justify-center w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                }}
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
                    <img src={logo} className='md:w-44 w-20 brightness-75' alt="" />
                </div>
                <div className='flex items-center justify-end md:gap-9 gap-4 w-1/3'>
                    <Search className="text-zinc-700 cursor-pointer md:w-[24px] w-[20px]" />
                    <UserRound className="text-zinc-700 cursor-pointer md:w-[24px] w-[20px]" />

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
                <div className={`z-[999] ${toggleSidebar ? "-translate-x-0 visible" : "-translate-x-[100%] invisible"} duration-[1500ms] transition-all ease-in-out bg-zinc-900 min-h-screen w-screen fixed flex items-center justify-center inset-0`}>

                    <div className='bg-[#381f16] md:bg-opacity-100 bg-opacity-45 h-full xl:w-1/4 md:w-[30%] w-full flex flex-col items-start justify-between text-white z-[991]'>

                        <div className='flex flex-col items-start gap-12 w-full md:p-16 p-6'>
                            <div className='flex items-center gap-4 cursor-pointer' onClick={() => setToggleSidebar(!toggleSidebar)}>
                                <X size={'32px'} />
                                <h1 className="text-xnpl tracking-[0.2rem] uppercase">Menu</h1>
                            </div>

                            <Accordion />
                        </div>

                        <div className='flex flex-col items-start gap-12 w-full border-[1px] border-t-[#c5c5c54a] border-l-0 border-r-0 border-b-0 md:p-16 p-6'>
                            <div className="h-[1px] w-full"></div>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/contact'}>Contact Us</Link>
                            <Link to={'/login'}>Login</Link>
                        </div>

                    </div>

                    <div className='xl:w-3/4 md:w-[70%] w-full md:relative absolute z-[990] h-full'>
                        <video src={video} autoPlay loop muted className='h-full w-full object-cover' />
                    </div>
                </div>

            </motion.div >
        </div >
    )
}

export default Navbar