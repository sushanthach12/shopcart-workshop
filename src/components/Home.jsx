import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([])

    const fetchProduct = async() => {
        const res = await fetch('https://dummyjson.com/products?limit=20');
        const response = await res.json();
        console.log(response)
        setProducts(response?.products);
    }
    useEffect(() => {
        fetchProduct();
    }, [])

  return (
    <div className='container my-3'>
        <h3 className='text-center'>Products</h3>
        <div className='border-top py-4 d-flex flex-wrap'>
            {
                products.map(item => (
                    <ProductCard key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home