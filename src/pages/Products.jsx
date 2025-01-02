import React, { Suspense } from 'react'
import 'ldrs/ring'
import { treadmill } from 'ldrs'

const Products = () => {
    const ProductList = React.lazy(() => import('../components/Products/ProductList'));
    treadmill.register() //loader
    return (
        <div className='min-h-screen w-full flex items-start justify-center'>
            <div className='flex flex-col items-center w-full mt-20'>
                {/* Featured Products  */}
                <Suspense fallback={
                    <div className="flex items-center justify-center h-screen w-full">
                        <l-treadmill
                            size="70"
                            speed="1.25"
                            color="black"
                        ></l-treadmill>
                    </div>
                }>
                    <ProductList />
                </Suspense>
            </div >
        </div >
    )
}

export default Products