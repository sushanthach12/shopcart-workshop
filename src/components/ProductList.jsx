import React, { useState } from 'react'

const ProductList = () => {
	const [products, setProducts] = useState([])

	const updatePro = async (id) => {
		console.log("Update")
	}

	return (
		<div className='container'>
			<h3 className='text-center'>Products</h3>
			<div className='container my-3 w-75'>
				{
					products.map(item => (
						<div class="card mb-3 w-75" key={item?.id}>
							<div class="card-body">
								<div class="d-flex justify-content-between">
									<div class="d-flex flex-row align-items-center">
										<div>
											<img
												src={item?.thumbnail}
												class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
										</div>
										<div class="ms-3">
											<h5>{item?.title}</h5>
											<p class="small mb-0">{item?.brand}</p>
										</div>
									</div>
									<div class="d-flex flex-row align-items-center">
										<div style={{ width: '50px' }}>
											<button type="button" class="btn btn-danger" onClick={() => updatePro(item?.id)}>del</button>
										</div>
										<div style={{ width: '85px' }}>
											<h5 class="mb-0">₹{item?.price}</h5>
										</div>
										<a href="#!" style={{ color: '#cecece' }}><i class="fas fa-trash-alt"></i></a>
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