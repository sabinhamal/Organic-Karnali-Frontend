import { Star } from 'lucide-react';
import React from 'react'
import Marquee from "react-fast-marquee";
import user1 from "../assets/Users/1.png"
import user2 from "../assets/Users/2.png"
import user3 from "../assets/Users/3.png"
import user4 from "../assets/Users/4.png"
import user5 from "../assets/Users/5.png"
import user6 from "../assets/Users/6.png"

const Testimonials = () => {
    const testimonials = [
        {
            name: "Elegant Swan",
            rating: 4.5,
            description: "A sophisticated product known for its seamless design and user-friendly features.",
            image: user1
        },
        {
            name: "Bright Horizon",
            rating: 4,
            description: "Popular among professionals for its efficiency and versatility.",
            image: user2
        },
        {
            name: "Bold Venture",
            rating: 4.5,
            description: "A premium choice with robust build quality and impressive performance.",
            image: user3
        },
        {
            name: "Stellar Pulse",
            rating: 5,
            description: "Renowned for its cutting-edge technology and sleek appearance.",
            image: user4
        },
        {
            name: "Nova Spark",
            rating: 4.5,
            description: "An innovative product offering exceptional value for its features.",
            image: user5
        },
        {
            name: "Crimson Tide",
            rating: 4,
            description: "Loved by users for its reliability and aesthetically pleasing design.",
            image: user6
        },
        {
            name: "Silver Wave",
            rating: 3.5,
            description: "A favorite for its smooth operation and modern appeal.",
            image: user1
        },
        {
            name: "Golden Aura",
            rating: 4.5,
            description: "Combines timeless elegance with top-notch functionality.",
            image: user2
        },
        {
            name: "Radiant Star",
            rating: 4,
            description: "An excellent choice with outstanding features and a beautiful finish.",
            image: user3
        },
        {
            name: "Velvet Flame",
            rating: 4.5,
            description: "Praised for its durability and stunning craftsmanship.",
            image: user4
        }
    ];

    return (
        <div className='w-full flex items-center justify-center bg-gradient-to-b from-[#fff8f3] to-[#fefefe]'>
            <div className='flex flex-col items-start justify-center gap-16 md:py-[7rem] xl:w-[75rem] lg:w-[60rem] w-full xl:px-0 px-6'>
                <div className="flex flex-col items-start gap-1">
                    <p className="font-[mainFont] text-[0.9rem]">See for yourself</p>
                    <h1 className="font-[mainFont] md:text-6xl text-4xl font-medium bg-gradient-to-tl from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                        What our customers say
                    </h1>
                </div>

                <Marquee pauseOnHover className='w-full' gradientColor='white' gradient direction='right'>

                    {testimonials.slice(0, 5).map((item, idx) => (
                        <div key={idx} className="flex flex-col md:mx-6 mx-3 items-start justify-center md:justify-between md:gap-6 gap-4 md:p-6 p-3 md:h-48 h-32 rounded-3xl md:w-80 w-52 border">
                            <div className="flex items-start justify-between w-full">
                                <img src={item.image} className="rounded-full w-[30px] md:w-[50px]" alt="" />
                                <div className="flex flex-col items-start gap-2">
                                    <h1 className="font-semibold w-full text-xs md:text-[1rem]">{item.name}</h1>
                                    <div className='flex items-center justify-end w-full gap-2'>
                                        {Array.from({ length: item.rating }).map((_, idx) => (
                                            <Star size={'18px'} key={idx} color='orange' fill='orange' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="md:text-[0.9rem] md:leading-5 text-[0.65rem]">{item.description}</p>
                        </div>
                    ))}
                </Marquee>

                <Marquee pauseOnHover className='w-full' gradientColor='white' gradient direction='left'>

                    {testimonials.slice(5, 10).map((item, idx) => (
                        <div key={idx} className="flex flex-col md:mx-6 mx-3 items-start justify-center md:justify-between md:gap-6 gap-4 md:p-6 p-3 md:h-48 h-32 rounded-3xl md:w-80 w-52 border">
                            <div className="flex items-start justify-between w-full">
                                <img src={item.image} className="rounded-full w-[30px] md:w-[50px]" alt="" />
                                <div className="flex flex-col items-start gap-2">
                                    <h1 className="font-semibold w-full text-xs md:text-[1rem]">{item.name}</h1>
                                    <div className='flex items-center justify-end w-full gap-2'>
                                        {Array.from({ length: item.rating }).map((_, idx) => (
                                            <Star size={'18px'} key={idx} color='orange' fill='orange' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="md:text-[0.9rem] md:leading-5 text-[0.65rem]">{item.description}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Testimonials