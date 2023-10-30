import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productContext from '../context/product/context';

const ProductList = () => {
	const navigate = useNavigate();

	const productContxt = useContext(productContext);
	const { products, fetchProducts } = productContxt


	const updatePro = async (id) => {
		navigate(`/admin/update-product-form/${id}`)
	}

	useEffect(() => {
		fetchProducts()
	}, [products])

	return (
		<div className='container'>
			<h3 className='text-center'>Products</h3>
			<div className='container my-3 w-75'>
				{
					products.map(item => (
						<div class="card mb-3 w-75" key={item?._id}>
							<div class="card-body">
								<div class="d-flex justify-content-between">
									<div class="d-flex flex-row align-items-center">
										<div>
											<img
												src={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
												class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
										</div>
										<div class="ms-3">
											<h5>{item?.title}</h5>
											<p class="small mb-0">{item?.brand}</p>
										</div>
									</div>
									<div class="d-flex flex-row align-items-center">
										<div style={{ width: '85px' }}>
											<h5 class="mb-0">₹{item?.price}</h5>
										</div>
										<div>
											<button type="button" class="btn btn-primary" onClick={() => updatePro(item?._id)}>update</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					))
				}

		
			</div>
		</div>

	)
}

export default ProductList