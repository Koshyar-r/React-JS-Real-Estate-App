import React from 'react'
import Hero from '../components/HomePage/Hero'
import Services from '../components/HomePage/Services'
import Products from '../components/HomePage/Products'
import Value from '../components/HomePage/Value/Value'

const Home = () => {

    return (
        <>
            <Hero />
            <Products />
            <Services />
            <Value />
        </>
    )
}

export default Home