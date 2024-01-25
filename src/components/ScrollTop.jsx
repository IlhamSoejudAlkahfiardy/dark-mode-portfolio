import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        const scrollY = window.scrollY

        if (scrollY >= 500) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}

                    animate={{
                        y: 0,
                        opacity: 1
                    }}

                    exit={{
                        y: 100,
                        opacity: 0,
                        transition: {
                            // duration:1.5
                            type: 'spring'
                        }
                    }}

                    transition={{
                        type: 'spring',
                        // duration: 1.5
                    }}

                    whileHover={{
                        scale: 1.2,
                        cursor: 'pointer'
                    }}

                    whileTap={{
                        scale: .8,
                    }}

                    onClick={scrollToTop} className='z-50 fixed right-5 bottom-5 w-12 h-12 dark:bg-zinc-950 bg-slate-200 border dark:border-slate-200/30 border-zinc-950/30 flex justify-center items-center rounded-md transition-colors duration-500'>
                    <p className='text-slate-200 text-xs'>
                        <IoIosArrowUp className='inline-block dark:text-slate-200 text-zinc-700 scale-125 transition-colors duration-500' />
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ScrollTop