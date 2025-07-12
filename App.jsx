import react from 'react'
import Cards from './components/Cards';
import "/index.css"
import Nav from './components/Nav';
import Orderdetail from './components/Orderdetail';
import { Outlet } from 'react-router-dom';


function App() {


  return (
    <>
    <Nav/>
    <Outlet/>
   

   
    </>
  )
}

export default App
