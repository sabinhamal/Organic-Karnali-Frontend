import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Accordion = () => {
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

    const handleToggle = (index) => {
        // Toggle open/close on the clicked section
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {accordionData.map((item, idx) => (
                <div key={idx} className="accordion-item">
                    <div
                        className="accordion-header text-white"
                        onClick={() => handleToggle(idx)}
                    >
                        <span className="accordion-title">{item.title}</span>
                        <div className="accordion-icon">
                            <ChevronDown
                                style={{
                                    transform: activeIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className={`content flex flex-col items-start gap-4 text-[#c9c2c0] pl-2 pt-2 ${activeIndex === idx ? 'open' : ''}`}
                    >
                        {item.subProducts.map((subProduct, subIdx) => (
                            <p key={subIdx}>{subProduct}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
