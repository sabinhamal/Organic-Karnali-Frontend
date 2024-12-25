import React from 'react'
import video from "../assets/Organic Karnali - Home.mp4"
import SidebarAccordion from './SidebarAccordion';
import { Link } from 'react-router-dom'
import { X } from 'lucide-react';

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {

    return (
        <div className={`z-[999] ${toggleSidebar ? "-translate-x-0 visible" : "-translate-x-[100%] invisible"} duration-[800ms] transition-all ease-in-out bg-zinc-900 min-h-screen w-screen fixed inset-0 flex`}>

            {/* Sidebar Section */}
            <div className="bg-[#381f16] md:bg-opacity-100 bg-opacity-45 h-full xl:w-1/4 md:w-[30%] w-full flex flex-col items-start justify-between text-white z-[991] overflow-y-auto scrollbar-thin scrollbar-thumb-[#2f1c15] scrollbar-track-[#381f16]">
                <div className='flex flex-col items-start gap-12 w-full md:p-16 p-6'>
                    <div className='flex items-center gap-4 cursor-pointer' onClick={() => setToggleSidebar(!toggleSidebar)}>
                        <X size={'32px'} />
                        <h1 className="text-xl tracking-[0.2rem] uppercase">Menu</h1>
                    </div>
                    <SidebarAccordion />
                </div>

                <div className='flex flex-col items-start gap-12 w-full border-[1px] border-t-[#c5c5c54a] border-l-0 border-r-0 border-b-0 md:p-16 p-6'>
                    <div className="h-[1px] w-full"></div>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact Us</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>

            {/* Video Section */}
            <div className='xl:w-3/4 md:w-[70%] w-full h-full fixed top-0 right-0'>
                <video autoPlay loop muted playsInline className='h-full w-full object-cover pointer-events-none'>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>

    )
}

export default Sidebar