import React from 'react'
import Navbar from '../components/Navbar'
import { ChevronRight, Heart } from 'lucide-react'
import heroImage from "../assets/hero-image.png"
import leaf from "../assets/leaf.png"
import { motion } from 'framer-motion'

const Homepage = () => {
    return (
        <div className='min-h-screen pb-[7rem] w-full flex items-start justify-center bg-gradient-to-b from-[#fefefe] to-[#fde6d6]'>
            <div className='xl:w-[70rem] lg:w-[60rem] w-full xl:px-0 px-6 h-full flex flex-col items-start gap-24'>
                <Navbar />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 100, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className='w-full flex items-center justify-between lg:mt-20'>
                    <div className='flex flex-col items-start gap-6'>
                        <h1 className='xl:text-7xl text-6xl font-bold font-[MainFont]'>Organic <br /><span className='xl:text-[7.5rem] text-[7rem] font-[MainFont]'>Karnali</span></h1>
                        <p className='w-96 font-medium'>Experience the finest organic products straight from the pristine mountains of Karnali.</p>


                        <div className='flex items-center gap-5 mt-6'>
                            <div className="cursor-pointer bg-zinc-900 text-white flex items-center justify-center gap-5 px-6 py-3 text-[1rem] font-medium rounded-full shadow-sm shadow-black active:scale-95 active:shadow-lg transition-all duration-200 group">
                                <h1>Shop Now</h1>
                                <div className='bg-gradient-to-bl from-green-400 to-green-800 rounded-full p-1 translate-x-0 group-active:-translate-x-[0.15rem] transition-all duration-200'>
                                    <ChevronRight />
                                </div>
                            </div>
                            <div className='p-4 bg-white rounded-full shadow-lg'><Heart fill='#ac9d96' color='#ac9d96' /></div>
                        </div>
                    </div>

                    <div className='bg-[#2b2c3e] rounded-full relative'>
                        <img src={heroImage} className='xl:w-[30rem] w-[27rem]' alt="" />
                        <div className='p-4 w-24 h-24 bg-gradient-to-br from-green-400 via-green-200 to-white rounded-full absolute top-6 right-6'>
                            <img src={leaf} className='object-contain' alt="" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default Homepage