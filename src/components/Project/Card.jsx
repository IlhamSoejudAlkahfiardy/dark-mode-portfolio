import { motion } from 'framer-motion';
import React from 'react'

import { FaGithub } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const Card = ({ logo, image, title, desc, hosting, github, date, category, teams, stack, active, delay }) => {
    const link = (e) => {
        window.open(e)
    }
    return (

        <motion.div
            layout
            initial={{
                // scale: .7,
                opacity: 0
            }}

            animate={{
                // scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring',
                    delay: delay
                }
            }}

            exit={{
                opacity: 0,
                transition: {
                    delay: delay
                }
            }}

            whileHover={{
                y: [0, -5, 0],
                transition: {
                    repeat: Infinity,
                    delay: 0,
                    duration: 1.5
                }
            }}

            whileTap={{
                scale: 0.95,
                transition: {
                    delay: 0
                }
            }}

            className='flex flex-col max-w-sm min-w-full mx-auto transition-colors duration-500 border rounded shadow-md dark:border-slate-200/20 border-zinc-950/30 group'>
            {active ? (
                <div onClick={() => link(hosting)} className='w-full transition-all duration-500 h-52 hover:opacity-85 hover:cursor-pointer' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                </div>
            ) : (
                <div className='w-full transition-all duration-500 h-52 hover:opacity-85 hover:cursor-pointer' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                </div>
            )}
            <div className='flex flex-col justify-between w-full gap-5 px-3 py-5 transition-colors duration-500 min-h-80 md:px-5 md:py-6 dark:bg-zinc-950 bg-slate-100'>
                <div className='flex flex-col w-full gap-5 min-h-40'>
                    <div className='flex items-center justify-between w-full gap-2'>
                        <div className='flex items-center gap-2'>
                            <p className='text-sm font-semibold transition-colors duration-500 dark:text-slate-200 text-zinc-950 lg:text-base'>{title}</p>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`w-2 h-2 border border-white ${active ? "bg-green-600" : "bg-red-600"}  rounded-full`}>

                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="p-2 border dark:bg-zinc-950 bg-slate-100 dark:border-slate-200/30 border-zinc-950/30">
                                        {active ? (
                                            <p className='text-xs transition-colors duration-500 dark:text-slate-200 text-zinc-950'>online</p>
                                        ) : (
                                            <p className='text-xs transition-colors duration-500 dark:text-slate-200 text-zinc-950'>offline</p>
                                        )}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>


                        </div>
                        <div className='w-10 h-10 rounded-full' style={{ backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                        </div>
                    </div>
                    {desc && (
                        <p className='text-xs text-justify transition-colors duration-500 dark:text-slate-200 text-zinc-950 indent-5 line-clamp-5'>{desc}</p>
                    )}
                </div>
                <div className='flex flex-col w-full gap-2 '>
                    <div className='flex items-center w-full gap-5'>
                        <div className='flex items-center justify-center w-5 h-5'>
                            <CiGlobe className='inline-block w-full h-full transition-colors duration-500 dark:text-slate-200 text-zinc-950' />
                        </div>
                        {hosting != '-' ? (
                            <p onClick={() => link(hosting)} className='text-xs transition-colors duration-500 dark:text-slate-200 text-zinc-950 hover:underline hover:cursor-pointer'>{hosting}</p>
                        ) : (
                            <p className='text-xs transition-colors duration-500 dark:text-slate-200 text-zinc-950 hover:underline hover:cursor-pointer'>{hosting}</p>
                        )}
                    </div>
                    <div className='flex items-center w-full gap-5'>
                        <div className='flex items-center justify-center w-5 h-5'>
                            <FaGithub className='inline-block w-full h-full transition-colors duration-500 dark:text-slate-200 text-zinc-950' />
                        </div>
                        {github != '-' ? (
                            <p onClick={() => link(github)} className='w-3/4 text-xs transition-colors duration-500 dark:text-slate-200 text-zinc-950 hover:underline hover:cursor-pointer line-clamp-1'>{github}</p>
                        ) : (
                            <p className='w-3/4 text-xs transition-colors duration-500 dark:text-slate-200 text-zinc-950 hover:underline line-clamp-1'>{github}</p>
                        )}
                    </div>
                    <div className='flex items-center w-full gap-2 mt-5'>

                        {stack.map((data, index) => (
                            <div className='flex items-center justify-center w-6 h-6 ' key={index}>
                                <TooltipProvider>
                                    <Tooltip >
                                        <TooltipTrigger className="w-full h-full">
                                            {data.tech}
                                        </TooltipTrigger>
                                        <TooltipContent className="transition-colors duration-500 dark:bg-zinc-950 bg-slate-200 dark:text-slate-200 text-zinc-950 dark:border-slate-200/30 border-zinc-950/30">
                                            {data.name}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        ))}

                    </div>
                    <div className='flex items-center justify-between w-full mt-5'>
                        <p className='text-xs text-slate-500'>{date}</p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className='flex items-center justify-center w-5 h-5'>
                                        <RiTeamFill className='inline-block w-full h-full transition-colors duration-500 dark:text-slate-200 text-zinc-950' />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent className="z-50 p-5 border dark:bg-zinc-950 bg-slate-100 dark:border-slate-200/30 border-zinc-950/30">
                                    <div className='flex flex-col w-full gap-2'>
                                        {teams.map((team, index) => (
                                            <div className='flex w-full gap-2' key={index}>
                                                <p className='text-xs transition-colors duration-500 lg:text-sm dark:text-slate-200 text-zinc-950'>{team.name} as a </p>
                                                <p className='text-xs transition-colors duration-500 lg:text-sm dark:text-slate-200 text-zinc-950'>{team.role}</p>
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

export default Card