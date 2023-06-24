import React from 'react'
import Item from './Item'
import { PROPERTIES, HELP, COMPANY, SUPPORT } from './Items'

const Items = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:px-8 py-16'>
            <Item Links={PROPERTIES} Title="PROPERTIES" />
            <Item Links={HELP} Title="HELP" />
            <Item Links={COMPANY} Title="COMPANY" />
            <Item Links={SUPPORT} Title="SUPPORT" />
        </div>
    )
}

export default Items