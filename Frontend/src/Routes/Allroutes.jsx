import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Categories from '../Page/navpages/Categories'
import Brands from '../Page/navpages/Brands'
import Luxe from '../Page/navpages/Luxe'
import Nykaafasion from '../Page/navpages/Nykaafasion'
import Beautyadvice from '../Page/navpages/Beautyadvice'
import Signin from '../Page/navpages/Signin'
import Cart from '../Page/navpages/Cart'
import Home from '../Page/mainpage/Home'

const Allroutes = () => {
  return (
   <div>
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/categories' element={<Categories/>}/>
<Route path='/brand' element={<Brands/>}/>
<Route path='/luxe' element={<Luxe/>}/>
<Route path='/naykafashion' element={<Nykaafasion/>}/>
<Route path='/beautyadvice' element={<Beautyadvice/>}/>

<Route path='/signin' element={<Signin/>}/>
<Route path='/cart' element={<Cart/>}/>
   </Routes>
   </div>
  )
}

export default Allroutes
