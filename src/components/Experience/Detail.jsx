import { motion } from 'framer-motion'
import React from 'react'

import Certificate from './Certificate'

const Detail = ({ left, internship, date, title, major, certificate, download, url, delay }) => {
    return (
        <motion.div
            drag
            dragConstraints={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}

            initial={{ scale:0 }}
            animate={{ scale:1 }}

            whileHover={{
                cursor: 'grab',
                scale: 1.1,
                transition: {
                    type: 'spring'
                }
            }}

            whileTap={{
                cursor: 'grabbing',
            }}

            transition={{
                type: 'spring',
                delay: delay
            }}

            className={`w-full h-fit col-span-2 flex flex-col gap-2 p-3 ${left && "items-end"} `}>
            {internship && (
                <p className='text-xs text-slate-200 bg-green-600 w-fit px-2 py-1 rounded mb-3'>Internship</p>
            )}
            <p className='transition-colors duration-500 dark:text-slate-400 text-zinc-700 text-xs lg:text-sm 2xl:text-base font-light'>{date}</p>
            <p className={`transition-colors duration-500 dark:text-slate-200 text-zinc-950 text-sm lg:text-base 2xl:text-lg ${left && "text-end"}`}>{title}</p>
            <p className={`text-blue-500 text-xs lg:text-sm 2xl:text-base ${left && "text-end"}`}>{major}</p>
            {certificate && (
                <Certificate download={download} url={url} />
            )}
        </motion.div>
    )
}

export default Detail