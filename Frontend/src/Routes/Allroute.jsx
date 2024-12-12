import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/mainpage/Home'
import Categories from '../Page/navpages/Categories'
import Brands from '../Page/navpages/Brands'
import Luxe from '../Page/navpages/Luxe'
import Signin from '../Page/navpages/Signin'
import Register from '../Page/navpages/Register'
import Cart from '../Page/navpages/Cart'
import Nykaafasion from '../Page/navpages/Nykaafasion'
import Beautyadvice from '../Page/navpages/Beautyadvice'
import ProductDetail from '../Page/subpage/ProductDetail'

const Allroute = () => {
  return (
    <div>    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/brand' element={<Brands/>}/>
    <Route path='/luxe' element={<Luxe/>}/>
    <Route path='/naykafashion' element={<Nykaafasion/>}/>
    <Route path='/beautyadvice' element={<Beautyadvice/>}/>
    <Route path='/products/:id' element={<ProductDetail/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/cart' element={<Cart/>}/>
       </Routes></div>
  )
}

export default Allroute