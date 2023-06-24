import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import PropertyDetail from './pages/PropertyDetail'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <div className='overflow-hidden'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/properties' element={<Products />} />
                    <Route path='/property/:id' element={<PropertyDetail />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App