import React, { useState, useEffect } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const page = useLocation().pathname
    const [shadowNav, setShadowNav] = useState(false)
    return (
        <>
            <HamburgerMenu open={open} setOpen={setOpen} />
            <NavbarMobile
                open={open}
                page={page}
                setOpen={setOpen}
            />
            <NavbarDesktop
                page={page}
            />

        </>
    )
}

const NavbarDesktop = (props) => {
    return (
        <div className='w-full hidden container mx-auto h-24 bg-zinc-950 lg:flex items-center px-5 md:px-10'>
            <div className='w-2/12 h-full  flex items-center'>
                <Link to="/" className='text-lg font-bold text-slate-200 tracking-wider'>
                    Skills Studio
                </Link>
            </div>
            <div className='w-8/12 h-full flex items-center gap-16'>
                <Link to="/" className=' flex flex-col w-fit gap-2'>
                    <p className={`text-sm text-slate-200 tracking-wider  leading-loose ${props.page == '/' ? "border-b border-blue-500" : ""}`}>About Me</p>
                </Link>
                <Link to="/project" className=' flex flex-col w-fit gap-2'>
                    <p className={`text-sm text-slate-200 tracking-wider  leading-loose ${props.page == '/project' ? "border-b border-blue-500" : ""}`}>Works</p>
                </Link>
                <Link to="/experience" className=' flex flex-col w-fit gap-2'>
                    <p className={`text-sm text-slate-200 tracking-wider  leading-loose ${props.page == '/experience' ? "border-b border-blue-500" : ""}`}>Experience</p>
                </Link>
            </div>
        </div>
    )
}

const NavbarMobile = (props) => {

    return (
        <div className={`absolute w-full z-20 py-5 bg-zinc-950 lg:hidden flex-col justify-center items-center gap-5 transition-all duration-300 ${props.open ? "flex" : "hidden"}`}>

            <Link to="/" className={`text-slate-200 text-center text-base p-2  ${props.page == '/' ? "border-b border-blue-500" : ""}`}>
                About Me
            </Link>
            <Link to="/project" className={`text-slate-200 text-center text-base p-2  ${props.page == '/project' ? "border-b border-blue-500" : ""}`}>
                Works
            </Link>
            <Link to="/experience" className={`text-slate-200 text-center text-base p-2  ${props.page == '/experience' ? "border-b border-blue-500" : ""}`}>
                Experience
            </Link>
            <Link to="#" className={`text-slate-200 text-center text-base p-2  ${props.page == '/contact-me' ? "border-b border-blue-500" : ""}`}>
                Contact me
            </Link>
            <p className={`text-slate-200 text-center text-xs p-2 bg-blue-600 px-4 rounded hover:bg-blue-700`}>
                Download my CV
            </p>

        </div>
    )
}

export default Navbar