import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        const scrollY = window.scrollY

        if (scrollY >= 1700) {
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

                    onClick={scrollToTop} className='fixed right-5 bottom-5 w-12 h-12 border border-slate-200/30 flex justify-center items-center rounded-md'>
                    <p className='text-slate-200 text-xs'>
                        <IoIosArrowUp className='inline-block text-slate-200 scale-125' />
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ScrollTop