import React, { useEffect } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { BsFillChatDotsFill, BsPersonVideo } from 'react-icons/bs'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"

const Contact = () => {

    let Items = [
        {title: 'Call', num: '021 126 9190', button: 'Call Now'},
        {title: 'Chat', num: '021 126 9190', button: 'Chat Now'},
        {title: 'Video Call', num: '021 126 9190', button: 'Video Call Now'},
    ]

    const Icons = [
        FiPhoneCall,
        BsFillChatDotsFill,
        BsPersonVideo,
    ]

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
        <motion.section ref={ref} variants={Variant} initial="hidden" animate={control} className='mt-24'>
            <div className='text-center'>
                <h1 className='font-semibold mb-6 text-3xl sm:text-4xl xl:text-5xl'>Get In <span className='text-violet-700'>Touch</span></h1>
                <p className='text-gray-500 font-medium text-[2.5vw] sm:text-base xl:text-lg mx-2 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit Ea ducimus. <br />velit exercitationem porro libero ab eligendi amet facilis esse qui.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-y-8 justify-center items-center m-6'>
                {/* LEFT SIDE */}
                <div className='w-full flex flex-col gap-y-8'>
                    {
                        Items.map((item, idx) => {

                            const Icon = Icons[idx]

                            return (
                                <div key={item.title} className='flex flex-col border-solid border-[1px] border-violet-700 px-5 py-5 w-full lg:w-[70%] rounded transition-all duration-300'>
                                    <div className='flex items-center mb-4'>
                                        <Icon className='text-2xl xl:text-3xl text-white bg-violet-700 w-[55px] h-[55px] p-3 rounded transition-all' />
                                        <div className='flex flex-col pl-4'>
                                            <h3 className='font-semibold text-lg sm:text-xl xl:text-2xl'>{item.title}</h3>
                                            <p className='text-sm sm:text-base xl:text-lg text-gray-500'>{item.num}</p>
                                        </div>
                                    </div>

                                    <button className='w-full bg-violet-700 hover:bg-violet-900 text-white sm:text-lg xl:text-xl py-2 px-2 rounded transition duration-500'>{item.button}</button>
                                </div>
                            )
                        })
                    }
                </div>

                {/* RIGHT SIDE */}
                <div className='w-full sm:w-[50%] md:w-[70%]'>
                    <form className='bg-white drop-shadow-2xl flex flex-col gap-y-6 p-7 rounded'>
                        <h2 className='text-center text-3xl sm:text-4xl xl:text-5xl mb-6 font-semibold'>Say <span className='text-violet-700'>Hello</span></h2>

                        <input className='bg-white sm:text-lg drop-shadow outline-none border-2 border-solid focus:border-violet-600 rounded-md py-3 pl-3' type="text" placeholder="Full name" />

                        <input className='bg-white sm:text-lg drop-shadow outline-none border-2 border-solid focus:border-violet-600 rounded-md py-3 pl-3' type="email" placeholder="Email" />

                        <textarea className='bg-white sm:text-lg drop-shadow outline-none border-2 border-solid focus:border-violet-600 rounded-md py-3 pl-3 h-[150px] resize-none overflow-auto' name="" id="" placeholder="Your Message" />

                        <button className='w-full bg-violet-700 hover:bg-violet-900 text-white px-6 py-3 text-lg sm:text-xl xl:text-2xl font-semibold rounded-md transition duration-300'>Send</button>
                    </form>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact