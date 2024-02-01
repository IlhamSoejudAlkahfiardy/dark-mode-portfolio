import { motion } from 'framer-motion'
import React from 'react'

const Timeline = () => {
    return (
        <div className='w-full h-full flex justify-center items-center relative'>
            <div className='w-px h-full border dark:border-slate-500 border-zinc-500'>

            </div>
            <motion.div
                drag
                dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                dragElastic={.5}

                whileHover={{
                    cursor: 'grab'
                }}

                whileTap={{
                    cursor: 'grabbing'
                }}

                transition={{
                    type: 'spring'
                }}
                className='w-5 h-5 bg-blue-500 absolute rounded-full border-2 dark:border-slate-200 border-white'>

            </motion.div>
        </div>
    )
}

export default Timeline