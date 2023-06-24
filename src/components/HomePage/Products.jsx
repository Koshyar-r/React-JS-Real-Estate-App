import React, { useEffect } from 'react'
import Property1First from '../../images/houses/house2lg.png'
import Property1Second from '../../images/interiors/interior-1.jpg'
import Property1Third from '../../images/houses/house3.png'
import Property2First from '../../images/houses/house10lg.png'
import Property2Second from '../../images/interiors/interior-2.jpg'
import Property2Third from '../../images/houses/house8.png'
import Property3First from '../../images/houses/house11lg.png'
import Property3Second from '../../images/interiors/interior-8.jpg'
import Property3Third from '../../images/interiors/interior-9.jpg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"

const Products = () => {

    const data = [
        {name: 'Beach House in California', type: 'Entire house', rating: {rate: '3.89', reviews: '(128)'}, location: 'Los Angeles, USA', Img: {first: Property1First, second: Property1Second, third: Property1Third}},
        {name: 'Safe House in Vancouver', type: 'Apartment', rating: {rate: '4.34', reviews: '(244)'}, location: 'Vancouver, Canada', Img: {first: Property2First, second: Property2Second, third: Property2Third}},
        {name: 'Beautiful House in Stockholm', type: 'Entire house', rating: {rate: '5', reviews: '(631)'}, location: 'Stockholm, Sweden', Img: {first: Property3First, second: Property3Second, third: Property3Third}},
    ]

    const control = useAnimation()
    const [ref, inView] = useInView()

    const TopVariant = {
        visible: { opacity: 1, y: 0,  transition: { duration: 2 } },
        hidden: { opacity: 0, y: -100 },
    }
    
    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    return (
        <section>
            <div className='container mt-28 mb-24 mx-auto'>
                <motion.div ref={ref} variants={TopVariant} initial="hidden" animate={control} className='text-center'>
                    <h1 className='text-2xl font-semibold mb-4 sm:text-4xl'>We Have <span className='text-violet-700'>All Of It</span></h1>
                    <p className='text-gray-600 font-medium'>All the houses you dream about, is here</p>
                </motion.div>

                <div className='mt-12 flex flex-col gap-y-20'>
                        {
                            data.map((item, id) => {
                                return (
                                    <div key={id} class="shadow-lg p-8 rounded-lg max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                                        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                                            <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">{item.name}</h1>
                                            <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">{item.type}</p>
                                        </div>
                                        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                                            <img src={item.Img.first} alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
                                            <img src={item.Img.second} alt="" class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                                            <img src={item.Img.third} alt="" class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                                        </div>
                                        <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                                        <dt class="sr-only">Reviews</dt>
                                        <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                                            <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                                                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>{item.rating.rate} <span class="text-slate-400 font-normal">{item.rating.reviews}</span></span>
                                        </dd>
                                        <dt class="sr-only">Location</dt>
                                        <dd class="flex items-center">
                                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                                            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                        </svg>
                                        {item.location}
                                        </dd>
                                        </dl>
                                        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                                            <button type="button" class="bg-violet-700 hover:bg-violet-800 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg transition">Check availability</button>
                                        </div>
                                        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem quam distinctio eius, nam, esse iusto repellendus natus necessitatibus harum in consectetur assumenda cumque inventore, accusamus reiciendis ipsa odit iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident labore beatae quisquam est itaque quam officiis iste ipsum dolorum minus, possimus obcaecati maxime.
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        </section>
    )
}

export default Products