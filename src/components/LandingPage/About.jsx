import React, { useState } from 'react'

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import Programmer from '../../assets/images/profile/profil.png'

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
        <div className='container relative flex flex-col justify-between w-full h-full px-5 mx-auto mt-24 xl:min-h-screen xl:justify-center xl:mt-0 md:px-10'>
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

                viewport={{ once: true }}
                className='leading-loose transition-colors duration-500 border-b-2 border-blue-500 dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl w-fit xl:py-2'>
                About Me
            </motion.p>

            <div className='flex flex-col justify-start w-full mt-10 lg:flex-row xl:mt-24'>

                <div className='flex flex-col w-full lg:w-1/4'>

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

                        viewport={{ once: true }}

                        className='w-1/4 h-full rounded-md lg:w-full aspect-square' style={{ backgroundImage: `url(${Programmer})`, backgroundPosition: 'top', backgroundSize: 'cover' }} />
 
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

                        viewport={{ once: true }}

                        className='flex flex-col w-3/4 gap-6 lg:hidden'>
                        <div

                            className='flex flex-col gap-2'>
                            <p className='text-xs text-slate-500'>
                                I'am
                            </p>
                            <p className='text-xl font-bold transition-colors duration-500 dark:text-slate-200 text-zinc-700'>
                                Ilham Soejud Alkahfiardy
                            </p>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs text-slate-500'>
                                Address
                            </p>
                            <p className='font-bold transition-colors duration-500 dark:text-slate-200 text-zinc-700'>
                                Malang, East Java
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

                    viewport={{ once: true }}

                    className='flex flex-col w-full gap-10 lg:pl-16'>
                    <div className='flex-col hidden w-full gap-2 lg:flex lg:justify-between'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs text-slate-500 lg:text-sm xl:text-base'>
                                Name
                            </p>
                            <p className='font-bold transition-colors duration-500 dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl'>
                                Ilham Soejud Alkahfiardy
                            </p>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs text-slate-500 lg:text-sm xl:text-base'>
                                Address
                            </p>
                            <p className='font-bold transition-colors duration-500 dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl'>
                                Malang, East Java
                            </p>

                        </div>
                        
                    </div>

                    <div className='flex flex-col gap-2 mt-10 lg:mt-0'>

                        <p className='text-sm leading-loose text-justify transition-colors duration-500 dark:text-slate-200 text-zinc-700 xl:text-base indent-4'>Hi, I'm Ilham Soejud Alkahfiardy, a web developer specializing in <span className='text-blue-500'> React JS</span> and <span className='text-blue-500'> Vue JS</span> for front-end, with experience in <span className='text-blue-500'> Laravel</span> for Fullstack Development. I enjoy building clean, responsive applications and have worked on various projects that integrate modern JavaScript frameworks and <span className='text-blue-500'> RESTful APIs</span></p>

                        {/* <AnimatePresence mode='popLayout'>
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

                                    viewport={{ once: true }}

                                    className='flex flex-col gap-2'
                                >
                                    <p className='text-sm leading-loose text-justify transition-colors duration-500 dark:text-slate-200 text-zinc-700 xl:text-base indent-4'>My academic journey has fostered a strong interest in <span className='text-blue-500'>programming and web development</span>. Proficient in technologies like <span className='text-blue-500'>React.js, Tailwind CSS, CodeIgniter, and Laravel,</span> I am passionate about crafting innovative solutions and user-friendly interfaces. </p>

                                    <p className='text-sm leading-loose text-justify transition-colors duration-500 dark:text-slate-200 text-zinc-700 xl:text-base indent-4'>Beyond coding, I find joy in exploring the world of music, a hobby that complements my creative mindset. Through hands-on experiences and continuous learning, I am dedicated to evolving as a tech enthusiast and contributing to the ever-evolving landscape of information technology.  </p>
                                    
                                </motion.div>
                            )}

                            <div

                                onClick={() => setState({ ...state, about: !about })}
                                className='flex items-center justify-center w-full py-2 my-5 transition-all duration-300 border opacity-50 hover:cursor-pointer border-zinc-950/30 dark:border-slate-200/30 hover:opacity-100'>

                                <motion.p
                                    layout
                                    className='text-xs transition-colors duration-500 text-zinc-700 dark:text-slate-200'>
                                    {state.about ? 'Show Less' : 'Show More'}
                                </motion.p>
                            </div>
                        </AnimatePresence> */}

                    </div>

                    <div className='flex flex-wrap w-full gap-5'>

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

                            viewport={{ once: true }}

                            layout

                            onMouseEnter={() => setState({ ...state, github: !github })}
                            onMouseLeave={() => setState({ ...state, github: !github })}
                            onClick={() => linkSocmed('https://github.com/IlhamSoejudAlkahfiardy')}

                            className='flex w-12 h-12 p-2 border rounded-md bg-slate-100 border-zinc-950/30'>
                            <FaGithub className='inline-block h-full w-fit text-zinc-900' />

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

                                    className='flex items-center justify-end w-fit'>
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

                            viewport={{ once: true }}

                            layout

                            onMouseEnter={() => setState({ ...state, gitlab: !gitlab })}
                            onMouseLeave={() => setState({ ...state, gitlab: !gitlab })}
                            onClick={() => linkSocmed('https://gitlab.com/alkahfiardyIlhamSoejud')}

                            className='flex w-12 h-12 p-2 border rounded-md bg-slate-100 border-zinc-950/30'>
                            <FaGitlab className='inline-block h-full text-orange-600 w-fit' />

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

                                    className='flex items-center justify-end w-fit'>
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

                            viewport={{ once: true }}

                            layout

                            onMouseEnter={() => setState({ ...state, ig: !ig })}
                            onMouseLeave={() => setState({ ...state, ig: !ig })}
                            onClick={() => linkSocmed('https://www.instagram.com/ilhamsoejud/')}

                            className='flex w-12 h-12 p-2 border rounded-md bg-slate-100 border-zinc-950/30'>

                            <FaInstagramSquare className='inline-block h-full w-fit text-fuchsia-600' />

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

                                    className='flex items-center justify-end w-fit'>
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

                            viewport={{ once: true }}

                            layout

                            onMouseEnter={() => setState({ ...state, linkedin: !linkedin })}
                            onMouseLeave={() => setState({ ...state, linkedin: !linkedin })}
                            onClick={() => linkSocmed('https://www.linkedin.com/in/ilhamsoejudalkahfiardy/')}

                            className='flex w-12 h-12 p-2 border rounded-md bg-slate-100 border-zinc-950/30'>
                            <FaLinkedin className='inline-block h-full text-blue-700 w-fit' />

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

                                    className='flex items-center justify-end w-fit'>
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

                            viewport={{ once: true }}

                            layout

                            onMouseEnter={() => setState({ ...state, telegram: !telegram })}
                            onMouseLeave={() => setState({ ...state, telegram: !telegram })}
                            onClick={() => linkSocmed('https://t.me/alkahfiardy ')}

                            className='flex w-12 h-12 p-2 border rounded-md bg-slate-100 border-zinc-950/30'>
                            <FaTelegram className='inline-block h-full text-blue-500 w-fit' />

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

                                    className='flex items-center justify-end w-fit'>
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