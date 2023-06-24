import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { BsBuildings, BsChatLeftDots, BsClock, BsGlobe } from 'react-icons/bs'

const Services = () => {
    
    const services = [
        {title: "Anywhere", text: "All kinds of properties all around the globe"},
        {title: "Anytime", text: "New properties every second, check anytime"},
        {title: "Your call", text: "Choose how your house should look like"},
        {title: "24/7", text: "Always on the line to support and guide you"},
    ]

    const Icons = [
        BsGlobe,
        BsClock,
        BsBuildings,
        BsChatLeftDots,
    ]

    return (
        <section>
            <div className='container mt-28 mb-24 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold mb-2 sm:text-4xl'>Services & <span className='text-violet-700'>Features</span></h1>
                    <p className='text-gray-600 text-sm font-medium sm:text-base'>A quick SneakPeek of what we're offering</p>
                </div>

                <div className='mt-12'>
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 justify-center items-center'>
                            {
                                services.map((item, idx) => {

                                    const Icon = Icons[idx]

                                    return (
                                        <div className='flex flex-col gap-y-4 p-8 items-start justify-center cursor-pointer max-w-[450px] w-full rounded-lg rounded-tr-[70px] bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-200'>
                                            <Icon className='text-3xl text-violet-700' />
                                            <h2 className='text-2xl font-bold'>{item.title}</h2>
                                            <p className='text-sm leading-7 lg:text-base'>{item.text}</p>
                                            <button className='flex items-center gap-x-1 text-sm text-violet-700 font-semibold'>Read More <HiArrowRight /></button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Services