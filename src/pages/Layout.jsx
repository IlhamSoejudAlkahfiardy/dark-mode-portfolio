import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from '@/components/ui/toaster'


const Layout = ({ children }) => {
    return (
        <>
            <div className='bg-zinc-950 font-fontPoppins select-none overflow-x-hidden'>
                <Navbar />
                <div className=''>
                    {children}
                </div>
                <Toaster className="bg-zinc-950 border border-slate-200/30 text-slate-200" />
                <Footer />
            </div>
        </>
    )
}

export default Layout