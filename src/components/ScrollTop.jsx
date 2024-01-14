import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

const ScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.div
            initial={{
                y: 100,
                opacity: 0
            }}

            animate={{
                y: 0,
                opacity: 1
            }}

            transition={{
                type: 'spring',
                duration: 1.5
            }}

            whileHover={{ 
                scale:1.2,
                cursor:'pointer'
             }}

             whileTap={{ 
                scale:.8,
              }}

            onClick={scrollToTop} className='fixed right-10 bottom-10 w-12 h-12 bg-zinc-800 flex justify-center items-center rounded-md'>
            <p className='text-slate-200 text-xs'>
                <IoIosArrowUp className='inline-block text-slate-200 scale-125' />
            </p>
        </motion.div>
    )
}

export default ScrollTop