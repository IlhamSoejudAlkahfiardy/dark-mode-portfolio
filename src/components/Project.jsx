import React, { useState } from 'react'
import DataProject from '../assets/data/project'
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaCaretRight } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

// shadcn UI
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const Project = () => {
    const [currentOpen, setCurrentOpen] = useState(true)
    const [latestOpen, setLatestOpen] = useState(true)
    const [archiveOpen, setArchiveOpen] = useState(true)

    return (
        <div className='w-full min-h-screen relative overflow-x-hidden container mx-auto flex flex-col mt-10 md:my-24 gap-10 xl:gap-0 px-5 md:px-10'>

            <p className='dark:text-slate-200 text-zinc-950 transition-colors duration-500 z-10 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>What I've Done</p>

            <div className='w-full flex flex-col gap-5 xl:mt-10 '>
                <motion.div layout className='w-full flex gap-5 hover:cursor-pointer' onClick={() => setCurrentOpen(!currentOpen)}>
                    <p className='dark:text-slate-200 text-zinc-950 text-xs w-24 transition-colors duration-500 lg:w-32 lg:text-sm'>Current Project</p>
                    <FaCaretRight className={`inline-block scale-125 dark:text-slate-200 text-zinc-950 transition-all duration-500 ${currentOpen ? "rotate-90" : "rotate-0"}`} />
                </motion.div>
                <div className='w-full md:max-w-md lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-10 '>
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

            <div className='w-full flex flex-col gap-5 xl:mt-10'>
                <motion.div layout className='w-full flex gap-5 hover:cursor-pointer' onClick={() => setLatestOpen(!latestOpen)}>
                    <p className='dark:text-slate-200 text-zinc-950 text-xs w-24 transition-colors duration-500 lg:w-32 lg:text-sm'>Selected Project</p>
                    <FaCaretRight className={`inline-block scale-125 dark:text-slate-200 text-zinc-950 transition-transform duration-500 ${latestOpen ? "rotate-90" : "rotate-0"}`} />
                </motion.div>
                <div className='w-full md:max-w-md lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-10 '>
                    <AnimatePresence mode='popLayout'>
                        {latestOpen && (
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

            <motion.div layout className='w-full flex flex-col gap-5 xl:mt-10 overflow-hidden'>
                <motion.div layout className='w-full flex gap-5 hover:cursor-pointer' onClick={() => setArchiveOpen(!archiveOpen)}>
                    <p className='dark:text-slate-200 text-zinc-950 text-xs w-24 transition-colors duration-500 lg:w-32 lg:text-sm'>Archive Project</p>
                    <FaCaretRight className={`inline-block scale-125 dark:text-slate-200 text-zinc-950 transition-transform duration-500 ${archiveOpen ? "rotate-90" : "rotate-0"}`} />
                </motion.div>
                <div className='w-full md:max-w-md lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-10 '>
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
            </motion.div>

        </div>
    )
}

const Card = ({ logo, image, title, desc, hosting, github, date, category, teams, stack, active, delay }) => {
    const link = (e) => {
        window.open(e)
    }
    return (

        <motion.div
            layout
            initial={{
                scale: 0
            }}

            animate={{
                scale: 1,
                transition: {
                    type: 'spring',
                    delay: delay
                }
            }}

            exit={{
                scale: 0
            }}

            whileHover={{
                y: [0, -20, 0],
                transition: {
                    repeat:Infinity,
                    delay: 0,
                    duration:1.5
                }
            }}

            whileTap={{
                scale: 0.95,
                transition: {
                    delay: 0
                }
            }}

            className='max-w-sm min-w-full mx-auto flex flex-col border dark:border-slate-200/20 border-zinc-950/30 rounded shadow-md transition-colors duration-500'>
            {active ? (
                <div onClick={() => link(hosting)} className='w-full h-52 hover:opacity-85 hover:cursor-pointer transition-all' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                </div>
            ) : (
                <div className='w-full h-52' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                </div>
            )}
            <div className='w-full min-h-80 px-3 md:px-5 py-5 md:py-6 flex flex-col justify-between gap-5 dark:bg-zinc-950 bg-slate-100 transition-colors duration-500'>
                <div className='w-full min-h-40 flex flex-col gap-5'>
                    <div className='w-full flex gap-2 justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <p className='dark:text-slate-200 text-zinc-950 transition-colors duration-500 text-sm lg:text-base font-semibold'>{title}</p>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`w-2 h-2 border border-white ${active ? "bg-green-600" : "bg-red-600"}  rounded-full`}>

                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="dark:bg-zinc-950 bg-slate-100 p-2 border dark:border-slate-200/30 border-zinc-950/30">
                                        {active ? (
                                            <p className='text-xs dark:text-slate-200 text-zinc-950 transition-colors duration-500'>online</p>
                                        ) : (
                                            <p className='text-xs dark:text-slate-200 text-zinc-950 transition-colors duration-500'>offline</p>
                                        )}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>


                        </div>
                        <div className='w-10 h-10 rounded-full' style={{ backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                        </div>
                    </div>
                    {desc && (
                        <p className='dark:text-slate-200 text-zinc-950 transition-colors duration-500 text-xs indent-5 text-justify line-clamp-5'>{desc}</p>
                    )}
                </div>
                <div className='w-full flex flex-col gap-2 '>
                    <div className='w-full flex items-center gap-5'>
                        <div className='w-5 h-5 flex justify-center items-center'>
                            <CiGlobe className='inline-block dark:text-slate-200 text-zinc-950 transition-colors duration-500 w-full h-full' />
                        </div>
                        {hosting != '-' ? (
                            <p onClick={() => link(hosting)} className='text-xs dark:text-slate-200 text-zinc-950 transition-colors duration-500 hover:underline hover:cursor-pointer'>{hosting}</p>
                        ) : (
                            <p className='text-xs dark:text-slate-200 text-zinc-950 transition-colors duration-500 hover:underline hover:cursor-pointer'>{hosting}</p>
                        )}
                    </div>
                    <div className='w-full flex items-center gap-5'>
                        <div className='w-5 h-5 flex justify-center items-center'>
                            <FaGithub className='inline-block dark:text-slate-200 text-zinc-950 transition-colors duration-500 w-full h-full' />
                        </div>
                        {github != '-' ? (
                            <p onClick={() => link(github)} className='text-xs w-3/4 dark:text-slate-200 text-zinc-950 transition-colors duration-500 hover:underline hover:cursor-pointer line-clamp-1'>{github}</p>
                        ) : (
                            <p className='text-xs w-3/4 dark:text-slate-200 text-zinc-950 transition-colors duration-500 hover:underline  line-clamp-1'>{github}</p>
                        )}
                    </div>
                    <div className='w-full flex items-center gap-2 mt-5'>

                        {stack.map((data, index) => (
                            <div className='w-6 h-6 flex justify-center items-center '>
                                <TooltipProvider>
                                    <Tooltip >
                                        <TooltipTrigger className="w-full h-full">
                                            {data.tech}
                                        </TooltipTrigger>
                                        <TooltipContent className="dark:bg-zinc-950 bg-slate-200 dark:text-slate-200 text-zinc-950 dark:border-slate-200/30 border-zinc-950/30 transition-colors duration-500">
                                            {data.name}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        ))}

                    </div>
                    <div className='w-full flex items-center justify-between mt-5'>
                        <p className='text-slate-500 text-xs'>{date}</p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className='w-5 h-5 flex justify-center items-center'>
                                        <RiTeamFill className='inline-block dark:text-slate-200 text-zinc-950 transition-colors duration-500 w-full h-full' />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent className="dark:bg-zinc-950 bg-slate-100 p-5 z-50 border dark:border-slate-200/30 border-zinc-950/30">
                                    <div className='w-full flex flex-col gap-2'>
                                        {teams.map((team, index) => (
                                            <div className='w-full flex gap-2'>
                                                <p className='text-xs lg:text-sm dark:text-slate-200 text-zinc-950 transition-colors duration-500'>{team.name} as a </p>
                                                <p className='text-xs lg:text-sm dark:text-slate-200 text-zinc-950 transition-colors duration-500'>{team.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Project