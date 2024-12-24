import himalayanSilajit from "../assets/himalayan silajit.png"
import wildHoney from "../assets/wild honey.png"
import appleSlice from "../assets/apple slice.png"
import jimbu from "../assets/jimbu.png"
import nettlePowder from "../assets/nettle powder.png"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

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
        <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-t from-[#fff8f3] to-[#fefefe]'>
            <div className="flex flex-col items-start gap-12 pb-[7rem] xl:w-[75rem] lg:w-[60rem] w-full xl:px-0 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                    }} className="flex flex-col items-start gap-1">
                    <p className="font-[mainFont] text-[0.9rem]">Check Now</p>
                    <h1 className="font-[mainFont] md:text-6xl text-4xl font-medium bg-gradient-to-tl from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                        Our Featured Products
                    </h1>
                </motion.div>

                <div className="w-full flex md:flex-wrap md:flex-row flex-col md:items-start items-center justify-start gap-8">
                    {products.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                                delay: idx * 0.2
                            }} key={idx} className="md:w-[23rem] w-full min-h-96 flex flex-col items-start gap-8">
                            <img src={item.image} className="w-full rounded-xl h-[80%] object-cover object-bottom" alt="" />
                            <div className="flex flex-col items-start gap-4 w-full">
                                <div className="w-full flex items-start justify-between">
                                    <h3 className="text-xl md:text-2xl font-[mainFont] font-semibold">{item.name}</h3>
                                    <p className="text-[0.9rem] md:text-xl font-[mainFont]">Rs {item.price}</p>
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
                    <div className="xl:w-1/2 w-full md:h-80 h-64 flex flex-col text-white items-start p-9 justify-start relative">
                        <img src={himalayanSilajit} className="object-cover h-full w-full absolute top-0 left-0 z-[1]" alt="" />
                        <div className="z-[2] flex flex-col items-start gap-6">
                            <h3 className="uppercase md:text-xl text-xs"><span className="font-semibold">New</span> collection</h3>
                            <h1 className="capitalize md:text-4xl text-2xl font-bold">best offer deals <br /> available</h1>
                            <button className="bg-white text-black shadow-lg md:px-7 md:py-3 px-5 py-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out text-xs md:text-[1rem]">Explore Now</button>
                        </div>
                    </div>
                    <div className="xl:w-1/2 w-full md:h-80 h-64 text-white flex flex-col items-start p-9 justify-start relative">
                        <img src={wildHoney} className="object-cover brightness-[60%] h-full w-full absolute top-0 left-0 z-[1]" alt="" />
                        <div className="z-[2] flex flex-col items-start gap-6">
                            <h1 className="md:text-4xl text-2xl font-[mainFont]">25<span>%</span> off Everything</h1>
                            <p className="md:text-xl text-xs w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto, voluptatum nam sint amet rem?</p>
                            <button className="bg-white text-black shadow-lg md:px-7 md:py-3 px-5 py-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out text-xs md:text-[1rem]">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts