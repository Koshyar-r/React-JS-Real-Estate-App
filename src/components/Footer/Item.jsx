import React from 'react'

const Item = ({Links, Title}) => {
    return (
        <ul>
            <h1 className='mb-2 font-semibold text-lg xs:text-[19px] lg:text-[21px]'>{Title}</h1>
            {
                Links.map((Link) => {
                    return (
                        <li key={Link.name}>
                            <a className='text-gray-100 hover:text-gray-300 duration-300 text-sm xs:text-base lg:text-lg leading-6 cursor-pointer'>{Link.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Item