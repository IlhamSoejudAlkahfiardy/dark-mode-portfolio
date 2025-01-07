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
        <div className='container flex flex-col w-full min-h-screen gap-10 px-5 mx-auto overflow-x-hidden xl:gap-0 md:px-10'>

            {/* <div className='flex flex-col items-center w-full gap-2 my-24 xl:mt-10'>
                <p
                    onClick={() => setState({ ...state, currentOpen: !currentOpen })}
                    className='z-10 leading-loose transition-colors duration-500 dark:text-slate-200 text-zinc-700 w-fit lg:text-lg xl:text-xl hover:cursor-pointer'>
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

                <div className='z-10 grid w-full grid-cols-1 gap-10 py-5 mx-auto md:max-w-md lg:max-w-full lg:grid-cols-2 xl:grid-cols-3'>
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
            </div> */}

            <div className='flex flex-col items-start w-full gap-3 xl:mt-10 xl:my-24'>
                <p
                    onClick={() => setState({ ...state, selectedOpen: !selectedOpen })}
                    className='z-10 w-full text-2xl font-medium leading-loose tracking-wide transition-colors duration-500 dark:text-slate-200 text-zinc-700 lg:text-3xl xl:text-4xl hover:cursor-pointer'>Recent Projects</p>
                <motion.div
                    initial={{
                        width: '0%',
                    }}

                    animate={{
                        width: selectedOpen ? '100%' : '20%',
                        transition: {
                            type: 'spring',
                        }
                    }}

                    className='border-t-2 border-zinc-700'>

                </motion.div>

                <div className='z-10 grid w-full grid-cols-1 gap-10 py-5 mx-auto md:max-w-md lg:max-w-full lg:grid-cols-2 xl:grid-cols-3'>
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

            <div className='flex flex-col items-start w-full gap-3 overflow-hidden xl:mt-10 xl:my-24'>
                <p
                    onClick={() => setState({ ...state, archiveOpen: !archiveOpen })}
                    className='z-10 w-full text-2xl font-medium leading-loose tracking-wide transition-colors duration-500 dark:text-slate-200 text-zinc-700 lg:text-3xl xl:text-4xl hover:cursor-pointer'>Archive Projects</p>
                <motion.div
                    initial={{
                        width: '0%',
                    }}

                    animate={{
                        width: archiveOpen ? '100%' : '20%',
                        transition: {
                            type: 'spring',
                        }
                    }}

                    className='border-t-2 border-zinc-700'>

                </motion.div>
                <div className='z-10 grid w-full grid-cols-1 gap-10 py-5 mx-auto md:max-w-md lg:max-w-full lg:grid-cols-2 xl:grid-cols-3'>
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