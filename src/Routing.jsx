import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import LoginPage from './Pages/Login'
import SignInPage from './Pages/Register'


function Routing() {
    
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<SignInPage/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default Routing