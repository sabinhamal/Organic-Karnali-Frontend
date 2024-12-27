import React from 'react'
import butterfly from '../assets/butterfly.jpg'
import { ChevronRightIcon, FacebookIcon, Instagram, Twitter, Youtube } from 'lucide-react'
import { fadeInDown, fadeInUp } from '../utils/animations'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className='min-h-screen w-full flex items-start justify-center bg-[#fefefe]'>
            <div className='xl:w-[75rem] lg:w-[60rem] pb-[7rem] w-full xl:px-0 px-6 h-full items-center justify-between mt-40'>
                <div className='flex flex-col items-center w-full md:gap-20 gap-12'>

                    {/* Image */}
                    <motion.div
                        initial={fadeInDown.initial}
                        animate={fadeInDown.animate}
                        transition={fadeInDown.transition}
                        className='relative w-full'>
                        <img src={butterfly} loading='lazy' className='lg:h-96 md:h-72 h-48 rounded-[2rem] brightness-50 w-full object-cover' alt="" />
                        <h1 className='absolute inset-0 flex items-center justify-center tracking-widest lg:text-8xl md:text-6xl text-3xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-green-600 to-white'>Contact Us</h1>
                    </motion.div>

                    {/* Content */}
                    <div className='w-full flex lg:flex-row flex-col items-start lg:justify-between justify-start gap-12 xl:h-[32.5rem] lg:h-[37rem]'>
                        <motion.div
                            initial={fadeInUp.initial}
                            animate={fadeInUp.animate}
                            transition={fadeInUp.transition} className='flex flex-col items-start justify-between md:gap-9 gap-6 lg:w-1/2 w-full lg:h-full'>
                            <h1 className='md:text-[3.25rem] text-3xl leading-[1] text-zinc-700'>We are always ready to help you and <br className='lg:block hidden' /> answer your <br className='lg:block hidden' /> questions
                            </h1>
                            <p className='md:text-[1rem] text-xs'>
                                We're always ready to assist you with any concerns. Feel free to reach out with your questions anytime.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6 w-full justify-center items-start">
                                <div className="flex flex-col items-start gap-1">
                                    <h3 className="md:text-xl font-semibold">Call Center</h3>
                                    <p className="md:text-[0.9rem] text-xs mt-2">+977 98123456</p>
                                    <p className="md:text-[0.9rem] text-xs">+081 12345678</p>
                                </div>

                                <div className="flex flex-col items-start gap-1">
                                    <h3 className="md:text-xl font-semibold">Our Location</h3>
                                    <p className="md:text-[0.9rem] text-xs mt-2">Kathmandu - 11500</p>
                                    <p className="md:text-[0.9rem] text-xs">Bagmati, Nepal</p>
                                </div>

                                <div className="flex flex-col items-start gap-1">
                                    <h3 className="md:text-xl font-semibold">Email</h3>
                                    <p className="md:text-[0.9rem] text-xs mt-2">organic@karnali.com.np</p>
                                </div>

                                <div className="flex flex-col items-start gap-3">
                                    <h3 className="md:text-xl font-semibold">Social Networks</h3>
                                    <div className="flex items-center gap-6">
                                        <FacebookIcon className="size-[18px]" />
                                        <Instagram className="size-[18px]" />
                                        <Twitter className="size-[18px]" />
                                        <Youtube className="size-[18px]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <div className='flex flex-col items-start justify-between gap-4 md:p-12 p-6 rounded-3xl lg:w-1/2 w-full h-full bg-[#f1f2f4]'>
                            <h3 className='font-medium text-2xl'>Get in Touch</h3>
                            <p>Tell us your opinions, views & reviews so that we can continue providing quality products.</p>

                            <form action="/contact" className='flex flex-col items-start gap-6 mt-4 w-full'>
                                <input type="text" name="fullName" placeholder='Full Name' className='w-full border-b-[1px] border-b-zinc-400 bg-transparent outline-none' />
                                <input type="email" name="email" placeholder='Email' className='w-full border-b-[1px] border-b-zinc-400 text-[1rem] bg-transparent outline-none' />
                                <textarea name="message" placeholder='Message' className='w-full h-32 border-b-[1px] border-b-zinc-400 text-[1rem] bg-transparent outline-none' style={{ resize: 'none' }}></textarea>
                                <button type='submit' className='flex items-center gap-2 bg-zinc-700 text-white rounded-full px-5 py-3 text-[0.9rem]'><ChevronRightIcon className='size-[18px]' />Send Message</button>
                            </form>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280009836!2d-74.144487374908!3d40.697631233319264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1735308058214!5m2!1sen!2snp" className='w-full h-96 grayscale rounded-xl' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact