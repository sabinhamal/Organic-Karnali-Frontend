import React from 'react'
import globe from '../../assets/globe.png'
import wallet from '../../assets/wallet.png'
import money from '../../assets/money.png'
import secuirity from '../../assets/secuirity.png'
import { fadeInDown, fadeInUp } from '../../utils/animations.js'
import { motion } from 'framer-motion'

const Features = () => {
    return (
        <div className="flex items-center justify-center md:my-[5rem] w-full">
            <div className="flex items-center xl:flex-row flex-col justify-center xl:justify-between gap-9 lg:w-[80rem] w-full md:px-0 px-6">

                <motion.div
                    initial={fadeInDown.initial}
                    whileInView={fadeInDown.whileInView}
                    viewport={fadeInDown.viewport}
                    transition={fadeInDown.transition}
                    className="xl:w-1/3 md:w-96 w-full xl:h-64 md:h-28 h-20 rounded-xl flex xl:flex-col flex-row items-center justify-center gap-5 bg-zinc-100 shadow-sm px-6">
                    <div className="bg-white rounded-full shadow-lg">
                        <img src={globe} className="md:p-4 p-2 md:w-[70px] w-[50px]" alt="" />
                    </div>
                    <h1 className="lg:text-xl text-[0.9rem] text-zinc-500 font-medium capitalize">Super Fast & Free Delivery</h1>
                </motion.div>

                <div className="xl:w-1/3 md:w-96 w-full md:h-64 h-[12rem] flex flex-col xl:items-start items-center justify-between gap-9">
                    <motion.div
                        initial={fadeInUp.initial}
                        whileInView={fadeInUp.whileInView}
                        viewport={fadeInUp.viewport}
                        transition={{ ...fadeInUp.transition, delay: 0.2 }}
                        className="xl:w-full w-full h-1/2 rounded-xl flex items-center justify-center gap-5 bg-zinc-100 shadow-sm px-6">
                        <div className="bg-white rounded-full shadow-lg">
                            <img src={secuirity} className="md:p-4 p-2 md:w-[70px] w-[50px]" alt="" />
                        </div>
                        <h1 className="lg:text-xl text-[0.9rem] text-zinc-500 font-medium capitalize">Your safety, our priority</h1>
                    </motion.div>
                    <motion.div
                        initial={fadeInUp.initial}
                        whileInView={fadeInUp.whileInView}
                        viewport={fadeInUp.viewport}
                        transition={{ ...fadeInUp.transition, delay: 0.3 }} className="xl:w-full w-full h-1/2 rounded-xl flex items-center justify-center gap-5 bg-zinc-100 shadow-sm px-6">
                        <div className="bg-white rounded-full shadow-lg">
                            <img src={money} className="md:p-4 p-2 md:w-[70px] w-[50px]" alt="" />
                        </div>
                        <h1 className="lg:text-xl text-[0.9rem] text-zinc-500 font-medium capitalize">Best value for every penny</h1>
                    </motion.div>
                </div>

                <motion.div
                    initial={fadeInDown.initial}
                    whileInView={fadeInDown.whileInView}
                    viewport={fadeInDown.viewport}
                    transition={{ ...fadeInDown.transition, delay: 0.4 }}
                    className="xl:w-1/3 md:w-96 w-full xl:h-64 md:h-28 h-20 rounded-xl flex xl:flex-col flex-row items-center justify-center gap-5 bg-zinc-100 shadow-sm px-6">
                    <div className="bg-white rounded-full shadow-lg">
                        <img src={wallet} className="md:p-4 p-2 md:w-[70px] w-[50px]" alt="" />
                    </div>
                    <h1 className="lg:text-xl text-[0.9rem] text-zinc-500 font-medium capitalize">Affordable and accessible for all</h1>
                </motion.div>

            </div>
        </div >
    )
}

export default Features