import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <div className='bg-zinc-950 font-fontPoppins selection:text-zinc-950 selection:bg-slate-200'>
                <Navbar />
                <div className=''>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout