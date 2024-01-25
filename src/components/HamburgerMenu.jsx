import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const HamburgerMenu = (props) => {
    return (
        <div className='z-50 flex container mx-auto lg:hidden justify-between items-center px-3 md:px-6 dark:bg-zinc-950 bg-slate-200 transition-colors duration-500'>
            <motion.button

                onClick={() => props.setOpen(!props.open)}
                className={` my-3 transition-all duration-300 ${props.open ? " rotate-180" : "rotate-0"}`}
            >
                <motion.svg
                    initial={{
                        y: -50
                    }}

                    animate={{
                        y: 0
                    }}

                    transition={{
                        type: 'spring'
                    }}

                    className="w-10 h-10 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className='text-blue-500'
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </motion.svg>
            </motion.button>
            <Link to="/" className='text-lg font-bold dark:text-slate-200 text-zinc-950 transition-colors duration-500 tracking-wider'>
                <motion.p
                    initial={{
                        scale: 0
                    }}

                    animate={{
                        scale: 1
                    }}

                    transition={{
                        type: 'spring',
                        delay: .1
                    }}

                >
                    Skills Studio
                </motion.p>
            </Link>
        </div>
    )
}

export default HamburgerMenu