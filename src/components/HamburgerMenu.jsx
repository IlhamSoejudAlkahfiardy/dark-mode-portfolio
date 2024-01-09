import React from 'react'
import { Link } from 'react-router-dom'

const HamburgerMenu = (props) => {
    return (
        <div className='flex container mx-auto lg:hidden justify-between items-center px-3 md:px-6 bg-zinc-950'>
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
            <Link to="/" className='text-lg font-bold text-slate-200 tracking-wider'>
                Skills Studio
            </Link>
        </div>
    )
}

export default HamburgerMenu