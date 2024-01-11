import React from 'react'
import DataProject from '../assets/data/project'
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

// shadcn UI
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const Project = () => {
    return (
        <div className='w-full min-h-screen relative overflow-x-hidden container mx-auto flex flex-col mt-10 md:my-24 gap-10 xl:gap-0 px-5 md:px-10'>
            <p className='text-zinc-900/20 absolute text-9xl w-full top-0'>My Projects</p>
            <p className='text-slate-200 z-10 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>What I've Done</p>
            <div className='w-full md:max-w-md lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-10 xl:mt-10'>
                {DataProject.map((data, index) => (
                    <Card
                        image={data.image}
                        title={data.title}
                        desc={data.desc}
                        hosting={data.hosting}
                        github={data.github}
                        active={data.active}
                        date={data.date}
                        teams={data.teams}
                        logo={data.logo}
                    />
                ))}
            </div>
        </div>
    )
}

const Card = ({ logo, image, title, desc, hosting, github, date, category, teams, active }) => {
    const link = (e) => {
        window.open(e)
    }
    return (
        <div className='max-w-sm min-w-full mx-auto flex flex-col border border-slate-200/20 rounded'>
            <div className='w-full h-52' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

            </div>
            <div className='w-full max-h-80 px-3 md:px-5 py-5 md:py-6 flex flex-col justify-between gap-5'>
                <div className='w-full min-h-40 flex flex-col gap-5'>
                    <div className='w-full flex gap-2 justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <p className='text-slate-200 text-sm lg:text-base font-semibold'>{title}</p>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`w-2 h-2 border border-white ${active ? "bg-green-600" : "bg-red-600"}  rounded-full`}>

                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-zinc-950 p-2 border border-slate-200/30">
                                        {active ? (
                                            <p className='text-xs'>online</p>
                                        ) : (
                                            <p className='text-xs'>offline</p>
                                        )}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>


                        </div>
                        <div className='w-10 h-10 rounded-full' style={{ backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                        </div>
                    </div>
                    {desc && (
                        <p className='text-slate-200 text-xs indent-5 text-justify line-clamp-5'>{desc}</p>
                    )}
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <div className='w-full flex items-center gap-5'>
                        <div className='w-5 h-5 flex justify-center items-center'>
                            <CiGlobe className='inline-block text-slate-200 w-full h-full' />
                        </div>
                        {hosting != '-' ? (
                            <p onClick={() => link(hosting)} className='text-xs text-slate-200 hover:underline hover:cursor-pointer'>{hosting}</p>
                        ) : (
                            <p className='text-xs text-slate-200 hover:underline hover:cursor-pointer'>{hosting}</p>
                        )}
                    </div>
                    <div className='w-full flex items-center gap-5'>
                        <div className='w-5 h-5 flex justify-center items-center'>
                            <FaGithub className='inline-block text-slate-200 w-full h-full' />
                        </div>
                        {github != '-' ? (
                            <p onClick={() => link(github)} className='text-xs w-3/4 text-slate-200 hover:underline hover:cursor-pointer line-clamp-1'>{github}</p>
                        ) : (
                            <p className='text-xs w-3/4 text-slate-200 hover:underline  line-clamp-1'>{github}</p>
                        )}
                    </div>
                    <div className='w-full flex items-center justify-between mt-5'>
                        <p className='text-slate-500 text-xs'>{date}</p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className='w-5 h-5 flex justify-center items-center'>
                                        <RiTeamFill className='inline-block text-slate-200 w-full h-full' />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-zinc-950 p-5 border border-slate-200/30">
                                    <div className='w-full flex flex-col gap-2'>
                                        {teams.map((team, index) => (
                                            <div className='w-full flex gap-2'>
                                                <p className='text-xs lg:text-sm'>{team.name} as a </p>
                                                <p className='text-xs lg:text-sm'>{team.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project