import React, { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const page = useLocation().pathname
    return (
        <>
            <HamburgerMenu open={open} setOpen={setOpen} />
            <NavbarMobile
                open={open}
                page={page}
                setOpen={setOpen}
            />

        </>
    )
}

const NavbarMobile = (props) => {

    return (
        <div className={`absolute w-full bg-zinc-950 h-fit flex flex-col justify-center items-center gap-5 transition-all duration-300 ${props.open ? "mt-0" : "-mt-60"}`}>

            <Link to="/" className={`text-slate-200 text-center text-base p-2  ${props.page == '/' ? "border-b border-blue-600" : ""}`}>
                About Me
            </Link>
            <Link to="/project" className={`text-slate-200 text-center text-base p-2  ${props.page == '/project' ? "border-b border-blue-600" : ""}`}>
                Project
            </Link>
            <Link to="/experience" className={`text-slate-200 text-center text-base p-2  ${props.page == '/experience' ? "border-b border-blue-600" : ""}`}>
                Experience
            </Link>

        </div>
    )
}

export default Navbar