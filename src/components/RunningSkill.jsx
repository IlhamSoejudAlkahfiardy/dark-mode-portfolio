import React, { useState } from 'react'
import DataSkill from '../assets/data/skill'

const RunningSkill = () => {

    const [hoverSkill, setHoverSkill] = useState({
        skill1: true,
        skill2: true,
    })

    return (
        <>
            <div className='flex items-center w-full lg:w-3/4 xl:w-1/2 gap-12 py-5 overflow-hidden whitespace-nowrap relative before:absolute before:z-10 before:inset-y-0 before:left-0 before:w-[100px] before:bg-gradient-to-r before:from-slate-200 before:to-transparent  after:absolute after:inset-y-0 after:right-0 after:w-[100px] after:bg-gradient-to-l after:from-slate-200 after:to-transparent dark:before:from-zinc-950 dark:after:from-zinc-950'>
                <div
                    className={`flex items-center gap-12 whitespace-nowrap text-skill `}
                >
                    {DataSkill.map((skill, index) => (
                        index < 16 &&
                        <div className={`flex justify-center h-12 aspect-square text-skill`}>
                            <div className='w-full h-auto'>
                                {skill.logo}
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className={`flex items-center gap-12 text-skill whitespace-nowrap`}>
                    {DataSkill.map((skill, index) => (
                        index < 16 &&
                        <div className={`flex justify-center h-12 aspect-square text-skill`}>
                            <div className='w-full h-auto'>
                                {skill.logo}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center w-full lg:w-3/4 xl:w-1/2 gap-12 py-5 overflow-hidden whitespace-nowrap relative before:absolute before:z-10 before:inset-y-0 before:left-0 before:w-[100px] before:bg-gradient-to-r before:from-slate-200 before:to-transparent  after:absolute after:inset-y-0 after:right-0 after:w-[100px] after:bg-gradient-to-l after:from-slate-200 after:to-transparent dark:before:from-zinc-950 dark:after:from-zinc-950'>

                <div className='flex items-center gap-12 whitespace-nowrap text-skill-right'>
                    {DataSkill.map((skill, index) => (
                        index >= 16 &&
                        <div className='flex justify-center h-12 aspect-square text-skill-right'>
                            <div className='w-full h-auto'>
                                {skill.logo}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center gap-12 text-skill-right whitespace-nowrap'>
                    {DataSkill.map((skill, index) => (
                        index >= 16 &&
                        <div className='flex justify-center h-12 aspect-square text-skill-right'>
                            <div className='w-full h-auto'>
                                {skill.logo}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes slide {
                    from {
                        transform: translateX(0);
                    }
                    to{
                        transform: translateX(-100%);
                    }
                }
                
                .text-skill {
                    animation: slide 20s infinite linear;
                }
                    
                @keyframes slide-right {
                    from {
                         transform: translateX(-100%);
                    }
                    to{
                        transform: translateX(0);
                    }
                }
                .text-skill-right {
                    animation: slide-right 20s infinite linear;
                }
            `}</style>
        </>
    )
}

export default RunningSkill