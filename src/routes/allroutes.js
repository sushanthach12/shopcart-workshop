import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Cart from '../components/Cart'
import ProductItem from '../components/ProductItem'
import Admin from '../components/Admin'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import UpdateForm from '../components/UpdateForm'
import DeleteProduct from '../components/DeleteProduct'

const Allroutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/cart' element={<Cart />} />
      <Route exact path='/admin' element={<Admin />} />
      <Route exact path='/admin/add-product' element={<ProductForm />} />
      <Route exact path='/admin/update-product' element={<ProductList />} />
      <Route exact path='/admin/delete-product' element={<DeleteProduct />} />
      <Route exact path='/admin/update-product-form/:id' element={<UpdateForm />} />

      <Route exact path={'/product/:id'} element={<ProductItem />} />
    </Routes>
  )
}

export default Allroutes