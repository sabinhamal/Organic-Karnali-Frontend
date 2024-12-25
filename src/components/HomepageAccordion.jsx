import React, { useState } from "react";
import { fadeInUp } from "../utils/animations";
import { motion } from "framer-motion";

const CustomAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Track the active section

    const accordionData = [
        {
            title: "Organic Supplements",
            subProducts: ["Shilajit", "Ashwagandha", "Spirulina", "Turmeric Capsules"],
        },
        {
            title: "Natural Sweeteners",
            subProducts: ["Raw Honey", "Date Syrup", "Maple Syrup", "Coconut Sugar"],
        },
        {
            title: "Herbal Teas",
            subProducts: ["Green Tea", "Chamomile Tea", "Peppermint Tea", "Ginger Tea"],
        },
        {
            title: "Skincare Essentials",
            subProducts: ["Aloe Vera Gel", "Rosewater", "Coconut Oil", "Shea Butter"],
        },
        {
            title: "Organic Oils",
            subProducts: ["Cold-Pressed Olive Oil", "Sesame Oil", "Flaxseed Oil", "Mustard Oil"],
        },
        {
            title: "Superfoods",
            subProducts: ["Chia Seeds", "Quinoa", "Goji Berries", "Moringa Powder"],
        },
    ];

    // Toggle open/close on the clicked section
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='w-full flex items-center justify-center bg-gradient-to-t to-[#fff8f3] from-[#fefefe]'>
            <div className="flex items-start justify-between gap-12 pb-[7rem] xl:w-[75rem] lg:w-[60rem] w-full xl:px-0 px-6">

                <motion.div
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    viewport={fadeInUp.viewport}
                    transition={fadeInUp.transition}
                    className="flex flex-col items-start gap-1">
                    <p className="font-[mainFont] text-[0.9rem]">Ask us anything</p>
                    <h1 className="font-[mainFont] md:text-6xl text-4xl font-medium bg-gradient-to-tl from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                        Any Questions <span className="font-light">?</span>
                    </h1>
                </motion.div>
            </div>
        </div>
    )
}

export default CustomAccordion