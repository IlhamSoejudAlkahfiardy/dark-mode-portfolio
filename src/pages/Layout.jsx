import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from '@/components/ui/toaster'
import ScrollTop from '@/components/ScrollTop'
import ToggleTheme from '@/components/ToggleTheme'

const Layout = ({ children }) => {
    const [theme, setTheme] = useState('')
    // const [storedTheme, setStoredTheme] = useState('')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        localStorage.setItem('theme', theme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [theme])

    useEffect(() => {
        // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //     setTheme('dark')
        // } else {
        //     setTheme('light')
        // }

        console.log('Before: Stored Theme:', localStorage.getItem('theme'));
        const storedTheme = localStorage.getItem('theme');

        console.log('After: Stored Theme:', storedTheme);
        // setStoredTheme(localStorage.getItem('theme'));

        setTheme(storedTheme || 'dark');

    }, [])


    return (
        <>
            <div className='dark:bg-zinc-950 bg-slate-200 font-fontPoppins select-none overflow-x-hidden'>
                <Navbar />
                <div className=''>
                    {children}
                    <ScrollTop />
                    <ToggleTheme
                        theme={theme}
                        setTheme={setTheme}
                        toggleTheme={toggleTheme}
                    />
                </div>
                <Toaster className="bg-zinc-950 border border-slate-200/30 text-slate-200" />
                <Footer />
            </div>
        </>
    )
}

export default Layout