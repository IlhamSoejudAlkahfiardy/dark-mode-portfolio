import React from 'react'

const HamburgerMenu = (props) => {
    return (
        <div className=' flex justify-between items-center px-3 bg-zinc-950'>
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
                        className='text-blue-600'
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            <p className='text-lg font-bold text-slate-200 tracking-wider'>
                Skills Studio
            </p>
        </div>
    )
}

export default HamburgerMenu