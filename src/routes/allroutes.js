import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Cart from '../components/Cart'
import ProductItem from '../components/ProductItem'
import Admin from '../components/Admin'

const Allroutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/cart' element={<Cart />}/>
        <Route exact path='/admin' element={<Admin />}/>

        <Route exact path={'/product/:id'} element={<ProductItem />}/>
    </Routes>
  )
}

export default Allroutes