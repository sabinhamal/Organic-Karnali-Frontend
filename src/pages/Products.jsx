import React, { Suspense } from 'react'
import Footer from '../components/Footer.jsx'


const Products = () => {
    const ProductList = React.lazy(() => import('../components/ProductList.jsx'));

    return (
        <div className='min-h-screen w-full flex items-start justify-center bg-[#fefefe]'>
            <div className='flex flex-col items-center w-full'>


                {/* Featured Products  */}
                <Suspense fallback={<div className='w-full'>Loading...</div>} >
                <ProductList />
                    
                </Suspense>

               

               <Footer />


            </div >
        </div >
    )
}

export default Products