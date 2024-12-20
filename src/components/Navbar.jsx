import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Navbar = () => {

    const navbarItems = [
        'Home', 'About Us', 'Shop', 'Contact'
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeInOut"
            }}
            className='rounded-full border border-zinc-300 flex items-center justify-between mt-6  w-full'>
            <h1 className='text-[1rem] font-semibold pl-6 font-[MainFont]'>Organic Karnali</h1>

            <ul className='flex items-center justify-center gap-9'>
                {navbarItems.map((item, idx) => (
                    <li className='text-[0.9rem] font-semibold hover:text-zinc-700 transition-all' key={idx}>
                        <Link to={`/${item.split(' ').join('').toLowerCase()}`}>{item}</Link>
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-4'>
                <h1 className='text-[1rem] font-medium'>Cart</h1>
                <div className='rounded-full border border-zinc-300 p-4'>
                    <ShoppingBag color='black' size={'1.5rem'} />
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar