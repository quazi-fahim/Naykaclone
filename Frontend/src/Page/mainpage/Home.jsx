import React from 'react'
import Navbar from './Navbar'
import Stickyhead from './Stickyhead'
import Firstslider from '../pageComponent/firstslider'

const Home = () => {
  return (
    <div>
     <Stickyhead/>
      <Navbar/>
      <Firstslider/>
    </div>
  )
}

export default Home