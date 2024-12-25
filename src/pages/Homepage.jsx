import React from 'react'
import { ChevronRight, Heart } from 'lucide-react'
import heroImage from "../assets/hero-image.png"
import leaf from "../assets/leaf.png"
import { motion } from 'framer-motion'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials.jsx'
import { fadeInDown } from '../utils/animations.js'

const Homepage = () => {
    return (
        <div className='min-h-screen w-full flex items-start justify-center bg-[#fefefe]'>
            <div className='flex flex-col items-center w-full'>

                <div className='w-full md:h-screen md:py-0 py-[7rem] flex items-center justify-center bg-gradient-to-b from-[#fefefe] to-[#fff8f3] '>
                    <motion.div
                        initial={fadeInDown.initial}
                        animate={fadeInDown.animate}
                        transition={fadeInDown.transition}
                        className='xl:w-[75rem] lg:w-[60rem] w-full xl:px-0 px-6 h-full flex items-center justify-between lg:mt-40 mt-20'>

                        {/* Hero Section Start */}
                        <div className='flex flex-col items-start gap-6'>
                            <h1 className='xl:text-7xl md:text-6xl text-5xl font-bold font-[MainFont]'>Organic <br /><span className='xl:text-[7.5rem] md:text-[7rem] text-7xl font-[MainFont]'>Karnali</span></h1>
                            <p className='w-96 font-medium'>Experience the finest organic products straight from the pristine mountains of Karnali.</p>


                            <div className='flex items-center gap-5 mt-6'>
                                <div className="cursor-pointer bg-zinc-900 text-white flex items-center justify-center md:gap-5 gap-3 md:px-6 md:py-3
                                px-4 py-2 text-[1rem] font-medium rounded-full shadow-sm shadow-black active:scale-95 active:shadow-lg transition-all duration-200 group">
                                    <h1>Shop Now</h1>
                                    <div className='bg-gradient-to-bl from-green-400 to-green-800 rounded-full p-1 translate-x-0 group-active:-translate-x-[0.15rem] transition-all duration-200'>
                                        <ChevronRight className='md:size-[25px] size-[20px]' />
                                    </div>
                                </div>
                                <div className='md:p-4 p-3 bg-white rounded-full shadow-lg'><Heart className='md:size-[25px] size-[20px]' fill='#ac9d96' color='#ac9d96' /></div>
                            </div>
                        </div>

                        <div className='bg-[#2b2c3e] mb-[7rem] rounded-full relative lg:flex hidden'>
                            <img src={heroImage} className='xl:w-[30rem] w-[27rem]' alt="" />
                            <div className='p-4 w-24 h-24 bg-gradient-to-br from-green-400 via-green-200 to-white rounded-full absolute top-6 right-6'>
                                <img src={leaf} className='object-contain' alt="" />
                            </div>
                        </div>

                        {/* Hero Section End  */}
                    </motion.div>
                </div>

                {/* Featured Products  */}
                <FeaturedProducts />

                {/* Testimonials  */}
                <Testimonials />
            </div>
        </div >
    )
}

export default Homepage