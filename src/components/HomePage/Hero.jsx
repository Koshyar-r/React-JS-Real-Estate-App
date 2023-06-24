import React, { useEffect } from 'react'
import Bg from '../../images/House searching.gif'
import ReactTyped from 'react-typed'
import CountUp from 'react-countup'
import { MdLocationCity } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"


const Hero = () => {

    let Numbers = [
        {num: '9876', text: 'Properties'},
        {num: '3456', text: 'Happy Customer'},
        {num: '2500', text: 'Employees'}
    ]

    const control = useAnimation()
    const [ref, inView] = useInView()

    const LeftVariant = {
        visible: { opacity: 1, y: 0,  transition: { duration: 1 } },
        hidden: { opacity: 0, y: 100 },
    }

    const RightVariant = {
        visible: { opacity: 1, y: 0,  transition: { duration: 1 } },
        hidden: { opacity: 0, y: -100 },
    }

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    return (
        <section className='mt-20 lg:mt-28'>
            <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 lg:gap-14 mx-4 lg:mx-10'>
                <motion.div ref={ref} variants={LeftVariant} initial="hidden" animate={control} className='flex flex-col gap-6 lg:gap-8 lg:justify-center'>
                    <div className='flex text-2xl xs:text-3xl sm:text-4xl z-1'>
                        <h1 className='font-bold mb-1'>Rent Your Dream</h1>
                        <ReactTyped className='text-violet-700 font-bold pl-1'
                            strings={["Flat","Palace","Condo","Manor","Villa"]}
                            typeSpeed={120}
                            backSpeed={100}
                            loop
                        />
                    </div>

                    <div>
                        <p className='text-gray-500 font-medium text-xs xs:text-sm sm:text-base leading-tight'>
                            We offer you the finest homes and unmatched services across the globe.
                            Let’s find a home that’s perfect for you.
                        </p>
                    </div>

                    <div className='relative'>
                        <input className='bg-white drop-shadow outline-none border-2 border-solid rounded-md py-3 sm:py-4 md:py-5 pl-12 md:pl-16 w-full lg:py-3 sm:text-lg md:text-xl lg:text-[17px]' type="text" placeholder="Find Properties..." />
                        <div>
                            <button className='absolute top-1.5 sm:top-2 md:top-1.5 right-1.5 bg-violet-700 text-white px-6 py-2 sm:py-3 md:py-4 lg:py-2 md:text-lg rounded duration-500'>Search</button>
                        </div>

                        <div className='absolute top-3 sm:top-4 left-2.5 sm:left-3'>
                            <MdLocationCity className='text-violet-700 text-2xl sm:text-3xl md:text-4xl lg:text-2xl' />
                        </div>
                    </div>

                    <div className='flex items-center justify-between mt-5'>
                        {
                            Numbers.map((item) => {
                                return (
                                    <div key={item.num} className='flex items-center justify-center flex-col'>
                                        <h1 className='flex items-center text-xl xs:text-2xl sm:text-3xl md:text-4xl font-medium'><CountUp start={item.num - 50} end={item.num} duration={10} delay={1} /> <AiOutlinePlus className='text-violet-700' /></h1>
                                        <p className='text-base sm:text-lg'>{item.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>

                <motion.div ref={ref} variants={RightVariant} initial="hidden" animate={control} className='relative mx-auto'>
                    <img className='w-full max-w-[500px] object-cover' src={Bg} alt="hero-img" draggable="false" />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero