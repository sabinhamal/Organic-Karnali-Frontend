import React, { createContext, useContext, useState } from 'react'
import himalayanSilajit from "../assets/himalayan silajit.png"
import wildHoney from "../assets/wild honey.png"
import appleSlice from "../assets/apple slice.png"
import jimbu from "../assets/jimbu.png"
import nettlePowder from "../assets/nettle powder.png"

//create context
const ProductContext = createContext(undefined);

//create provider
export const ProductProvider = ({ children }) => {

    // products 
    const [products, setProducts] = useState(
        [
            {
                name: 'Himalayan Silajit',
                image: himalayanSilajit,
                price: 1500,
                noOfReviews: 5,
                reviews: 4.5,
                inStock: 12,
                dimensions: '5 x 5 x 5 cm',
                weight: '100g',
                description: 'Pure Himalayan Silajit is a powerful, natural resin that has been used for centuries in Ayurvedic medicine for its rejuvenating and energy-boosting properties. Rich in essential minerals and antioxidants, this product is perfect for anyone looking to improve vitality, stamina, and overall well-being.'
            },
            {
                name: 'Apple Slice',
                image: appleSlice,
                price: 1200,
                noOfReviews: 7,
                reviews: 4.0,
                inStock: 20,
                dimensions: '10 x 10 x 2 cm',
                weight: '200g',
                description: 'Crispy and delicious dried apple slices that offer a healthy alternative to snacks. These apple slices retain all the natural flavors of fresh apples and are perfect for enjoying on the go, or adding to oatmeal, salads, and baked goods for an extra burst of flavor and nutrients.'
            },
            {
                name: 'Wild Honey',
                image: wildHoney,
                price: 500,
                noOfReviews: 10,
                reviews: 4.5,
                inStock: 30,
                dimensions: '15 x 10 x 10 cm',
                weight: '500g',
                description: 'Raw and organic wild honey, harvested directly from the wild, without any processing or additives. This honey is rich in flavor and antioxidants, making it a perfect natural sweetener for tea, baking, or simply enjoying by the spoonful. It offers numerous health benefits including soothing properties for the throat and a natural source of energy.'
            },
            {
                name: 'Jimbu',
                image: jimbu,
                price: 2000,
                noOfReviews: 5,
                reviews: 3.5,
                inStock: 8,
                dimensions: '7 x 5 x 2 cm',
                weight: '50g',
                description: 'Dried Jimbu, a rare herb from the Himalayan region, is known for its strong aromatic flavor, making it a perfect addition to soups, stews, and curries. This versatile herb not only enhances the taste of your dishes but also provides a number of health benefits, including improving digestion and boosting immunity.'
            },
            {
                name: 'Nettle Powder',
                image: nettlePowder,
                price: 3000,
                noOfReviews: 8,
                reviews: 4.5,
                inStock: 5,
                dimensions: '12 x 8 x 3 cm',
                weight: '250g',
                description: 'Nettle powder is a superfood packed with vitamins, minerals, and antioxidants. Made from finely ground dried nettle leaves, it is known to support joint health, reduce inflammation, and improve skin health. It can be easily added to smoothies, teas, or other health supplements to provide an extra nutritional boost.'
            }
        ]

    )

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}


//custom hook for using the context
export const useProductContext = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error("Internal Error")
    }
    return context;
}