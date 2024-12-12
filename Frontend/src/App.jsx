

import {Provider} from "./components/ui/provider"
import Footer from "./Page/mainpage/Footer"
import Navbar from "./Page/mainpage/Navbar"

import Stickyhead from "./Page/mainpage/Stickyhead"
import Categories from "./Page/navpages/Categories"
import Allroute from "./Routes/Allroute"


function App() {
  

  return (
   
      <>
      <Provider>
      <Stickyhead/>
      <Navbar/> 
      <Categories/>
      <Allroute/> 
      <Footer/> 
  
      </Provider>
      </>
   
  )
}

export default App
