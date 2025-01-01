import React, { useState } from "react";
import { fadeInUp } from "../../utils/animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const CustomAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Track the active section

    const faqs = [
        {
            question: "What is Organic Karnali?",
            answer: "Organic Karnali is a trusted seller of natural and organic products from the Karnali region, offering items like honey, gels, lotions, and more."
        },
        {
            question: "Are your products 100% organic?",
            answer: "Yes, all our products are made from natural ingredients sourced directly from the Karnali region, ensuring they are 100% organic and chemical-free."
        },
        {
            question: "Where do you source your products from?",
            answer: "Our products are sourced directly from local farmers and artisans in the Karnali region, ensuring authenticity and quality."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including online payments, mobile wallets, and cash on delivery."
        },
        {
            question: "How can I be sure of the product quality?",
            answer: "Our products undergo rigorous quality checks, and we take pride in sourcing directly from trusted farmers and producers in the Karnali region."
        },
        {
            question: "Do you offer customized gift packaging?",
            answer: "Yes, we offer beautifully customized gift packaging options for all occasions. Please contact us for details."
        },
        {
            question: "Can I return a product if I’m not satisfied?",
            answer: "Yes, we have a return and refund policy. Please review our return policy for eligibility and instructions."
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery usually takes 3-5 business days, depending on your location. We’ll keep you updated throughout the process."
        },
    ];

    // Toggle open/close on the clicked section
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='w-full flex items-center justify-center'>
            <div className="flex items-start justify-between gap-12 py-[5rem] xl:w-[75rem] lg:w-[60rem] w-full xl:px-0 px-6">
                <div className="flex lg:flex-row flex-col items-start justify-between lg:gap-12 gap-16 w-full">
                    <motion.div
                        initial={fadeInUp.initial}
                        whileInView={fadeInUp.whileInView}
                        viewport={fadeInUp.viewport}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                        }} className="flex flex-col items-start gap-6">
                        <h1 className="md:text-6xl text-3xl font-semibold text-zinc-700">Any questions? <br />We got you.</h1>
                        <p className="md:mt-5 md:text-[0.85rem] text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt autem repudiandae sunt minima iusto labore enim at culpa aspernatur quod.</p>
                        <Link to={'/contact'} className="flex items-center gap-2 md:text-[1rem] text-[0.85rem] text-purple-800">Ask Us Here <ArrowRight size={'18px'} /></Link>
                    </motion.div>

                    {/* Accordion  */}
                    <div className="accordion">
                        {faqs.map((item, idx) => (
                            <div key={idx} className="accordion-item">
                                <div
                                    className="accordion-header py-[3px]"
                                    onClick={() => handleToggle(idx)}
                                >
                                    <span className="accordion-title md:text-[1.2rem] text-[0.9rem]">{item.question}</span>
                                    <div className="accordion-icon">
                                        <ChevronDown
                                            className="md:size-[22px] size-[18px]"
                                            style={{
                                                transform: activeIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`content border-b-[1px] border-b-zinc-200 flex flex-col items-start gap-4 text-black pt-2 ${activeIndex === idx ? 'open' : ''}`}
                                >
                                    <span className="md:text-[0.9rem] my-2 tracking-wide text-xs">{item.answer}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CustomAccordion