import React from "react";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ name, image, price }) => {
    return (
        <div className="md:w-[23rem] w-full md:h-[28rem] h-[24rem] flex flex-col items-start gap-4">
            <img src={image} className="w-full rounded-xl h-[75%] object-cover object-bottom" alt={name} />
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="w-full flex items-start justify-between">
                    <h3 className="text-[1rem] md:text-xl font-medium">{name}</h3>
                    <p className="text-[1rem] md:text-xl">Rs {price}</p>
                </div>
                <button className="w-full bg-transparent border border-black text-black hover:border-black hover:bg-black hover:text-white transition-all duration-500 md:py-3 py-2.5 flex items-center justify-center gap-3">
                    <ShoppingCart size={"20px"} />
                    <p className="text-xs md:text-[0.9rem]">Add to cart</p>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;