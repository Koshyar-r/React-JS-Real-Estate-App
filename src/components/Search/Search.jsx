import React, { useContext } from 'react'
import CountryDropDown from './CountryDropDown'
import PropertyDropDown from './PropertyDropDown'
import PriceDropDown from './PriceDropDown'
import { RiSearch2Line } from 'react-icons/ri'
import { PropertyContext } from './PropertyContext'

const Search = () => {

    const { handleClick } = useContext(PropertyContext)

    return (
        <div className='mt-[100px] relative px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 lg:shadow-lg bg-white rounded-lg'>
            <CountryDropDown />
            <PropertyDropDown />
            <PriceDropDown />
            <button onClick={handleClick} className='text-white bg-violet-700 w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-2xl'>
                <RiSearch2Line />
            </button>
        </div>
    )
}

export default Search