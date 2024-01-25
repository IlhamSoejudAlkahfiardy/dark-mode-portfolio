import React from 'react'
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { motion } from 'framer-motion';


const ToggleTheme = ({ theme, toggleTheme }) => {

    return (
        <motion.div

            initial={{
                scale: 0,
                opacity: 0
            }}

            whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring',
                }
            }}

            drag
            dragConstraints={{
                top: 0,
                right: 0,
                bottom: 500,
                left: 0
            }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 100 }}

            whileHover={{
                cursor: 'pointer',
            }}

            whileTap={{
                scale: .9,
            }}

            onClick={toggleTheme}
            className='z-50 fixed top-32 right-5 w-10 h-10 border dark:border-slate-200/30 border-zinc-950/30 bg-slate-200 dark:bg-zinc-950 flex items-center justify-center rounded-md transition-colors duration-500'>
            {theme === 'light' ? (
                <MdSunny className='inline-block text-zinc-950 dark:text-slate-200 ' />
            ) : (
                <FaMoon className='inline-block text-zinc-950 dark:text-slate-200 ' />
            )}
        </motion.div>
    )
}

export default ToggleTheme