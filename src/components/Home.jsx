import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import productContext from '../context/product/context'

const Home = () => {
    const productContxt = useContext(productContext)
    const { products, fetchProducts } = productContxt;

    // const fetchProduct = async () => {
    //     const res = await fetch('https://dummyjson.com/products?limit=20');
    //     const response = await res.json();
    //     console.log(response)
    //     setProducts(response?.products);
    // }

    useEffect(() => {
        fetchProducts();
    }, [products])

    return (
        <div className='container my-3'>
            <h3 className='text-center'>Products</h3>
            <div className='border-top py-4 d-flex flex-wrap'>
                {
                    products.map(item => (
                        <ProductCard key={item._id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home