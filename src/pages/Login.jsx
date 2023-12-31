import React, { useEffect } from 'react'
import Img from '../images/login-img.png'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"

const Login = () => {

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
        <motion.section ref={ref} variants={Variant} initial="hidden" animate={control} class="mt-20 relative py-20 lg:py-10 overflow-hidden">
            <div class="container px-4 mx-auto">
                <div class="max-w-7xl mx-auto">
                    <div class="flex flex-wrap -mx-4 xl:items-center">
                      <div class="w-full lg:w-1/2 xl:w-3/5 px-4 order-last lg:order-first">
                        <div class="relative max-w-xl mx-auto lg:mx-0 lg:max-w-3xl h-full">
                          <img class="block w-full h-166 lg:h-full object-cover rounded-3xl" src={Img} />
                          <div class="absolute bottom-0 w-full left-0 p-4 sm:p-6">
                            <div class="p-6 sm:p-10 backdrop-blur-md backdrop-filter bg-black bg-opacity-30 rounded-5xl">
                              <h5 class="text-3xl text-white font-semibold mb-2">Hombeez</h5>
                              <span class="block text-sm text-white font-semibold mb-6">Real State Agency</span>
                              <p class="max-w-xl text-2xl text-white font-semibold mb-15">&quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, aliquid accusantium.&apos;Consequatur pellat vero veniam rerum. Vel.&quot;</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
                          <div class="max-w-md lg:py-20 mx-auto lg:mr-0">
                            <h3 class="font-heading text-4xl text-gray-900 font-semibold mb-4">Sign in to your <span className='text-violet-700'>account</span></h3>
                            <p class="text-lg text-gray-500 mb-10">Greetings on your return! We kindly request you to enter your details.</p>
                            <div class="flex flex-wrap mb-6 items-center -mx-2">
                              <div class="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                                <a class="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100" href="#">
                                  <FaFacebook className='text-xl' />
                                  <span class="ml-4 text-sm font-semibold text-gray-500">Login with Facebook</span>
                                </a>
                              </div>
                              <div class="w-full md:w-1/2 px-2">
                                <a class="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100" href="#">
                                  <FaGoogle className='text-xl' />
                                  <span class="ml-4 text-sm font-semibold text-gray-500">Login with Google</span>
                                </a>
                              </div>
                            </div>
                            <div class="flex mb-6 items-center">
                              <div class="w-full h-px bg-gray-300"></div>
                              <span class="mx-4 text-sm font-semibold text-gray-500">Or</span>
                              <div class="w-full h-px bg-gray-300"></div>
                            </div>
                            <form action="">
                              <div class="mb-6">
                                <label class="block mb-1.5 text-sm text-gray-900 font-semibold" for="">Email</label>
                                <input class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email" placeholder="pat@saturn.dev" />
                              </div>
                              <div class="mb-7">
                                <div class="flex mb-1.5 items-center justify-between">
                                  <label class="block text-sm text-gray-900 font-semibold" for="">Password</label>
                                  <a class="inline-block text-xs font-semibold text-violet-700 hover:text-violet-950" href="#">Forget password?</a>
                                </div>
                                <div class="relative">
                                  <input class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="password" placeholder="Enter your password" />
                                  <button class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                                    <img src="saturn-assets/images/sign-up/icon-eye.svg" alt="" />
                                  </button>
                                </div>
                              </div>
                              <div class="flex mb-6 items-center">
                                <input type="checkbox" value="" id="check" />
                                <label class="ml-2 text-xs text-gray-800" for="check">Remember Me</label>
                              </div>
                              <button class="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-violet-700 rounded-full overflow-hidden" type="submit">
                                <div class="absolute top-0 right-full w-full h-full bg-violet-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                <span class="relative">Login</span>
                              </button>
                              <span class="text-xs font-semibold text-gray-900">
                                <span>Don&rsquo;t have an account?</span>
                                <a class="ml-1 inline-block text-violet-700 hover:text-violet-900" href="#">Sign up</a>
                              </span>
                            </form>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Login