import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/icons/logo.png'

const HamburgerMenu = (props) => {
    return (
        <div className='container z-50 flex items-center justify-between px-3 mx-auto transition-colors duration-500 xl:hidden md:px-6 dark:bg-zinc-950 bg-slate-200'>
            <button

                onClick={() => props.setOpen(!props.open)}
                className={` my-3 transition-all duration-300 ${props.open ? " rotate-180" : "rotate-0"}`}
            >
                <svg
                    
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
                </svg>
            </button>
            <Link to="/" className='text-lg font-bold tracking-wider transition-colors duration-500 dark:text-slate-200 text-zinc-950'>
                <img src={Logo} alt="" srcset="" className='h-7' />
            </Link>
        </div>
    )
}

export default HamburgerMenu