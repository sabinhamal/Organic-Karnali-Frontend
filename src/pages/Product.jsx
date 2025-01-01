import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'
import { IconStar, IconStarHalf } from '@tabler/icons-react';
import { ShoppingCart } from 'lucide-react'
import ImageCarousel from '../components/Product/ImageCarousel';

const Product = () => {
    const location = useLocation();
    const { id } = useParams();
    const productName = decodeURIComponent(id);
    const { products } = useProductContext();
    const product = products.find((p) => p.name === productName);

    if (!product) {
        return (
            <div className='w-full md:mt-40 mt-20 flex items-center justify-center'>
                <p className='xl:w-[75rem] lg:w-[60rem] w-full xl:px-0 px-6 md:text-2xl text-xs'>Product "{productName}" not found!</p>
            </div>
        )
    }

    //Displaying the review stars
    const fullStars = Math.floor(product.reviews);
    const hasHalfStars = product.reviews % 1 !== 0; //checks if there is a half star
    const totalStars = 5;

    const [productCount, setProductCount] = useState(1)

    //reset scroll to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className='w-full flex items-center justify-center md:mt-40 mt-24'>
            <div className='xl:w-[75rem] lg:w-[60rem] md:pb-[5rem] pb-12 w-full xl:px-0 px-6 flex flex-col items-start gap-6'>
                <h3 className='text-[0.9rem] tracking-wide text-zinc-500 uppercase'>Home &nbsp;&gt;&nbsp; Products &nbsp;&gt;&nbsp;
                    <span className='text-black'>{product.name}</span>
                </h3>

                <div className='w-full flex md:flex-row flex-col items-start gap-6'>

                    {/* Product Images PC */}
                    <div className='md:flex hidden flex-col items-start gap-6'>
                        <img src={product.image} loading='lazy' className='w-16 h-16 brightness-[85%] scale-x-[-1] bg-black'></img>
                        <img src={product.image} loading='lazy' className='w-16 h-16 brightness-[85%]'></img>
                        <img src={product.image} loading='lazy' className='w-16 h-16 brightness-[85%]'></img>
                        <img src={product.image} loading='lazy' className='w-16 h-16 scale-x-[-1] brightness-[85%]'></img>
                    </div>

                    <div className='lg:w-[calc(100%-8rem)] w-full flex lg:flex-row flex-col items-start gap-6 xl:h-[33rem] h-auto'>
                        {/* Main Image  */}
                        <img src={product.image} className='xl:w-[30rem] lg:w-[25rem] w-full xl:h-full h-[25rem] object-cover' loading='lazy' alt="" />

                        {/* Product Images Mobile */}
                        <div className='md:hidden flex flex-wrap items-start gap-6'>
                            <img src={product.image} loading='lazy' className='w-16 h-16 brightness-[85%] scale-x-[-1] bg-black'></img>
                            <img src={product.image} loading='lazy' className='w-16 h-16 brightness-[85%]'></img>
                            <img src={product.image} loading='lazy' className='w-16 h-16 brightness-[85%]'></img>
                            <img src={product.image} loading='lazy' className='w-16 h-16 scale-x-[-1] brightness-[85%]'></img>
                        </div>

                        {/* Product Description*/}
                        <div className='flex flex-col items-start justify-between gap-4 h-full'>
                            <h1 className='md:text-6xl text-4xl'>{product.name}</h1>

                            {/* Reviews */}
                            <div className='flex items-center gap-3 -mt-3'>
                                <div className='flex items-center gap-3'>
                                    {/* Render Full Stars */}
                                    {Array(fullStars).fill().map((_, idx) => (
                                        <IconStar key={idx} className='fill-yellow-500 text-yellow-500 md:size-[18px] size-[15px]' />
                                    ))}

                                    {/* Render Half Stars */}
                                    {hasHalfStars && <IconStarHalf key={"half"} className='text-yellow-500 fill-yellow-500 md:size-[18px] size-[15px]' />}

                                    {/* Empty Stars */}
                                    {Array(totalStars - fullStars - (hasHalfStars ? 1 : 0)).fill().map((_, idx) => (
                                        <IconStar className='md:size-[18px] size-[15px] text-yellow-500' key={fullStars + idx} />
                                    ))}
                                </div>
                                <h4 className='md:text-[1rem] text-[0.85rem] text-zinc-600'>{product.noOfReviews} reviews</h4>
                            </div>

                            {/* Price */}
                            <h3 className='md:text-4xl text-2xl'>Rs. {product.price}</h3>

                            {/* In stock */}
                            <h3 className='md:text-[1rem] text-[0.85rem] font-medium'>Availability: <span className='text-zinc-600 font-normal'>&nbsp;{product.inStock > 0 ? 'In Stock' : 'Out of stock'}</span></h3>

                            {/* Dimensions */}
                            <h3 className='md:text-[1rem] text-[0.85rem] font-medium'>Dimensions: <span className='text-zinc-600 font-normal'>&nbsp;{product.dimensions}</span></h3>

                            {/* Weight */}
                            <h3 className='md:text-[1rem] text-[0.85rem] font-medium'>Weight: <span className='text-zinc-600 font-normal'>&nbsp;{product.weight}</span></h3>

                            <div className='flex md:flex-row flex-col items-start gap-6 md:mt-4 mt-2'>
                                {/* Product Count */}
                                <div className='flex items-center rounded-l-lg rounded-r-lg gap-4'>
                                    <button onClick={() => setProductCount(productCount <= 1 ? 1 : productCount - 1)} className={`bg-zinc-300 ${productCount === 1 ? "cursor-not-allowed" : ""} rounded-l-sm h-10 w-10`}>-</button>
                                    <h3 className='text-xl'>{productCount}</h3>
                                    <button onClick={() => productCount === product.inStock ? product.inStock : setProductCount(productCount + 1)} className={`bg-zinc-300 ${productCount === product.inStock ? "cursor-not-allowed" : ""} rounded-r-sm h-10 w-10`}>+</button>
                                </div>
                                {/* Add to cart */}
                                <button className="w-full bg-zinc-800 text-white border border-black hover:border-black hover:bg-white hover:text-black transition-all duration-500 px-5 py-2.5 rounded-lg flex items-center justify-center gap-3">
                                    <ShoppingCart className='md:size-[20px] size-[15px]' />
                                    <p className="text-xs md:text-[0.85rem]">Add to cart</p>
                                </button>
                            </div>

                            {/* Description */}
                            <div className='flex flex-col items-start gap-2 md:mt-4 mt-2'>
                                <h1 className='text-2xl'>Description</h1>
                                <p className='text-xs md:text-[0.85rem] leading-5'>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ImageCarousel />
            </div>
        </div>
    )
}

export default Product