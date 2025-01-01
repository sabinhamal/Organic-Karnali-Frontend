import React, { Suspense, useEffect, useState } from 'react'
import { ChevronRight, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInDown } from '../utils/animations.js'
import heroImage from "../assets/hero-image.png"
import bee from "../assets/bee.png"
import leaf from "../assets/leaf.png"
import plant from "../assets/plant.png"
import { useLocation } from 'react-router-dom'

const FeaturedProducts = React.lazy(() => import('../components/Homepage/FeaturedProducts'));
const HomepageAccordion = React.lazy(() => import('../components/Homepage/HomepageAccordion.jsx'));
const Testimonials = React.lazy(() => import('../components/Homepage/Testimonials.jsx'));
const Features = React.lazy(() => import('../components/Homepage/Features.jsx'));

const Homepage = () => {
    const roundedText = "100% Raw Goods - 100% Raw Goods - ";
    const [isLoaded, setIsLoaded] = useState(false);
    const location = useLocation();

    const handleLoad = () => {
        setIsLoaded(true);
    };

    //reset scroll to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className='min-h-screen w-full flex items-start justify-center bg-[#fefefe]'>
            <div className='flex flex-col items-center w-full'>

                <div className='w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#fefefe] to-[#fff8f3] '>
                    <motion.div
                        initial={fadeInDown.initial}
                        animate={fadeInDown.animate}
                        transition={fadeInDown.transition}
                        className='xl:w-[75rem] lg:w-[60rem] relative w-full xl:px-0 px-6 h-full flex items-center justify-between lg:mt-40 mt-20'
                        onLoad={handleLoad}
                    >

                        {/* Rotating Text */}
                        <div className='lg:block hidden absolute bottom-44 xl:left-[28rem] left-[25rem]'>
                            <div className='relative h-[9rem] w-[9rem] rounded-full flex items-center justify-center'>
                                <img src={bee} className='absolute animate-pump rotate-[30deg] top-[2.35rem] left-10 w-[4.25rem] h-[4.25rem] object-contain' alt="" />
                                <div className='w-full h-full animate-rotate'>
                                    {roundedText.split("").map((char, i) => (
                                        <span
                                            className='absolute font-medium left-[50%] text-[0.85rem]'
                                            key={i}
                                            style={{
                                                transform: `rotate(${i * 10.4}deg)`,
                                                transformOrigin: '0px 4.5rem'
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Hero Section Start */}
                        <div className='flex flex-col lg:items-start items-center lg:w-auto w-full gap-7'>
                            <h1 className='xl:text-7xl md:text-6xl text-5xl lg:text-left text-center lg:-ml-0 -ml-14 font-medium bg-gradient-to-b bg-clip-text text-transparent from-green-500 to-green-800 relative'>
                                Organic
                                <img src={plant} className='md:w-16 w-12 absolute lg:top-0 md:-top-2 -top-1 lg:right-20 md:right-10 right-7' alt="" />
                                <br />
                                <span className='xl:text-[7.5rem] md:text-[7rem] text-[5rem] lg:-ml-0 ml-14 bg-gradient-to-br bg-clip-text text-transparent from-green-700 to-green-500 tracking-wide font-semibold'>Karnali</span>
                            </h1>
                            <p className='w-96 md:font-medium font-normal lg:text-left text-center'>Experience the finest organic products straight from the pristine mountains of Karnali.</p>

                            <div className='flex items-center gap-5'>
                                <div className="cursor-pointer bg-zinc-900 text-white flex items-center justify-center md:gap-5 gap-4 md:px-6 px-4 md:py-3 py-2.5
                                text-[1rem] font-medium rounded-full shadow-sm shadow-black active:scale-95 active:shadow-lg transition-all duration-200 group">
                                    <h1>Shop Now</h1>
                                    <div className='bg-white text-black rounded-full p-1 translate-x-0 group-active:-translate-x-[0.15rem] transition-all duration-200'>
                                        <ChevronRight />
                                    </div>
                                </div>
                                <div className='md:p-4 p-3 bg-white rounded-full shadow-lg'><Heart fill='#ac9d96' color='#ac9d96' /></div>
                            </div>
                        </div>

                        <div className='bg-[#2b2c3e] mb-[7rem] rounded-full relative lg:flex hidden'>
                            <img src={heroImage} className='xl:w-[35rem] w-[25rem]' alt="" />
                            <div className='p-4 w-24 h-24 bg-gradient-to-br from-green-400 via-green-200 to-white rounded-full absolute top-6 right-6'>
                                <img src={leaf} className='object-contain' alt="" />
                            </div>
                        </div>
                        {/* Hero Section End  */}

                    </motion.div>
                </div>

                {/* Featured Products  */}
                <Suspense fallback={<div className='w-full'>Loading...</div>} >
                    {isLoaded && <FeaturedProducts />}
                </Suspense>

                {/* Features  */}
                <Suspense fallback={<div className='w-full'>Loading...</div>} >
                    {isLoaded && <Features />}
                </Suspense>

                {/* Accordion  */}
                <Suspense fallback={<div className='w-full'>Loading...</div>} >
                    {isLoaded && <HomepageAccordion />}
                </Suspense>

                {/* Testimonials  */}
                <Suspense fallback={<div className='w-full'>Loading...</div>} >
                    {isLoaded && <Testimonials />}
                </Suspense>

            </div >
        </div >
    )
}

export default Homepage