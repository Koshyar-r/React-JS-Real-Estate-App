import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiFamilyHouse } from 'react-icons/gi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {

    let [open, setOpen] = useState(false)

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='flex items-center cursor-pointer text-2xl font-semibold'>
                    <span className='mr-1'>
                        <GiFamilyHouse className='text-violet-700' />
                    </span>
                    Hombeez
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden transition ease-in duration-700'>
                    {open ? <AiOutlineClose className='text-red-600 hover:text-red-800 duration-500' /> : <HiOutlineMenuAlt3 className='text-violet-700 hover:text-violet-800 duration-500' />}
                </div>

                <ul className={`text-center md:flex items-center md:pb-0 pb-12 absolute md:static bg-white border-b md:border-b-0 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-[60px]' : 'top-[-500px]'}`}>
                    <li className='md:ml-8 text-sm xs:text-[18px] sm:text-xl md:my-0 my-7'>
                        <Link className='text-violet-700 hover:bg-violet-700 hover:text-white px-4 py-2 rounded font-semibold duration-700' to={'/'}>Home</Link>
                    </li>

                    <li className='md:ml-8 text-sm xs:text-[18px] sm:text-xl md:my-0 my-7'>
                        <Link className='text-violet-700 hover:bg-violet-700 hover:text-white px-4 py-2 rounded font-semibold duration-700' to={'/properties'}>Properties</Link>
                    </li>

                    <li className='md:ml-8 text-sm xs:text-[18px] sm:text-xl md:my-0 my-7'>
                        <Link className='text-violet-700 hover:bg-violet-700 hover:text-white px-4 py-2 rounded font-semibold duration-700' to={'/contact'}>Contact</Link>
                    </li>

                    <Link className='md:ml-8 font-semibold bg-violet-700 hover:bg-violet-800 text-white text-sm sm:text-lg px-4 py-2 rounded duration-500' to={'/login'}>Get Started</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header