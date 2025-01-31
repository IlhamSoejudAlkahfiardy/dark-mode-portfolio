import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import HairHub from '../../assets/images/project/image/hairhub.png'
import BeraniBicara from '../../assets/images/project/image/beranibicara.png'
import HavenBook from '../../assets/images/project/image/havenbook.png'

const Hero = () => {
    const [innerWidth, setInnerWidth] = useState(0)

    const funcInnerWidth = () => {
        setInnerWidth(window.innerWidth)
    }

    useEffect(() => {
        setInnerWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', funcInnerWidth)
    }, [innerWidth])

    return (
        <div className='container relative flex items-center justify-center w-screen px-5'>
            <div className='flex flex-col items-center w-full gap-10 px-10 py-10 my-24 overflow-y-hidden shadow-md lg:h-96 md:px-28 lg:px-20 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 rounded-3xl lg:flex-row drop-shadow-md'>
                <div className='flex flex-col w-full gap-10'>
                    <p className='text-6xl font-extrabold text-center lg:text-left text-slate-100'>Project Showcase</p>
                    <p className='text-xl font-medium xl:text-2xl md:text-center lg:text-left text-slate-100'>Showcasing innovative works in web development, I strive to create engaging and responsive digital experiences for each project</p>
                </div>

                <div className='relative flex justify-center w-full h-28 '>
                    <motion.div
                        initial={{
                            rotate: 0,
                            y: 400,
                            opacity: 0
                        }}

                        animate={{
                            rotate: -25,
                            x: innerWidth < 1440 ? -50 : -100,
                            y: 20,
                            opacity: 1,
                            transition: {
                                type: 'spring',
                                delay: 0
                            }
                        }}

                        whileTap={{
                            x: innerWidth < 1440 ? -75 : -125,
                            y: -20,
                            transition: {
                                delay: 0
                            }
                        }}

                        whileHover={{ 
                            x: innerWidth < 1440 ? -60 : -110,
                            y:10
                         }}

                        className='absolute flex flex-col w-32 gap-3 p-2 shadow-lg lg:w-48 h-44 lg:h-64 bg-slate-100 lg:-top-10 rounded-xl lg:p-4'>
                        <div
                            className='w-full h-20 rounded-lg lg:h-28'
                            style={{ backgroundImage: `url(${BeraniBicara})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                        </div>
                        <div className='flex flex-col w-full gap-1'>
                            <p className='text-sm font-bold text-zinc-700'>Berani Bicara</p>
                            <p className='text-xs text-zinc-700 line-clamp-2 lg:line-clamp-4'>We are Berani Bicara, a platform for those seeking justice and support in facing sexual harassment. Our mission is to protect, support, and empower individuals who have gone through this painful experience.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            rotate: 0,
                            y: 400,
                            opacity: 0
                        }}

                        animate={{
                            rotate: 0,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            transition: {
                                type: 'spring',
                                delay: 0
                            }
                        }}

                        whileTap={{
                            y: -40,
                            transition: {
                                delay: 0
                            }
                        }}

                        whileHover={{ 
                            y:-10
                         }}

                        className='absolute flex flex-col w-32 gap-3 p-2 shadow-lg lg:w-48 h-44 lg:h-64 bg-slate-100 lg:-top-10 rounded-xl lg:p-4'>
                        <div
                            className='w-full h-20 rounded-lg lg:h-28'
                            style={{ backgroundImage: `url(${HairHub})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                        </div>
                        <div className='flex flex-col w-full gap-1'>
                            <p className='text-sm font-bold text-zinc-700'>HairHub</p>
                            <p className='text-xs text-zinc-700 line-clamp-2 lg:line-clamp-4'>HairHub is an innovative website platform that serves as a central information hub for owners and users of barbershops and salons in the Greater Jakarta Area (Jabodetabek). The platform was developed in 2023, and we are committed to providing detailed and accurate information, facilitating business owners in effectively promoting their services, while users can easily discover and rate various barbershops and salons. With HairHub, we are dedicated to supporting the growth of the barbershop and salon industry!</p>
                        </div>

                    </motion.div>
                    <motion.div
                        initial={{
                            rotate: 0,
                            y: 400,
                            opacity: 0
                        }}

                        animate={{
                            rotate: 25,
                            x: innerWidth < 1440 ? 50 : 100,
                            y: 20,
                            opacity: 1,
                            transition: {
                                type: 'spring',
                                delay: 0
                            }
                        }}

                        whileTap={{
                            x: innerWidth < 1440 ? 75 : 125,
                            y: -20,
                            transition: {
                                delay: 0
                            }
                        }}

                        whileHover={{ 
                            x: innerWidth < 1440 ? 60 : 110,
                            y:10
                         }}

                        className='absolute flex flex-col w-32 gap-3 p-2 shadow-lg lg:w-48 h-44 lg:h-64 bg-slate-100 lg:-top-10 rounded-xl lg:p-4'>
                        <div
                            className='w-full h-20 rounded-lg lg:h-28'
                            style={{ backgroundImage: `url(${HavenBook})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                        </div>
                        <div className='flex flex-col w-full gap-1'>
                            <p className='text-sm font-bold text-zinc-700'>HavenBook</p>
                            <p className='text-xs text-zinc-700 line-clamp-2 lg:line-clamp-4'>HavenBook is a website that serves its users to rent books with various categories, genres, titles, and prices. With easy and fast payment methods, as well as user-friendly features for new users, we aim to provide you with a good book rental experience.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Hero