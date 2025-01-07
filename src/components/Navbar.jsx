import React, { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import Icon from '../assets/icons/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const page = useLocation().pathname

    const baseURL = window.location.origin

    const resume = `${baseURL}/downloadable/resume.pdf`

    const cv = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()

        alert(`${fileName} downloaded, check your download folder`)
    }

    const anchor = [
        {
            name: 'About Me',
            link: '/'
        },
        {
            name: 'Works',
            link: '/project'
        },
        {
            name: 'Experience',
            link: '/experience'
        },
        {
            name: 'Award & Certificates',
            link: '/award'
        },
        {
            name: 'Contact me',
            link: '/contact-me'
        },
    ]

    return (
        <>
            <HamburgerMenu open={open} setOpen={setOpen} />

            <NavbarMobile
                open={open}
                page={page}
                cv={cv}
                setOpen={setOpen}
                resume={resume}
                anchor={anchor}
            />

            <NavbarDesktop
                page={page}
                cv={cv}
                resume={resume}
            />

        </>
    )
}

const NavbarDesktop = (props) => {
    return (
        <div className='container z-20 items-center hidden w-full h-24 px-5 mx-auto transition-colors duration-500 dark:bg-zinc-950 bg-slate-200 xl:flex md:px-10'>
            <motion.div
                // initial={{
                //     y: -50
                // }}

                // animate={{
                //     y: 0
                // }}

                // transition={{
                //     type: 'spring'
                // }}
                className='flex items-center w-2/12 h-full'>
                <Link to="/" className='flex items-center gap-2 text-lg font-bold tracking-wider transition-colors duration-500 dark:text-slate-200 text-zinc-700'>
                    <img src={Icon} alt="" srcset="" className='h-7 aspect-square' />
                    <p>Skills Studio</p>
                </Link>
            </motion.div>
            <div className='flex items-center w-7/12 h-full gap-16 lg:w-6/12 xl:w-7/12'>
                <Link to="/" className='flex flex-col gap-2 w-fit'>
                    <motion.p
                        // initial={{
                        //     y: -50
                        // }}

                        // animate={{
                        //     y: 0
                        // }}

                        // whileHover={{
                        //     y: -5,
                        //     transition: {
                        //         delay: 0
                        //     }
                        // }}

                        // transition={{
                        //     type: 'spring',
                        //     delay: .05
                        // }}

                        className={`relative text-sm dark:text-slate-200 text-zinc-700 transition-all duration-500 tracking-wider hover:text-white leading-loose ${props.page == '/' ? "border-b border-blue-500" : ""}`}>
                        About Me

                    </motion.p>
                </Link>
                <Link to="/project" className='flex flex-col gap-2 w-fit'>
                    <motion.p
                        // initial={{
                        //     y: -50
                        // }}

                        // animate={{
                        //     y: 0
                        // }}

                        // whileHover={{
                        //     y: -5,
                        //     transition: {
                        //         delay: 0
                        //     }
                        // }}

                        // transition={{
                        //     type: 'spring',
                        //     delay: 0.1
                        // }}

                        className={`text-sm dark:text-slate-200 text-zinc-700 transition-all duration-500 tracking-wider  leading-loose hover:text-white ${props.page == '/project' ? "border-b border-blue-500" : ""}`}>
                        Works
                    </motion.p>
                </Link>
                <Link to="/experience" className='flex flex-col gap-2 w-fit'>
                    <motion.p
                        // initial={{
                        //     y: -50
                        // }}

                        // animate={{
                        //     y: 0
                        // }}

                        // whileHover={{
                        //     y: -5,
                        //     transition: {
                        //         delay: 0
                        //     }
                        // }}

                        // transition={{
                        //     type: 'spring',
                        //     delay: 0.15
                        // }}

                        className={`text-sm dark:text-slate-200 text-zinc-700 transition-all duration-500 tracking-wider  leading-loose hover:text-white ${props.page == '/experience' ? "border-b border-blue-500" : ""}`}>
                        Experience
                    </motion.p>
                </Link>
                <Link to="/award" className='flex flex-col gap-2 w-fit'>
                    <motion.p
                        // initial={{
                        //     y: -50
                        // }}

                        // animate={{
                        //     y: 0
                        // }}

                        // whileHover={{
                        //     y: -5,
                        //     transition: {
                        //         delay: 0.2
                        //     }
                        // }}

                        // transition={{
                        //     type: 'spring',
                        //     delay: 0.15
                        // }}

                        className={`text-sm dark:text-slate-200 text-zinc-700 transition-all duration-500 tracking-wider  leading-loose hover:text-white ${props.page == '/award' ? "border-b border-blue-500" : ""}`}>
                        Award & Certificates
                    </motion.p>
                </Link>
            </div>
            <div className='flex items-center w-3/12 h-full lg:w-4/12 xl:w-3/12'>

                <div className='flex items-center justify-center w-full '>
                    <Link to="/contact-me" className={`dark:text-slate-200 text-zinc-700 transition-all duration-500 text-sm tracking-wider leading-loose hover:text-white `}>
                        <motion.p
                            // initial={{
                            //     y: -50
                            // }}

                            // animate={{
                            //     y: 0
                            // }}

                            // whileHover={{
                            //     y: -5,
                            //     transition: {
                            //         delay: 0
                            //     }
                            // }}

                            // transition={{
                            //     type: 'spring',
                            //     delay: .2
                            // }}

                            className={`${props.page == '/contact-me' ? "border-b border-blue-500" : ""}`}
                        >
                            Contact me
                        </motion.p>
                    </Link>
                </div>
                <div className='flex items-center justify-center w-full hover:cursor-pointer'>
                    <motion.p
                        animate={{
                            y: [5, -5, 5],
                            transition: {
                                repeat: Infinity,
                                duration: 2,
                                // type: 'spring'
                            }
                        }}

                        onClick={() => props.cv(props.resume)} className='px-3 py-2 text-xs transition-colors duration-500 bg-blue-600 rounded text-slate-200 hover:bg-blue-700'>
                        Download my CV
                    </motion.p>
                </div>

            </div>
        </div>
    )
}

const NavbarMobile = (props) => {

    return (
        <AnimatePresence>
            {props.open && (
                <motion.div

                    initial={{
                        y: -400
                    }}

                    animate={{
                        y: 0
                    }}

                    exit={{
                        y: -450
                    }}

                    transition={{
                        type: 'spring'
                    }}

                    className={`absolute w-full z-20 py-5 dark:bg-zinc-950 bg-slate-200 xl:hidden flex flex-col justify-center items-center gap-5 transition-colors duration-500`}>

                    {props.anchor.map((data, index) => (
                        <Link to={data.link} key={index} className={`dark:text-slate-200 text-zinc-700 transition-colors duration-500 text-center text-base p-2  ${props.page == data.link ? "border-b border-blue-500" : ""}`}>
                            {data.name}
                        </Link>
                    ))}

                    <motion.p
                        animate={{
                            y: [5, -5, 5],
                            transition: {
                                repeat: Infinity,
                                duration: 2,
                            }
                        }}

                        onClick={() => props.cv(props.resume)} className={`text-slate-200 dark:text-zinc-950 transition-colors duration-500 text-center text-xs p-2 bg-blue-600 px-4 rounded hover:bg-blue-700`}>
                        Download my CV
                    </motion.p>

                </motion.div>
            )}
        </AnimatePresence>
    )

}

export default Navbar