import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Data
import DataSkill from '../../assets/data/skill'


// Assets
import ImageProfile from '../../assets/images/profile/profil2.png'

// Icons
import { LiaHandPointer } from "react-icons/lia";
import { CiStar } from "react-icons/ci";

const Hero = () => {
    const textSkill = ['Front End Developer', 'UI / UX Designer', 'Junior Back End Devs']


    const [state, setState] = useState({
        currentTextIndex: 0,
        currentSkillSetIndex: 0,
        innerWidth: 0,
    })

    const { currentTextIndex, currentSkillSetIndex, innerWidth } = state

    const SVGanimation = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },

        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut'
            }
        }
    }

    useEffect(() => {
        // Mengganti indeks teks setiap 2 detik
        const intervalId = setInterval(() => {
            setState((prevState) => ({
                ...prevState,
                currentTextIndex: (prevState.currentTextIndex + 1) % textSkill.length
            }))
        }, 2000);

        // setInnerWidth(window.innerWidth)
        setState((prevState) => ({
            ...prevState,
            innerWidth: window.innerWidth
        }))

        window.addEventListener('resize', () => {
            setState((prevState) => ({
                ...prevState,
                innerWidth: window.innerWidth
            }))
        })

        window.removeEventListener('resize', () => {
            setState((prevState) => ({
                ...prevState,
                innerWidth: window.innerWidth
            }))
        })

        // Membersihkan interval saat komponen dibongkar
        return () => clearInterval(intervalId);
    }, [textSkill.length]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setState((prevState) => ({
                ...prevState,
                currentSkillSetIndex: (prevState.currentSkillSetIndex + 1) % DataSkill.length
            }))
        }, 1000)

        // Membersihkan interval saat komponen dibongkar
        return () => clearInterval(intervalId);
    }, [DataSkill.length])



    return (
        <div id='landing-page' className='w-full xl:h-[650px] 2xl:h-[800px] xl:justify-center container mx-auto flex flex-col mt-10 md:mt-24 xl:mt-0 gap-10 xl:gap-0 px-5 md:px-10'>
            <div className='w-full flex items-center h-fit'>
                <motion.div
                    initial={{
                        scale: 0
                    }}

                    whileInView={{
                        scale: 1
                    }}

                    transition={{
                        type: 'spring'
                    }}
                    className='w-2/3 flex flex-col gap-3'>
                    <p className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 lg:text-lg xl:text-xl'>Hi Everyone, my name is</p>

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
                        className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 text-4xl xl:text-5xl font-bold  w-fit'>
                        Alkahfiardy
                    </motion.p>

                    <p className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 lg:text-lg xl:text-xl'>
                        Im a
                    </p>

                    <motion.p
                        id='text-skill'
                        key={`text-skill-${currentTextIndex}`}

                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}

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
                        className=' text-blue-500 text-4xl xl:text-5xl font-bold hover:cursor-pointer w-fit'>
                        {textSkill[currentTextIndex]}
                    </motion.p>

                    <p className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 lg:text-lg xl:text-xl'>and my skills is</p>

                    {/* <AnimatePresence> */}
                    <motion.p
                        id='text-skill-set'
                        key={`text-skill-set-${currentSkillSetIndex}`}

                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}

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

                        className=' text-blue-500 text-xl xl:text-2xl font-bold w-fit hover:cursor-pointer flex items-center gap-5'>
                        <div className='w-10 h-10 flex justify-center items-center'>
                            {DataSkill[currentSkillSetIndex].logo}
                        </div>
                        {DataSkill[currentSkillSetIndex].title}
                    </motion.p>
                    {/* </AnimatePresence> */}
                </motion.div>

                <div className='w-1/3 lg:w-1/4 h-48 flex justify-center items-center relative'>
                    <motion.svg
                        initial={{
                            x: 0,
                            scale: 0,
                            rotate: -180
                        }}

                        whileInView={{
                            x: innerWidth <= 768 ? -25 : -50,
                            rotate: 90,
                            scale: 1,
                            transition: {
                                type: 'spring',
                                delay: .2,
                            }
                        }}

                        className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            className='' fill="#3B82F6" d="M29.8,-47.5C41.9,-44.7,57.1,-43.3,67.8,-35.6C78.4,-27.9,84.5,-13.9,82.9,-0.9C81.3,12.1,72.1,24.2,61.7,32.3C51.3,40.5,39.8,44.7,29.3,53C18.8,61.3,9.4,73.8,-2.9,78.8C-15.1,83.8,-30.3,81.2,-38,71.3C-45.8,61.4,-46.2,44.2,-54.3,31.1C-62.3,17.9,-78.1,9,-79.2,-0.7C-80.4,-10.3,-67,-20.6,-53.5,-24.2C-39.9,-27.9,-26.2,-24.8,-17.3,-29.4C-8.3,-34,-4.2,-46.3,2.4,-50.4C8.9,-54.5,17.8,-50.3,29.8,-47.5Z" transform="translate(100 100)" />
                    </motion.svg>

                    <motion.svg
                        initial={{
                            scale: 0,
                            x: 0,
                            y: 0,
                        }}

                        whileInView={{
                            x: innerWidth <= 768 ? 25 : 50,
                            y: innerWidth <= 768 ? 75 : 150,
                            scale: 1,
                            transition: {
                                type: 'spring',
                                delay: .3,
                            }
                        }}

                        className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#3B82F6" d="M25.9,-46.2C35.5,-39.4,46.4,-36.2,53.1,-29.1C59.9,-22,62.4,-11,62.6,0.1C62.7,11.2,60.4,22.3,57.2,35.6C54,48.9,50,64.2,40.3,67.5C30.6,70.7,15.3,61.8,6.5,50.6C-2.4,39.4,-4.7,25.8,-13.1,21.8C-21.4,17.8,-35.7,23.3,-49.8,21.3C-63.9,19.2,-77.8,9.6,-76.1,1C-74.4,-7.7,-57.2,-15.4,-46.3,-23.1C-35.5,-30.7,-31,-38.4,-24.4,-46.8C-17.7,-55.2,-8.9,-64.4,-0.3,-63.8C8.2,-63.2,16.4,-52.9,25.9,-46.2Z" transform="translate(100 100)" />
                    </motion.svg>

                    <motion.img
                        initial={{
                            scale: 0
                        }}

                        whileInView={{
                            scale: 1.3
                        }}

                        drag
                        dragConstraints={{
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        }}
                        dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                        dragElastic={0.3}

                        whileTap={{
                            scale: 1.5,
                            cursor: "grabbing"
                        }}

                        whileHover={{
                            cursor: "grab"
                        }}

                        transition={{
                            type: "spring",
                        }}

                        src={ImageProfile} className='dark:grayscale transition-colors duration-500' alt="" />
                </div>

            </div>

            <div className='w-full flex flex-col gap-5'>

                <motion.div
                    initial={{
                        scale: 0
                    }}

                    whileInView={{
                        scale: 1
                    }}

                    transition={{
                        type: 'spring',
                        delay: .3
                    }}

                    className='w-full mt-16 flex flex-col md:flex-row gap-5'>

                    <motion.div
                        whileTap={{
                            scale: .9,
                            transition: {
                                type: 'spring'
                            }
                        }}
                    >
                        <Link to="/project" className='w-fit text-slate-200 text-sm bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-slate-200/20 px-4 py-3 rounded flex items-center gap-2 hover:from-blue-600 hover:to-blue-700  hover:cursor-pointer'>
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
                    >
                        <Link to="/experience" className='w-fit text-blue-500 text-sm dark:bg-zinc-950 bg-slate-200 border-2 border-blue-500 transition-colors duration-500 px-4 py-3 rounded flex items-center gap-2'>
                            See my experience
                            <CiStar className='inline-block' />
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero