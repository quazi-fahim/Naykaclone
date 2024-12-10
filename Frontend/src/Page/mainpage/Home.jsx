import React from 'react'
import Navbar from './Navbar'
import Stickyhead from './Stickyhead'
import Register from '../navpages/Register'




const Home = () => {
  return (
    <div>
     <Stickyhead/>
      <Navbar/>
      <br/>
      <Register/>
   
    </div>
  )
}

export default Home