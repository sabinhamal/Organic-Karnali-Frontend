import himalayanSilajit from "../assets/himalayan silajit.png"
import wildHoney from "../assets/wild honey.png"
import appleSlice from "../assets/apple slice.png"
import jimbu from "../assets/jimbu.png"
import nettlePowder from "../assets/nettle powder.png"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInDown, fadeInUp } from "../utils/animations"

const FeaturedProducts = () => {

    const products =
        [
            { name: 'Himalayan Silajit', image: himalayanSilajit, price: 1500 },
            { name: 'Apple Slice', image: appleSlice, price: 1200 },
            { name: 'Wild Honey', image: wildHoney, price: 500 },
            { name: 'Jimbu', image: jimbu, price: 2000 },
            { name: 'Nettle Powder', image: nettlePowder, price: 3000 }
        ]

    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-t to-[#fff8f3] from-[#fefefe]'>
            <div className="flex flex-col items-start gap-12 xl:w-[75rem] lg:w-[60rem] w-full xl:px-0 px-6 py-[5rem]">
                <motion.div
                    initial={fadeInDown.initial}
                    whileInView={fadeInDown.whileInView}
                    viewport={fadeInDown.viewport}
                    transition={fadeInDown.transition}
                    className="flex flex-col items-center justify-center w-full">
                    <p className="text-[1rem] text-green-700 text-center">Check Now !</p>
                    <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold bg-gradient-to-tr from-green-700 via-green-600 to-green-400 bg-clip-text text-transparent">
                        Our Featured Products
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

                <div className="xl:w-[75rem] w-full flex xl:flex-row flex-col items-center lg:justify-between justify-center gap-9 py-12">
                    <motion.div
                        initial={fadeInUp.initial}
                        whileInView={fadeInUp.whileInView}
                        viewport={fadeInUp.viewport}
                        transition={fadeInUp.transition}
                        className="xl:w-1/2 w-full md:h-80 h-64 flex flex-col text-white items-start p-9 justify-start relative">
                        <img src={himalayanSilajit} className="object-cover h-full w-full absolute top-0 left-0 z-[1]" alt="" />
                        <div className="z-[2] flex flex-col items-start gap-6">
                            <h3 className="uppercase md:text-xl text-xs"><span className="font-semibold">New</span> collection</h3>
                            <h1 className="capitalize md:text-4xl text-2xl font-bold">best offer deals <br /> available</h1>
                            <button className="bg-white text-black shadow-lg md:px-7 md:py-3 px-5 py-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out text-xs md:text-[1rem]">Explore Now</button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={fadeInUp.initial}
                        whileInView={fadeInUp.whileInView}
                        viewport={fadeInUp.viewport}
                        transition={{ ...fadeInUp.transition, delay: 0.4 }}
                        className="xl:w-1/2 w-full md:h-80 h-64 text-white flex flex-col items-start p-9 justify-start relative">
                        <img src={wildHoney} className="object-cover brightness-[60%] h-full w-full absolute top-0 left-0 z-[1]" alt="" />
                        <div className="z-[2] flex flex-col items-start gap-6">
                            <h1 className="md:text-4xl text-2xl">25<span>%</span> off Everything</h1>
                            <p className="md:text-xl text-xs w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto, voluptatum nam sint amet rem?</p>
                            <button className="bg-white text-black shadow-lg md:px-7 md:py-3 px-5 py-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out text-xs md:text-[1rem]">Shop Now</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default FeaturedProducts