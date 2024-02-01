import { motion } from 'framer-motion'
import React from 'react'

import DataSkill from '../../assets/data/skill';

const Skill = () => {
    return (
        <div className='w-full h-full  relative xl:min-h-screen container mx-auto justify-between xl:justify-center flex flex-col mt-24 xl:mt-0 px-5 md:px-10'>
            <motion.p
                drag
                dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}

                whileHover={{
                    cursor: 'grab'
                }}

                whileTap={{
                    cursor: 'grabbing',
                    scale: 1.2
                }}

                initial={{
                    y: 100,
                    opacity: 0
                }}

                whileInView={{
                    y: 0,
                    opacity: 1
                }}

                transition={{
                    type: 'spring',
                    duration: 1.5
                }}

                className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2 '>
                My Skill-set
            </motion.p>

            <motion.p
                initial={{
                    y: 100,
                    opacity: 0
                }}

                whileInView={{
                    y: 0,
                    opacity: 1
                }}

                whileHover={{
                    scale: 1.1
                }}

                whileTap={{
                    scale: 1.2
                }}

                transition={{
                    type: 'spring',
                    duration: 1.5,
                    delay: 0.05
                }}

                className='dark:text-slate-400 text-slate-600 transition-colors duration-500 text-xs w-fit leading-loose mt-5 hover:cursor-pointer'>*You can play with my skill-sets, try to drag some of my skill below. <br /> Hahaha, dont hurt my skills
            </motion.p>

            <div className='w-full z-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-10 lg:mt-0'>
                {DataSkill.map((data, index) => (
                    <motion.div
                        key={index}

                        className=' aspect-square flex flex-col justify-center items-center dark:hover:bg-white/5 hover:bg-white/20 rounded-md transition-colors duration-500'>
                        <motion.div
                            key={data.id}

                            initial={{
                                y: 100,
                                opacity: 0
                            }}

                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}

                            drag
                            dragConstraints={{
                                top: -50,
                                right: 50,
                                bottom: 50,
                                left: -50,
                            }}

                            whileHover={{
                                scale: 1.2,
                                cursor: 'grab'
                            }}

                            whileTap={{
                                scale: 1.5,
                                cursor: "grabbing"
                            }}

                            dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                            dragElastic={0.2}

                            transition={{
                                type: 'spring',
                                duration: 1.5,
                                delay: data.delay
                            }}

                            className=' w-1/2 lg:w-1/3 '>
                            {data.logo}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default Skill