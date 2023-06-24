import React, { useEffect } from 'react'
import ItemsContainer from './ItemsContainer'
import SocialIcons from './SocialIcons'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"

const Footer = () => {

    const control = useAnimation()
    const [ref, inView] = useInView()

    const Variant = {
        visible: { opacity: 1, y: 0,  transition: { duration: 2 } },
        hidden: { opacity: 0, y: 100 },
    }

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    return (
        <motion.footer ref={ref} variants={Variant} initial="hidden" animate={control} className='bg-violet-700 absolute w-full text-white mt-24'>
            <div className='md:flex md:justify-between md:items-center px-4 sm:px-12 bg-indigo-950 py-7'>
                <h1 className='text-3xl lg:text-4xl mb-6 md:mb-0 lg:leading-normal font-semibold md:w-2/5'>
                    <span className='text-violet-700 drop-shadow-lg'>Subscribe</span> to our newsletter
                </h1>

                <div>
                    <input type="text" placeholder="Enter your email" className='text-gray-800 w-full sm:w-72 mr-1 sm:mr-5 mb-4 lg:mb-0 py-2.5 rounded px-2 outline-none border-2 border-solid focus:border-violet-600' />
                    <button className='bg-violet-700 hover:bg-violet-900 duration-300 px-5 py-2.5 rounded-md text-white w-full md:w-auto'>
                        Subscribe
                    </button>
                </div>
            </div>
            <ItemsContainer />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-white text-sm pb-8'>
                <span>© 2023 Hombeez. All rights reserved.</span>
                <span>Terms - Privacy Policy</span>
                <SocialIcons />
            </div>
        </motion.footer>
    )
}

export default Footer