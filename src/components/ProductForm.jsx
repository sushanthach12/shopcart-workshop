import React, { useContext, useState } from 'react'
import productContext from '../context/product/context';

const ProductForm = () => {
    const productContxt = useContext(productContext)
    const { addProduct } = productContxt;

    const [productForm, setProductForm] = useState({})

    const addPro = async (e) => {
        e.preventDefault()
        await addProduct(productForm)
        alert('Added')
    }

    const handleChange = (e) => {
        setProductForm({...productForm, [e.target.name]: e.target.value})
    }

    return (
        <div className='container'>
            <div className='container my-5 w-50'>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Title</label>
                        <input type="text" name='title' value={productForm?.title} className="form-control" id="inputEmail4" onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Brand</label>
                        <input type="text" className="form-control" id="inputPassword4"  name='brand' value={productForm?.brand} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Description</label>
                        <input type="text" className="form-control" id="inputAddress"   name='description' value={productForm?.desc} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Price</label>
                        <input type="number" className="form-control" id="inputAddress2"  name='price' value={productForm?.price} onChange={handleChange}/>
                    </div>
                    

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={addPro}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm