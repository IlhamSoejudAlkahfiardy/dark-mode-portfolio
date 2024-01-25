import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from '@/components/ui/toaster'
import ScrollTop from '@/components/ScrollTop'
import ToggleTheme from '@/components/ToggleTheme'

const Layout = ({ children }) => {

    const [theme, setTheme] = useState('')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        localStorage.setItem('theme', theme);
    };

    useEffect(() => {
        // if empty string, use the localStorage
        const currentTheme = !theme ? localStorage.getItem('theme') : theme;

        if (currentTheme === 'light') {
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        }

        localStorage.setItem('theme', currentTheme);

    }, [theme])

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        setTheme(storedTheme || 'dark');
    }, [])

    return (
        <>
            <div className='dark:bg-zinc-950 bg-slate-200 font-fontPoppins select-none overflow-x-hidden transition-colors duration-500'>
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