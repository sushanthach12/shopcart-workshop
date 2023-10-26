import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const [products, setProducts] = useState([])
    const [localStore, setlocalStore] = useState(JSON.parse(localStorage.getItem('cart')))

    const navigate = useNavigate()

    const fetchCart = async() => {
        const pro = JSON.parse(localStorage.getItem('cart'));

        await setProducts(pro)
    }

    const deletePro = async (itemId) => {
        const updatedPro = localStore.filter(item => item?.id !== itemId)
        setlocalStore(updatedPro)
        localStorage.setItem('cart', JSON.stringify(updatedPro))
    }

    const clearCart = async() => {
        alert('Orderd Successfully!!')

        localStorage.setItem('cart', JSON.stringify([]))
        setlocalStore([])

        navigate('/')
    }

    useEffect(() => {
        fetchCart()
    }, [localStore])

    if(products.length === 0 ) {
        return (
            <div className='container my-4'>
                <h6 className='text-center '><em>Cart is Empty</em></h6>
            </div>
        )
    }
    return (
        <div className='container my-4 '>
            <div className='d-flex justify-content-evenly py-3'>
                <h3 className='text-center'>Cart</h3>
                <button type="button" class="btn btn-primary" onClick={clearCart}>Checkout ₹{products.reduce((total,product) => total + product.price , 0)}</button>

            </div>
            <div className='d-flex flex-col justify-content-center flex-wrap align-items-center border-top pt-3'>

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
                                            <button type="button" class="btn btn-danger" onClick={() => deletePro(item?.id)}>del</button>
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

export default Cart