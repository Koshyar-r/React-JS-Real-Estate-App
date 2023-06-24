import React, { useState, useEffect, createContext } from 'react'
import { HousesData } from './Data'

export const PropertyContext = createContext()

const PropertyContextProvider = ({children}) => {

    const [houses, setHouses] = useState(HousesData)
    const [country, setCountry] = useState('Location (any)')
    const [countries, setCountries] = useState([])
    const [property, setProperty] = useState('Property Type (any)')
    const [properties, setProperties] = useState([])
    const [price, setPrice] = useState('Price range (any)')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const allCountries = houses.map(house => {
            return house.country
        })
        const uniqueCountries = ['Location (any)', ... new Set(allCountries)]

        setCountries(uniqueCountries)
    }, [])

    useEffect(() => {
        const allProperties = houses.map(house => {
            return house.type
        })
        const uniqueProperties = ['Property (any)', ... new Set(allProperties)]

        setProperties(uniqueProperties)
    }, [])

    const handleClick = () => {

        setLoading(true)

        const isDefault = (str) => {
            return str.split(' ').includes('(any)')
        }

        const minPrice = parseInt(price.split(' ')[0])

        const maxPrice = parseInt(price.split(' ')[2])

        const newHouses = HousesData.filter((house) => {
            const housePrice = parseInt(house.price)

            // If all values are selected
            if(house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
                return house
            }

            // If the values are default
            if(isDefault(country) && isDefault(property) && isDefault(price)) {
                return house
            }

            // If country is not default
            if(!isDefault(country) && isDefault(property) && isDefault(price)) {
                return house.country === country
            }

            // If property is not default
            if(!isDefault(property) && isDefault(property) && isDefault(price)) {
                return house.type === property
            }

            // If price is not default
            if(!isDefault(price) && isDefault(country) && isDefault(property)) {
                if(housePrice >= minPrice && housePrice <= maxPrice) {
                    return house
                }
            }

            // If country and property is not default
            if(!isDefault(country) && !isDefault(property) && isDefault(price)) {
                return house.country === country && house.type === property
            }

            // If country and price is not default
            if(!isDefault(country) && isDefault(property) && !isDefault(price)) {
                if(housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.country === country
                }
            }

            // If property and price is not default
            if(isDefault(country) && !isDefault(property) && !isDefault(price)) {
                if(housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property
                }
            }
        })

        setTimeout(() => {
            return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses), setLoading(false)
        }, 1000)
    }

    return (
        <PropertyContext.Provider value={{country, setCountry, countries, property, setProperty, properties, price, setPrice, houses, loading, handleClick}}>
            {children}
        </PropertyContext.Provider>
    )
}

export default PropertyContextProvider