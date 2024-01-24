import React, { useState, useEffect } from 'react'
import ImageProfile from '../assets/images/profile/profil2.png'
import Programmer from '../assets/images/profile/aboutme.jpg'
import { LiaHandPointer } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import DataSkill from '../assets/data/skill';
import DataJobDesk from '../assets/data/jobdesk'

// Framer Motion
import {  motion } from 'framer-motion';

// Icons
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const LandingPage = () => {

  return (
    <div className='relative'>
      <Hero />
      <About />
      <Skill />
      <JobDesk />
      
    </div>
  )
}

const Hero = () => {
  const textSkill = ['Front End Developer', 'UI / UX Designer', 'Junior Back End Devs']
  const textSkillSet = ['React JS', 'Tailwind CSS', 'Bootstrap', 'CodeIgniter', 'MySQL', 'PHP', 'Laravel', 'JS']
  const myName = ['Ilham', 'Soejud', 'Alkahfiardy']
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSkillSetIndex, setCurrentSkillSetIndex] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0)


  useEffect(() => {
    const intervalId = setInterval(() => {
      // Mengganti indeks teks setiap 2 detik
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textSkill.length);
      setCurrentSkillSetIndex((prevIndex) => (prevIndex + 1) % textSkillSet.length)
    }, 2000);

    setInnerWidth(window.innerWidth)

    window.addEventListener('resize', () => { setInnerWidth(window.innerWidth) })
    window.removeEventListener('resize', () => { setInnerWidth(window.innerWidth) })

    // Membersihkan interval saat komponen dibongkar
    return () => clearInterval(intervalId);
  }, [textSkill.length]);

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
          <p className='dark:text-slate-200 text-zinc-950 lg:text-lg xl:text-xl'>Hi Everyone, my name is</p>

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
            className='dark:text-slate-200 text-zinc-950 text-4xl xl:text-5xl font-bold  w-fit'>
            Alkahfiardy
          </motion.p>

          <p className='dark:text-slate-200 text-zinc-950 lg:text-lg xl:text-xl'>
            Im a
          </p>

          <motion.p
            key={currentTextIndex}

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

          <p className='dark:text-slate-200 text-zinc-950 lg:text-lg xl:text-xl'>and my skills is</p>

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
            className=' text-blue-500 text-xl xl:text-2xl font-bold w-fit hover:cursor-pointer'>
            {textSkillSet[currentSkillSetIndex]}
          </motion.p>
        </motion.div>

        <div className='w-1/3 lg:w-1/4 h-48 flex justify-center items-center relative'>
          <motion.svg
            initial={{
              x: 0,
              scale: 0,
              rotate: 0
            }}

            whileInView={{
              x: innerWidth <= 768 ? -25 : -50,
              rotate: 90,
              scale: 1,
              transition: {
                type: 'spring',
                delay: .2
              }
            }}

            className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path className='' fill="#3B82F6" d="M29.8,-47.5C41.9,-44.7,57.1,-43.3,67.8,-35.6C78.4,-27.9,84.5,-13.9,82.9,-0.9C81.3,12.1,72.1,24.2,61.7,32.3C51.3,40.5,39.8,44.7,29.3,53C18.8,61.3,9.4,73.8,-2.9,78.8C-15.1,83.8,-30.3,81.2,-38,71.3C-45.8,61.4,-46.2,44.2,-54.3,31.1C-62.3,17.9,-78.1,9,-79.2,-0.7C-80.4,-10.3,-67,-20.6,-53.5,-24.2C-39.9,-27.9,-26.2,-24.8,-17.3,-29.4C-8.3,-34,-4.2,-46.3,2.4,-50.4C8.9,-54.5,17.8,-50.3,29.8,-47.5Z" transform="translate(100 100)" />
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
                delay: .3
              }
            }}

            className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M25.9,-46.2C35.5,-39.4,46.4,-36.2,53.1,-29.1C59.9,-22,62.4,-11,62.6,0.1C62.7,11.2,60.4,22.3,57.2,35.6C54,48.9,50,64.2,40.3,67.5C30.6,70.7,15.3,61.8,6.5,50.6C-2.4,39.4,-4.7,25.8,-13.1,21.8C-21.4,17.8,-35.7,23.3,-49.8,21.3C-63.9,19.2,-77.8,9.6,-76.1,1C-74.4,-7.7,-57.2,-15.4,-46.3,-23.1C-35.5,-30.7,-31,-38.4,-24.4,-46.8C-17.7,-55.2,-8.9,-64.4,-0.3,-63.8C8.2,-63.2,16.4,-52.9,25.9,-46.2Z" transform="translate(100 100)" />
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

            src={ImageProfile} className='dark:grayscale' alt="" />
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
            <Link to="/experience" className='w-fit text-blue-500 text-sm dark:bg-zinc-950 bg-slate-200 border-2 border-blue-500 px-4 py-3 rounded flex items-center gap-2'>
              See my experience
              <CiStar className='inline-block' />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

const About = () => {
  const [github, setGithub] = useState(false)
  const [gitlab, setGitlab] = useState(false)
  const [ig, setIG] = useState(false)
  const [linkedin, setLinkedin] = useState(false)
  const [telegram, setTelegram] = useState(false)

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const age = currentYear - 2003

  const [screenWidth, setScreenWidth] = useState(0)

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
  }

  const linkSocmed = (url) => {
    window.open(url)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  const dragConstraints = {
    left: 0,
    right: '100%'
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
        className='dark:text-slate-200 text-zinc-950 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>
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
              <p className='font-bold dark:text-slate-200 text-zinc-700'>
                Ilham Soejud Alkahfiardy
              </p>

            </div>
            <div className='flex flex-col gap-2'>
              <p className=' text-slate-500 text-xs'>
                Address
              </p>
              <p className='font-bold dark:text-slate-200 text-zinc-700'>
                Malang, East Java
              </p>

            </div>
            <div className='flex flex-col gap-2'>
              <p className=' text-slate-500 text-xs'>
                Age
              </p>
              <p className='font-bold dark:text-slate-200 text-zinc-700'>
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
              <p className='font-bold dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl'>
                Ilham Soejud Alkahfiardy
              </p>

            </div>
            <div className='flex flex-col gap-2'>
              <p className=' text-slate-500 text-xs lg:text-sm xl:text-base '>
                Address
              </p>
              <p className='font-bold dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl'>
                Malang, East Java
              </p>

            </div>
            <div className='flex flex-col gap-2'>
              <p className=' text-slate-500 text-xs lg:text-sm xl:text-base '>
                Age
              </p>
              <p className='font-bold dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl'>
                {age} y.o at 30 May
              </p>

            </div>
          </div>

          <div className='flex flex-col gap-2 mt-10 lg:mt-0'>

            <p className='dark:text-slate-200 text-zinc-950 text-sm xl:text-base indent-4 text-justify leading-loose'>Hello! I am currently pursuing my studies at <span className='text-blue-500'>Merdeka Malang University</span>, where I am enrolled in the <span className='text-blue-500'>Faculty of Information Technology</span>, specifically in the <span className='text-blue-500'>D3 Information Systems program.</span> </p>

            <p className='dark:text-slate-200 text-zinc-950 text-sm xl:text-base indent-4 text-justify leading-loose'>My academic journey has fostered a strong interest in <span className='text-blue-500'>programming and web development</span>. Proficient in technologies like <span className='text-blue-500'>React.js, Tailwind CSS, CodeIgniter, and Laravel,</span> I am passionate about crafting innovative solutions and user-friendly interfaces. </p>

            <p className='dark:text-slate-200 text-zinc-950 text-sm xl:text-base indent-4 text-justify leading-loose'>Beyond coding, I find joy in exploring the world of music, a hobby that complements my creative mindset. Through hands-on experiences and continuous learning, I am dedicated to evolving as a tech enthusiast and contributing to the ever-evolving landscape of information technology.  </p>

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

              onMouseEnter={() => setGithub(!github)}
              onMouseLeave={() => setGithub(!github)}
              onClick={() => linkSocmed('https://github.com/IlhamSoejudAlkahfiardy')}

              className='w-12 h-12 p-2 flex bg-slate-200 rounded-md border border-zinc-950/30'>
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

              onMouseEnter={() => setGitlab(!gitlab)}
              onMouseLeave={() => setGitlab(!gitlab)}
              onClick={() => linkSocmed('https://gitlab.com/alkahfiardyIlhamSoejud')}

              className='w-12 h-12 p-2 flex bg-slate-200 rounded-md border border-zinc-950/30'>
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

              onMouseEnter={() => setIG(!ig)}
              onMouseLeave={() => setIG(!ig)}
              onClick={() => linkSocmed('https://www.instagram.com/ilhamsoejud/')}

              className='w-12 h-12 p-2 flex bg-slate-200 rounded-md border border-zinc-950/30'>

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

              onMouseEnter={() => setLinkedin(!linkedin)}
              onMouseLeave={() => setLinkedin(!linkedin)}
              onClick={() => linkSocmed('https://www.linkedin.com/in/ilhamsoejudalkahfiardy/')}

              className='w-12 h-12 p-2 flex bg-slate-200 rounded-md border border-zinc-950/30'>
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

              onMouseEnter={() => setTelegram(!telegram)}
              onMouseLeave={() => setTelegram(!telegram)}
              onClick={() => linkSocmed('https://t.me/IlhamSoejudA')}

              className='w-12 h-12 p-2 flex bg-slate-200 rounded-md border border-zinc-950/30'>
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

const Skill = () => {
  return (
    <div className='w-full h-full  relative xl:min-h-screen container mx-auto justify-between xl:justify-center flex flex-col mt-24 xl:mt-0 px-5 md:px-10'>
      <motion.p
        drag
        dragConstraints={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}

        whileHover={{
          cursor: 'grab'
        }}

        whileTap={{
          cursor: 'grabbing',
          scale: 1.2
        }}

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

        className='dark:text-slate-200 text-zinc-950 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2 '>
        My Skill-set
      </motion.p>

      <motion.p
        initial={{
          y: 100,
          opacity: 0
        }}

        whileInView={{
          y: 0,
          opacity: 1
        }}

        whileHover={{
          scale: 1.1
        }}

        whileTap={{
          scale: 1.2
        }}

        transition={{
          type: 'spring',
          duration: 1.5,
          delay: 0.05
        }}

        className='dark:text-slate-400 text-slate-600 text-xs w-fit leading-loose mt-5 hover:cursor-pointer'>*You can play with my skill-sets, try to drag some of my skill below. <br /> Hahaha, dont hurt my skills
      </motion.p>

      <div className='w-full z-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-10 lg:mt-0'>
        {DataSkill.map((data, index) => (
          <motion.div

            className=' aspect-square flex flex-col justify-center items-center dark:hover:bg-white/5 hover:bg-white/20 rounded-md'>
            <motion.div
              key={data.id}

              initial={{
                y: 100,
                opacity: 0
              }}

              whileInView={{
                y: 0,
                opacity: 1
              }}

              drag
              dragConstraints={{
                top: -50,
                right: 50,
                bottom: 50,
                left: -50,
              }}

              whileHover={{
                scale: 1.2,
                cursor: 'grab'
              }}

              whileTap={{
                scale: 1.5,
                cursor: "grabbing"
              }}

              dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
              dragElastic={0.2}

              transition={{
                type: 'spring',
                duration: 1.5,
                delay: data.delay
              }}

              className=' w-1/2 lg:w-1/3 '>
              {data.logo}
            </motion.div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

const JobDesk = () => {
  return (
    <div className='w-full h-full relative xl:min-h-screen container mx-auto justify-between xl:justify-center flex flex-col mt-24 xl:mt-0 px-5 md:px-10'>
      <motion.p
        drag
        dragConstraints={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        dragTransition={{ bounceDamping: 10, bounceStiffness: 500 }}

        whileHover={{ cursor: 'grab' }}
        whileTap={{ cursor: 'grabbing', scale: 1.2 }}

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

        className='dark:text-slate-200 text-zinc-950 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>
        What Can I Do
      </motion.p>
      <motion.p

        initial={{
          y: 100,
          opacity: 0
        }}

        whileInView={{
          y: 0,
          opacity: 1
        }}

        whileHover={{
          scale: 1.2
        }}
        transition={{
          type: 'spring',
          duration: 1.5,
          delay: .1
        }}

        className='dark:text-slate-400 text-slate-600 text-xs w-fit leading-loose mt-5 hover:cursor-pointer'>*You also can play with my job desks, try to drag some of my job below. <br /> Hahaha, remember dont hurt my jobs
      </motion.p>

      <div className='w-full z-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-10 lg:mt-0'>
        {DataJobDesk.map((data, index) => (
          <motion.div
            key={index}

            drag
            dragConstraints={{
              top: -50,
              right: 50,
              bottom: 50,
              left: -50,
            }}

            initial={{
              y: 100,
              opacity: 0
            }}

            whileInView={{
              y: 0,
              opacity: 1
            }}

            whileHover={{
              scale: 1.1,
              cursor: 'grab',
              transition: {
                delay: 0
              }
            }}

            whileTap={{
              scale: 1.3,
              cursor: "grabbing",
              transition: {
                delay: 0
              }
            }}

            dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
            dragElastic={0.2}

            transition={{
              type: 'spring',
              duration: 1.5,
              delay: data.delay
            }}

            className=' aspect-square flex flex-col justify-center gap-5 center items-center hover:bg-white/5 rounded-md'>
            <div className='w-1/2 lg:w-1/3'>
              {data.icon}
            </div>
            <p className='dark:text-slate-200 text-zinc-950 text-xs md:text-sm'>{data.title} </p>
          </motion.div>
        ))}

      </div>

    </div>
  )
}

export default LandingPage