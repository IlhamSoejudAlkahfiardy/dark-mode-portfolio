import React, { useState } from 'react'

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import Programmer from '../../assets/images/profile/aboutme.jpg'

// Icons
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const About = () => {

    const [state, setState] = useState({
        about: false,
        github: false,
        gitlab: false,
        ig: false,
        linkedin: false,
        telegram: false,
    })

    const { github, gitlab, ig, linkedin, telegram, about } = state

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const age = currentYear - 2003

    const linkSocmed = (url) => {
        window.open(url)
    }

    return (
        <div className='w-full h-full relative xl:min-h-screen container mx-auto justify-between xl:justify-center flex flex-col mt-24 xl:mt-0 px-5 md:px-10'>
            <motion.p
                drag
                dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}

                initial={{
                    opacity: 0,
                    y: 100
                }}

                whileInView={{
                    y: 0,
                    opacity: 1,
                }}

                whileTap={{
                    opacity: 1.2,
                    scale: 1.2,
                    cursor: 'grabbing'
                }}

                whileHover={{
                    cursor: 'pointer'
                }}

                transition={{
                    type: 'spring',
                    duration: 1.5
                }}
                className='dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl border-b-2 border-blue-500 transition-colors duration-500 w-fit leading-loose xl:py-2'>
                About Me
            </motion.p>

            <div className='w-full flex flex-col lg:flex-row justify-start mt-10 xl:mt-24'>

                <div className='w-full lg:w-1/4 flex'>

                    <motion.div
                        drag
                        dragConstraints={{
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }}
                        dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                        dragElastic={.3}

                        whileHover={{
                            cursor: 'grab'
                        }}

                        whileTap={{
                            cursor: 'grabbing',
                            scale: 1.1
                        }}


                        initial={{
                            opacity: 0,
                            y: 100
                        }}

                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}

                        transition={{
                            type: 'spring',
                            delay: .1,
                            duration: 1.5
                        }}

                        className='w-1/4 lg:w-full aspect-square h-fit rounded-md dark:grayscale' style={{ backgroundImage: `url(${Programmer})`, backgroundPosition: 'top', backgroundSize: 'cover' }} />

                    <motion.div
                        initial={{
                            x: 300,
                            opacity: 0
                        }}

                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}

                        transition={{
                            type: 'spring',
                            duration: 1.5
                        }}

                        className='w-3/4 flex lg:hidden flex-col gap-6 pl-10 md:pl-16'>
                        <div

                            className='flex flex-col gap-2'>
                            <p className=' text-slate-500 text-xs'>
                                Name
                            </p>
                            <p className='font-bold dark:text-slate-200 text-zinc-700 transition-colors duration-500'>
                                Ilham Soejud Alkahfiardy
                            </p>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className=' text-slate-500 text-xs'>
                                Address
                            </p>
                            <p className='font-bold dark:text-slate-200 text-zinc-700 transition-colors duration-500'>
                                Malang, East Java
                            </p>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className=' text-slate-500 text-xs'>
                                Age
                            </p>
                            <p className='font-bold dark:text-slate-200 text-zinc-700 transition-colors duration-500'>
                                {age} y.o at 30 May
                            </p>

                        </div>
                    </motion.div>

                </div>

                <motion.div
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

                    className='w-full flex flex-col gap-10 lg:pl-16'>
                    <div
                        className='hidden w-full lg:flex flex-col lg:flex-row lg:justify-between gap-2'>
                        <div className='flex flex-col gap-2'>
                            <p className=' text-slate-500 text-xs lg:text-sm xl:text-base '>
                                Name
                            </p>
                            <p className='font-bold dark:text-slate-200 text-zinc-700 transition-colors duration-500 lg:text-lg xl:text-xl'>
                                Ilham Soejud Alkahfiardy
                            </p>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className=' text-slate-500 text-xs lg:text-sm xl:text-base '>
                                Address
                            </p>
                            <p className='font-bold dark:text-slate-200 text-zinc-700 transition-colors duration-500 lg:text-lg xl:text-xl'>
                                Malang, East Java
                            </p>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className=' text-slate-500 text-xs lg:text-sm xl:text-base '>
                                Age
                            </p>
                            <p className='font-bold dark:text-slate-200 text-zinc-700 transition-colors duration-500 lg:text-lg xl:text-xl'>
                                {age} y.o at 30 May
                            </p>

                        </div>
                    </div>

                    <div className='flex flex-col gap-2 mt-10 lg:mt-0'>

                        <p className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 text-sm xl:text-base indent-4 text-justify leading-loose'>Hello! I am currently pursuing my studies at <span className='text-blue-500'>Merdeka Malang University</span>, where I am enrolled in the <span className='text-blue-500'>Faculty of Information Technology</span>, specifically in the <span className='text-blue-500'>D3 Information Systems program.</span> </p>

                        <AnimatePresence mode='popLayout'>
                            {state.about && (
                                <motion.div
                                    layout
                                    initial={{
                                        opacity: 0,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        transition: {
                                            type: 'spring',
                                        }
                                    }}

                                    exit={{
                                        opacity: 0
                                    }}
                                    className='flex flex-col gap-2'
                                >
                                    <p className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 text-sm xl:text-base indent-4 text-justify leading-loose'>My academic journey has fostered a strong interest in <span className='text-blue-500'>programming and web development</span>. Proficient in technologies like <span className='text-blue-500'>React.js, Tailwind CSS, CodeIgniter, and Laravel,</span> I am passionate about crafting innovative solutions and user-friendly interfaces. </p>

                                    <p className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 text-sm xl:text-base indent-4 text-justify leading-loose'>Beyond coding, I find joy in exploring the world of music, a hobby that complements my creative mindset. Through hands-on experiences and continuous learning, I am dedicated to evolving as a tech enthusiast and contributing to the ever-evolving landscape of information technology.  </p>
                                </motion.div>
                            )}

                            <div

                                onClick={() => setState({ ...state, about: !about })}
                                className='w-full py-2 hover:cursor-pointer flex justify-center items-center border border-zinc-950/30 dark:border-slate-200/30 opacity-50 hover:opacity-100 transition-all duration-300 my-5'>

                                <motion.p 
                                layout
                                className='text-xs text-zinc-700 dark:text-slate-200 transition-colors duration-500'>
                                    {state.about ? 'Show Less' : 'Show More'}
                                </motion.p>
                            </div>
                        </AnimatePresence>

                    </div>

                    <div className='w-full flex flex-wrap gap-5'>

                        <motion.div
                            initial={{
                                y: 100,
                                opacity: 0
                            }}

                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    duration: 1.5,
                                    delay: .1
                                }
                            }}

                            whileHover={{
                                cursor: 'pointer',
                                width: 130
                            }}

                            whileTap={{
                                cursor: 'pointer',
                                width: 130
                            }}

                            layout

                            onMouseEnter={() => setState({ ...state, github: !github })}
                            onMouseLeave={() => setState({ ...state, github: !github })}
                            onClick={() => linkSocmed('https://github.com/IlhamSoejudAlkahfiardy')}

                            className='w-12 h-12 p-2 flex bg-slate-100 rounded-md border border-zinc-950/30'>
                            <FaGithub className='inline-block w-fit h-full text-zinc-900' />

                            {github && (
                                <motion.div
                                    initial={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    animate={{
                                        width: 65,
                                        opacity: 1
                                    }}

                                    exit={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    transition={{
                                        type: 'spring'
                                    }}

                                    className='w-fit flex justify-end items-center'>
                                    <p className='text-sm'>GitHub</p>
                                </motion.div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{
                                y: 100,
                                opacity: 0
                            }}

                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    duration: 1.5,
                                    delay: .2
                                }
                            }}

                            whileHover={{
                                cursor: 'pointer',
                                width: 130
                            }}

                            whileTap={{
                                cursor: 'pointer',
                                width: 130
                            }}

                            layout

                            onMouseEnter={() => setState({ ...state, gitlab: !gitlab })}
                            onMouseLeave={() => setState({ ...state, gitlab: !gitlab })}
                            onClick={() => linkSocmed('https://gitlab.com/alkahfiardyIlhamSoejud')}

                            className='w-12 h-12 p-2 flex bg-slate-100 rounded-md border border-zinc-950/30'>
                            <FaGitlab className='inline-block w-fit h-full text-orange-600' />

                            {gitlab && (
                                <motion.div
                                    initial={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    animate={{
                                        width: 65,
                                        opacity: 1
                                    }}

                                    exit={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    transition={{
                                        type: 'spring'
                                    }}

                                    className='w-fit flex justify-end items-center'>
                                    <p className='text-sm'>GitLab</p>
                                </motion.div>
                            )}

                        </motion.div>

                        <motion.div
                            initial={{
                                y: 100,
                                opacity: 0
                            }}

                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    duration: 1.5,
                                    delay: .3
                                }
                            }}

                            whileHover={{
                                cursor: 'pointer',
                                width: 155
                            }}

                            whileTap={{
                                cursor: 'pointer',
                                width: 155
                            }}

                            layout

                            onMouseEnter={() => setState({ ...state, ig: !ig })}
                            onMouseLeave={() => setState({ ...state, ig: !ig })}
                            onClick={() => linkSocmed('https://www.instagram.com/ilhamsoejud/')}

                            className='w-12 h-12 p-2 flex bg-slate-100 rounded-md border border-zinc-950/30'>

                            <FaInstagramSquare className='inline-block w-fit h-full text-fuchsia-600' />

                            {ig && (
                                <motion.div
                                    initial={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    animate={{
                                        width: 90,
                                        opacity: 1
                                    }}

                                    exit={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    transition={{
                                        type: 'spring'
                                    }}

                                    className='w-fit flex justify-end items-center'>
                                    <p className='text-sm'>Instagram</p>
                                </motion.div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{
                                y: 100,
                                opacity: 0
                            }}

                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    duration: 1.5,
                                    delay: .4
                                }
                            }}

                            whileHover={{
                                cursor: 'pointer',
                                width: 140
                            }}

                            whileTap={{
                                cursor: 'pointer',
                                width: 140
                            }}
                            layout

                            onMouseEnter={() => setState({ ...state, linkedin: !linkedin })}
                            onMouseLeave={() => setState({ ...state, linkedin: !linkedin })}
                            onClick={() => linkSocmed('https://www.linkedin.com/in/ilhamsoejudalkahfiardy/')}

                            className='w-12 h-12 p-2 flex bg-slate-100 rounded-md border border-zinc-950/30'>
                            <FaLinkedin className='inline-block w-fit h-full text-blue-700' />

                            {linkedin && (
                                <motion.div
                                    initial={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    animate={{
                                        width: 75,
                                        opacity: 1
                                    }}

                                    exit={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    transition={{
                                        type: 'spring'
                                    }}

                                    className='w-fit flex justify-end items-center'>
                                    <p className='text-sm'>Linkedin</p>
                                </motion.div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{
                                y: 100,
                                opacity: 0
                            }}

                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    duration: 1.5,
                                    delay: .5
                                }
                            }}

                            whileHover={{
                                cursor: 'pointer',
                                width: 150
                            }}

                            whileTap={{
                                cursor: 'pointer',
                                width: 150
                            }}
                            layout

                            onMouseEnter={() => setState({ ...state, telegram: !telegram })}
                            onMouseLeave={() => setState({ ...state, telegram: !telegram })}
                            onClick={() => linkSocmed('https://t.me/IlhamSoejudA')}

                            className='w-12 h-12 p-2 flex bg-slate-100 rounded-md border border-zinc-950/30'>
                            <FaTelegram className='inline-block w-fit
                 h-full text-blue-500' />

                            {telegram && (
                                <motion.div
                                    initial={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    animate={{
                                        width: 85,
                                        opacity: 1
                                    }}

                                    exit={{
                                        width: 0,
                                        opacity: 0
                                    }}

                                    transition={{
                                        type: 'spring'
                                    }}

                                    className='w-fit flex justify-end items-center'>
                                    <p className='text-sm'>Telegram</p>
                                </motion.div>
                            )}

                        </motion.div>

                    </div>
                </motion.div>

            </div>

        </div>
    )
}

export default About