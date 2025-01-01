import React, { useState, useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

const ImageCarousel = () => {
    const { products } = useProductContext();

    const [currentIndex, setCurrentIndex] = useState(0);

    const getItemsPerPage = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 640) return 2;
        }
        return 1;
    };

    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - itemsPerPage : prevIndex - itemsPerPage));
    };

    return (
        <div className="relative w-full mx-auto mt-20">
            <h3 className='md:text-3xl text-xl md:ml-12 text-zinc-500'>You may also like</h3>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 text-black rounded-full shadow-md hover:bg-gray-300 z-10"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 text-black rounded-full shadow-md hover:bg-gray-300 z-10"
            >
                <ChevronRight />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden md:px-4 w-full">
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                >
                    {products.map((product, index) => (
                        <Link to={`/product/${encodeURIComponent(product.name)}`}
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/3 p-4 flex-shrink-0"
                        >
                            <div className="bg-white rounded-lg p-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-lg object-cover w-full h-48 mb-4"
                                />
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-600">Rs. {product.price}</p>
                                <div className="text-yellow-500">{"★".repeat(product.rating)}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;

