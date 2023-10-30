import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div className='container my-3'>
            <div className='container w-50'>
                <ul class="list-group" >
                    <Link to={"/admin/add-product"} style={{textDecoration: "none"}}><li class="list-group-item">Add Product</li></Link>
                    <Link to={"/admin/update-product"} style={{textDecoration: "none"}}><li class="list-group-item">Update Products</li></Link>
                    <Link to={"/admin/delete-product"} style={{textDecoration: "none"}}><li class="list-group-item">Delete Product</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Admin