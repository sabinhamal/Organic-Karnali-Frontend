import React from "react";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInDown } from "../../utils/animations";
import appleSlice from "../../assets/apple slice.png"
import himalayanSilajit from "../../assets/himalayan silajit.png"
import jimbu from "../../assets/jimbu.png"
import nettlePowder from "../../assets/nettle powder.png"
import wildHoney from "../../assets/wild honey.png"

const ProductList = ({ categoryId }) => {
    const products =
        [
            { name: 'Himalayan Silajit', image: himalayanSilajit, price: 1500 },
            { name: 'Apple Slice', image: appleSlice, price: 1200 },
            { name: 'Wild Honey', image: wildHoney, price: 500 },
            { name: 'Jimbu', image: jimbu, price: 2000 },
            { name: 'Nettle Powder', image: nettlePowder, price: 3000 },
            { name: 'Nettle Powder', image: nettlePowder, price: 3000 },
            { name: 'Jimbu', image: jimbu, price: 2000 },
            { name: 'Nettle Powder', image: wildHoney, price: 3000 },
            { name: 'Nettle Powder', image: nettlePowder, price: 3000 }
        ]

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="flex flex-col items-start gap-12 xl:w-[75rem] lg:w-[60rem] w-full xl:px-0 px-6 md:py-[5rem]">
                <motion.div
                    initial={fadeInDown.initial}
                    whileInView={fadeInDown.whileInView}
                    viewport={fadeInDown.viewport}
                    transition={fadeInDown.transition}
                    className="flex flex-col items-center justify-center w-full">
                    <br></br>
                    <br></br>
                    <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold bg-gradient-to-tr from-green-700 via-green-600 to-green-400 bg-clip-text text-transparent">
                        Our Products
                    </h1>
                </motion.div>

                <div className="w-full flex md:flex-wrap md:flex-row flex-col md:items-center items-center justify-center gap-12">
                    {products.map((item, idx) => (
                        <motion.div
                            initial={fadeInDown.initial}
                            whileInView={fadeInDown.whileInView}
                            viewport={fadeInDown.viewport}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                                delay: idx * 0.2
                            }} key={idx} className="md:w-[23rem] w-full md:h-[28rem] h-[24rem] flex flex-col items-start gap-4">
                            <img src={item.image} className="w-full rounded-xl h-[75%] object-cover object-bottom" alt="" />
                            <div className="flex flex-col items-start gap-4 w-full">
                                <div className="w-full flex items-start justify-between">
                                    <h3 className="text-[1rem] md:text-xl font-medium">{item.name}</h3>
                                    <p className="text-[1rem] md:text-xl">Rs {item.price}</p>
                                </div>
                                <button className="w-full bg-transparent border border-black text-black hover:border-black hover:bg-black hover:text-white transition-all duration-500 md:py-3 py-2.5 flex items-center justify-center gap-3">
                                    <ShoppingCart size={'20px'} />
                                    <p className="text-xs md:text-[0.9rem]">Add to cart</p>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </div >
    )
}

export default ProductList;