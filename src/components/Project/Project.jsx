import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

import Card from './Card';
import DataProject from '../../assets/data/project'

const Project = () => {

    const [state, setState] = useState({
        currentOpen: true,
        selectedOpen: true,
        archiveOpen: true
    })

    const { currentOpen, selectedOpen, archiveOpen } = state

    return (
        <div className='w-full min-h-screen overflow-x-hidden container mx-auto flex flex-col  gap-10 xl:gap-0 px-5 md:px-10'>

            <div className='w-full flex flex-col items-center gap-2 xl:mt-10 my-24'>
                <p
                    onClick={() => setState({ ...state, currentOpen: !currentOpen })}
                    className='dark:text-slate-200 text-zinc-700 w-fit transition-colors duration-500 z-10 lg:text-lg xl:text-xl leading-loose hover:cursor-pointer'>
                    Current Project
                </p>

                <motion.div
                    initial={{
                        width: '0%',
                    }}

                    animate={{
                        width: currentOpen ? '95%' : '25%',
                        transition: {
                            type: 'spring',
                        }
                    }}

                    className='border-t-2 border-blue-500'>

                </motion.div>

                <div className='w-full md:max-w-md lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-10 py-5'>
                    <AnimatePresence mode='popLayout'>
                        {currentOpen && (
                            DataProject.map((data, index) => (
                                data.category == 'current' && (
                                    <Card
                                        key={index}
                                        image={data.image}
                                        title={data.title}
                                        desc={data.desc}
                                        hosting={data.hosting}
                                        github={data.github}
                                        active={data.active}
                                        date={data.date}
                                        teams={data.teams}
                                        logo={data.logo}
                                        stack={data.stack}
                                        delay={data.delay}
                                    />
                                )
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className='w-full flex flex-col items-center gap-3 xl:mt-10 xl:my-24'>
                <p
                    onClick={() => setState({ ...state, selectedOpen: !selectedOpen })}
                    className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 z-10 lg:text-lg xl:text-xl w-fit leading-loose hover:cursor-pointer'>Selected Project</p>
                <motion.div
                    initial={{
                        width: '0%',
                    }}

                    animate={{
                        width: selectedOpen ? '95%' : '25%',
                        transition: {
                            type: 'spring',
                        }
                    }}

                    className='border-t-2 border-blue-500'>

                </motion.div>

                <div className='w-full md:max-w-md lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-10 py-5'>
                    <AnimatePresence mode='popLayout'>
                        {selectedOpen && (
                            DataProject.map((data, index) => (
                                data.category == 'latest' && (
                                    <Card
                                        key={index}
                                        image={data.image}
                                        title={data.title}
                                        desc={data.desc}
                                        hosting={data.hosting}
                                        github={data.github}
                                        active={data.active}
                                        date={data.date}
                                        teams={data.teams}
                                        logo={data.logo}
                                        stack={data.stack}
                                        delay={data.delay}
                                    />
                                )
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className='w-full flex flex-col items-center gap-3 xl:mt-10 xl:my-24 overflow-hidden'>
                <p
                    onClick={() => setState({ ...state, archiveOpen: !archiveOpen })}
                    className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 z-10 lg:text-lg xl:text-xl w-fit leading-loose hover:cursor-pointer'>Archive Project</p>
                <motion.div
                    initial={{
                        width: '0%',
                    }}

                    animate={{
                        width: archiveOpen ? '95%' : '25%',
                        transition: {
                            type: 'spring',
                        }
                    }}

                    className='border-t-2 border-blue-500'>

                </motion.div>
                <div className='w-full md:max-w-md lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-10 py-5'>
                    <AnimatePresence mode='popLayout'>
                        {archiveOpen && (
                            DataProject.map((data, index) => (
                                data.category == 'archive' && (
                                    <Card
                                        key={index}
                                        image={data.image}
                                        title={data.title}
                                        desc={data.desc}
                                        hosting={data.hosting}
                                        github={data.github}
                                        active={data.active}
                                        date={data.date}
                                        teams={data.teams}
                                        logo={data.logo}
                                        stack={data.stack}
                                        delay={data.delay}
                                    />
                                )
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </div>
    )
}

export default Project