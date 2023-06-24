import React, { useContext } from 'react'
import { PropertyContext } from './Search/PropertyContext'
import Property from './Property'
import { Link } from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'

const HouseList = () => {

    const {houses, loading} = useContext(PropertyContext)

    if(loading) {
        return (<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[90px]' />)
    }

    if(houses.length < 1) {
        return <div className='text-center text-3xl font-semibold text-red-500 mt-[100px]'>Sorry, we could not find any properties for you.<br/>Try a different search.</div>
    }

    return (
        <section className='mb-2 p-10'> 
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                    {houses.map((house, index) => {
                        return (
                            <Link to={`/property/${house.id}`} key={index}>
                                <Property property={house} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HouseList