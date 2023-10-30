import React, { useState } from 'react'

const ProductForm = () => {
    const [productForm, setProductForm] = useState({})

    const addProduct = (e) => {
        e.preventDefault()
        console.log("Add")
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
                        <input type="text" className="form-control" id="inputAddress"   name='desc' value={productForm?.desc} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Price</label>
                        <input type="number" className="form-control" id="inputAddress2"  name='price' value={productForm?.price} onChange={handleChange}/>
                    </div>
                    

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={addProduct}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm