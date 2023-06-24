import React, { useEffect } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import Img from '../../../images/value.jpg'
import data from './Data'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"

const Value = () => {

    const control = useAnimation()
    const [ref, inView] = useInView()

    const TopVariant = {
        visible: { opacity: 1, x: 0,  transition: { duration: 2 } },
        hidden: { opacity: 0, x: -100 },
    }

    const BottomVariant = {
        visible: { opacity: 1, x: 0,  transition: { duration: 2 } },
        hidden: { opacity: 0, x: 100 },
    }
    
    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    return (
        <section className='flex items-center justify-center'>
            <div className='relative mx-5 grid lg:grid-cols-2 lg:gap-x-8 items-center w-full'>
                <motion.div ref={ref} variants={TopVariant} initial="hidden" animate={control} className='self-center justify-self-center'>
                    <div className='max-w-[550px]'>
                        <img className='rounded-tr-full rounded-tl-full' src={Img} alt="" />
                    </div>
                </motion.div>

                <motion.div  ref={ref} variants={BottomVariant} initial="hidden" animate={control}className='mt-6 flex flex-col gap-y-4'>
                    <h1 className='text-center lg:text-left lg:text-4xl text-2xl xs:text-3xl font-semibold'>Our <span className='text-violet-700'>Value</span></h1>
                    <p className='text-center lg:text-left lg:text-lg text-sm sm:text-base text-gray-500'>
                        We provide you the best looking houses you've ever seen.<br />
                        You deserve to live like a king.
                    </p>

                    <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            data.map((item, id) => {
                                return (
                                    <AccordionItem key={id} uuid={id}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='bg-violet-700 text-white flex items-center justify-between p-4'>
                                                <div>{item.icon}</div>
                                                <span>{item.title}</span>
                                                <div>
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p>{item.description}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}

export default Value