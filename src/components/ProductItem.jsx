import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { saveCart } from '../utils/persistCart';

const ProductItem = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({})

    const fetchProduct = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const response = await res.json();
        console.log(response)
        setProduct(response);
    }

    const addToCart = async() => {
        await saveCart(product);
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className='container d-flex flex-col justify-content-center align-items-center' style={{height: '100vh'}}>

            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product?.thumbnail}  className="img-fluid object-fit-fill rounded-start" alt="..." style={{height: '100%', width: '200px'}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product?.title}</h5>
                            <p className="card-text">{product?.description}</p>
                            <p className="card-text">Price: ₹{product.price}</p>
                        </div>
                        <button className="btn btn-primary bottom-0 m-2" onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem