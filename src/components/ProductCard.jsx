import React from 'react'
import { Link } from 'react-router-dom'
import { saveCart } from '../utils/persistCart'

const ProductCard = ({ item }) => {
    
    const addToCart = async() => {
        console.log(item)
        await saveCart(item);
    }

    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <Link to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
                <div className='text-black'>
                    <img src={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"} className="card-img-top object-fit-contain rounded" alt="..." height={150} />
                    <div className="card-body">
                        <h5 className="card-title">{item?.title}</h5>
                        <p className="card-text">{item?.description}</p>
                    </div>
                </div>
            </Link>
            <button className="btn btn-primary bottom-0" onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default ProductCard