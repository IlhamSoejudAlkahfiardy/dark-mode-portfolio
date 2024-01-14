import React, { useState, useEffect } from 'react'

import ImageProfile from '../assets/images/profile/hero.svg'

import Programmer from '../assets/images/profile/programmer.svg'
import { LiaHandPointer } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import DataSkill from '../assets/data/skill';
import DataJobDesk from '../assets/data/jobdesk'

// Framer Motion
import { motion } from 'framer-motion';
import ScrollTop from './ScrollTop';

const LandingPage = () => {

  return (
    <div className='relative'>
      <Hero />
      <About />
      <Skill />
      <JobDesk />
      <ScrollTop/>
    </div>
  )
}

const Hero = () => {
  const textSkill = ['Front End Developer', 'UI / UX Designer', 'Junior Back End Devs']
  const textSkillSet = ['React JS', 'Tailwind CSS', 'Bootstrap', 'CodeIgniter', 'MySQL', 'PHP', 'Laravel', 'JS']
  const myName = ['Ilham', 'Soejud', 'Alkahfiardy']
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSkillSetIndex, setCurrentSkillSetIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Mengganti indeks teks setiap 2 detik
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textSkill.length);
      setCurrentSkillSetIndex((prevIndex) => (prevIndex + 1) % textSkillSet.length)
    }, 2000);

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
          <p className='text-slate-200 lg:text-lg xl:text-xl'>Hi Everyone, my name is</p>

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
            className='text-slate-200 text-4xl xl:text-5xl font-bold  w-fit'>
            Alkahfiardy
          </motion.p>

          <motion.p

            className='text-slate-200 lg:text-lg xl:text-xl'>
            Im a
          </motion.p>
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
            className=' text-blue-500 text-4xl xl:text-5xl font-bold hover:cursor-pointer w-fit'>
            {textSkill[currentTextIndex]}
          </motion.p>
          <p className='text-slate-200 lg:text-lg xl:text-xl'>and my skills is</p>
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

        <motion.div
          initial={{
            scale: 0
          }}

          whileInView={{
            scale: 1
          }}

          drag
          dragConstraints={{
            top: -50,
            right: 50,
            bottom: 50,
            left: -50,
          }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
          dragElastic={0.5}

          whileTap={{
            scale: 1.5,
            cursor: "grabbing"
          }}

          whileHover={{
            scale: 1.5,
            cursor: "grab"
          }}

          transition={{
            type: "spring",
          }}

          className='w-1/3 lg:w-1/4 xl:w-1/5 h-48 flex justify-center items-center'

          style={{ backgroundImage: `url(${ImageProfile})`, backgroundSize: 'contain', 
          backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
          {/* <img src={ImageProfile} alt="" /> */}
        </motion.div>
      </div>
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
          <Link to="/project" className='w-fit text-slate-200 text-sm bg-blue-500 border-2 border-blue-500 px-4 py-3 rounded flex items-center gap-2 hover:bg-blue-600  hover:cursor-pointer'>
            See my recent projects
            <LiaHandPointer className='inline-block' />
          </Link>
        </motion.div>

        <motion.div
          whileTap={{
            scale: .9,
            transition: {
              type: 'spring'
            }
          }}
        >
          <Link to="/experience" className='w-fit text-blue-500 text-sm bg-zinc-950 border-2 border-blue-500 px-4 py-3 rounded flex items-center gap-2 hover:bg-blue-500 hover:text-slate-200  hover:cursor-pointer'>
            See my experience
            <CiStar className='inline-block' />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

const About = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const age = currentYear - 2003

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
        }}

        whileHover={{
          cursor: 'pointer'
        }}

        transition={{
          type: 'spring',
          duration: 1.5
        }}
        className='text-slate-200 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>
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

            className='w-1/4 lg:w-full aspect-square h-fit rounded-md' style={{ backgroundImage: `url(${Programmer})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />

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
              <p className='font-bold text-slate-200'>
                Ilham Soejud Alkahfiardy
              </p>

            </div>
            <div className='flex flex-col gap-2'>
              <p className=' text-slate-500 text-xs'>
                Address
              </p>
              <p className='font-bold text-slate-200'>
                Malang, East Java
              </p>

            </div>
            <div className='flex flex-col gap-2'>
              <p className=' text-slate-500 text-xs'>
                Age
              </p>
              <p className='font-bold text-slate-200'>
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
              <p className='font-bold text-slate-200 lg:text-lg xl:text-xl'>
                Ilham Soejud Alkahfiardy
              </p>

            </div>
            <div className='flex flex-col gap-2'>
              <p className=' text-slate-500 text-xs lg:text-sm xl:text-base '>
                Address
              </p>
              <p className='font-bold text-slate-200 lg:text-lg xl:text-xl'>
                Malang, East Java
              </p>

            </div>
            <div className='flex flex-col gap-2'>
              <p className=' text-slate-500 text-xs lg:text-sm xl:text-base '>
                Age
              </p>
              <p className='font-bold text-slate-200 lg:text-lg xl:text-xl'>
                {age} y.o at 30 May
              </p>

            </div>
          </div>
          <div className='flex flex-col gap-2 mt-10 lg:mt-0'>

            <p className='text-slate-200 text-sm xl:text-base indent-4 text-justify leading-loose'>Hello! I am currently pursuing my studies at <span className='text-blue-500'>Merdeka Malang University</span>, where I am enrolled in the <span className='text-blue-500'>Faculty of Information Technology</span>, specifically in the <span className='text-blue-500'>D3 Information Systems program.</span> </p>

            <p className='text-slate-200 text-sm xl:text-base indent-4 text-justify leading-loose'>My academic journey has fostered a strong interest in <span className='text-blue-500'>programming and web development</span>. Proficient in technologies like <span className='text-blue-500'>React.js, Tailwind CSS, CodeIgniter, and Laravel,</span> I am passionate about crafting innovative solutions and user-friendly interfaces. </p>

            <p className='text-slate-200 text-sm xl:text-base indent-4 text-justify leading-loose'>Beyond coding, I find joy in exploring the world of music, a hobby that complements my creative mindset. Through hands-on experiences and continuous learning, I am dedicated to evolving as a tech enthusiast and contributing to the ever-evolving landscape of information technology.  </p>

          </div>
        </motion.div>

      </div>

    </div>
  )
}

const Skill = () => {
  const [zoom, setZoom] = useState(false)
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

        className='text-slate-200 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2 '>
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

        className='text-slate-400 text-xs w-fit leading-loose mt-5 hover:cursor-pointer'>*You can play with my skill-sets, try to drag some of my skill below. <br /> Hahaha, dont hurt my skills
      </motion.p>

      <div className='w-full z-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-10 lg:mt-0'>
        {DataSkill.map((data, index) => (
          <motion.div

            className=' aspect-square flex flex-col justify-center items-center hover:bg-white/5 rounded-md'>
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

        className='text-slate-200 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>
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

        className='text-slate-400 text-xs w-fit leading-loose mt-5 hover:cursor-pointer'>*You also can play with my job desks, try to drag some of my job below. <br /> Hahaha, remember dont hurt my jobs
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
            <p className='text-slate-200 text-xs md:text-sm'>{data.title} </p>
          </motion.div>
        ))}

      </div>

    </div>
  )
}

export default LandingPage