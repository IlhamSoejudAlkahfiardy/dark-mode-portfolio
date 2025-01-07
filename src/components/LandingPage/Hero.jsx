import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

// Data
import DataSkill from '../../assets/data/skill'

// Assets
// import ImageProfile from '../../assets/images/profile/profil2.png'
import RunningSkill from '../RunningSkill';

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";


const Hero = () => {
    const textSkill = ['Front End Developer', 'UI / UX Designer']

    const [state, setState] = useState({
        currentTextIndex: 0,
        currentSkillSetIndex: 0,
        innerWidth: 0,
    })

    const { currentTextIndex, currentSkillSetIndex, innerWidth } = state

    console.log(DataSkill.length);

    return (
        <div id='landing-page' className='w-full xl:h-[650px] 2xl:h-[800px] xl:justify-center container mx-auto flex flex-col mt-10 md:mt-24 xl:mt-0 gap-10 px-5 md:px-10'>
            <div className='flex flex-col items-start w-full gap-0'>
                <motion.div

                    whileInView={{
                        scale: 1
                    }}

                    transition={{
                        type: 'spring'
                    }}

                    viewport={{ once: true }}

                    className='flex flex-col w-2/3 gap-3'>
                    <p className='transition-colors duration-500 dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl'>Hi Everyone, my name is</p>

                    <motion.p
                        drag
                        dragConstraints={{
                            top: -20,
                            right: 20,
                            bottom: 20,
                            left: -20,
                        }}
                        dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                        dragElastic={0.2}

                        whileHover={{
                            cursor: 'grab'
                        }}

                        whileTap={{
                            cursor: 'grabbing'
                        }}

                        transition={{
                            type: 'spring'
                        }}

                        viewport={{ once: true }}

                        className='flex items-center gap-3 text-4xl font-bold transition-colors duration-500 dark:text-slate-200 text-zinc-700 xl:text-5xl w-fit'>
                        <div className='w-3 rounded-full bg-emerald-400 aspect-square'>

                        </div>
                        Alkahfiardy
                    </motion.p>

                    <p className='transition-colors duration-500 dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl'>
                        Im a
                    </p>

                    <div className='min-h-[91px] md:min-h-[51px]'>
                        <p className='text-4xl font-bold text-blue-500 xl:text-5xl hover:cursor-pointer w-fit'>
                            <Typewriter
                                words={['Front End Developer', 'UI / UX Designer', 'Fullstack Developer']}
                                loop={true}
                                typeSpeed={50}
                                deleteSpeed={50}
                                delaySpeed={900}
                            />
                        </p>
                    </div>

                    <p className='transition-colors duration-500 dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl'>and my tech stack is</p>

                </motion.div>

                <RunningSkill />


            </div>

            <div className='flex flex-col w-full gap-5 mt-0'>

                {/* <motion.div
                    className='flex flex-col w-full gap-5 md:flex-row'>

                    <motion.div
                        whileTap={{
                            scale: .9,
                            transition: {
                                type: 'spring'
                            }
                        }}

                        viewport={{ once: true }}
                    >
                        <Link to="/project" className='flex items-center justify-center w-full gap-2 px-4 py-3 text-sm border-2 rounded text-slate-200 bg-gradient-to-r from-blue-500 to-blue-600 border-slate-200/20 hover:from-blue-600 hover:to-blue-700 hover:cursor-pointer'>
                            See my recent projects
                            <LiaHandPointer className='inline-block' />
                        </Link>
                    </motion.div>

                    <motion.div

                        whileHover={{
                            scale: 1.05,
                            transition: {
                                type: 'spring'
                            }
                        }}

                        whileTap={{
                            scale: .9,
                            transition: {
                                type: 'spring'
                            }
                        }}

                        viewport={{ once: true }}
                    >
                        <Link to="/experience" className='flex items-center justify-center w-full gap-2 px-4 py-3 text-sm text-blue-500 transition-colors duration-500 border-2 border-blue-500 rounded dark:bg-zinc-950 bg-slate-200'>
                            See my experience
                            <CiStar className='inline-block' />
                        </Link>
                    </motion.div>
                </motion.div> */}

                {/* new button */}
                <Button href={'/project'} text={'See my recent projects'}/>
                <Button href={'/experience'} text={'See my experience'}/>

            </div>
        </div>
    )
}

const Button = ({text, href}) => {
    return (
        <Link to={href} className='flex justify-between w-full p-3 border-b md:w-3/4 xl:w-1/2 group border-blue-500/50'>
            <p className='text-sm transition-all duration-500 text-slate-200 group-hover:ml-5'>{text}</p>
            <IoIosArrowRoundForward className='text-blue-500 scale-125' />
        </Link>
    )
}

export default Hero