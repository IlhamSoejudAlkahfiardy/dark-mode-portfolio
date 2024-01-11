import React, { useState, useEffect } from 'react'
import ImageProfile from '../assets/images/profile/undraw.svg'
import Programmer from '../assets/images/profile/programmer.svg'
import { LiaHandPointer } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import DataSkill from '../assets/data/skill';
import DataJobDesk from '../assets/data/jobdesk'

const LandingPage = () => {

  return (
    <>
      <Hero />
      <About />
      <Skill />
      <JobDesk />
    </>
  )
}

const Hero = () => {
  const textSkill = ['Front End Developer', 'UI/UX Designer', 'Junior Back End Devs']
  const textSkillSet = ['React JS', 'Tailwind CSS', 'Bootstrap', 'CodeIgniter', 'MySQL', 'PHP', 'Laravel', 'JS']
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
    <div className='w-full xl:h-[650px] 2xl:h-[800px] xl:justify-center container mx-auto flex flex-col mt-10 md:mt-24 xl:mt-0 gap-10 xl:gap-0 px-5 md:px-10'>
      <div className='w-full flex items-center h-fit'>
        <div className='w-2/3 flex flex-col gap-3'>
          <p className='text-slate-200 lg:text-lg xl:text-xl'>Hi Everyone, my name is</p>
          <p className='text-slate-200 text-4xl xl:text-5xl font-bold'>Alkahfiardy</p>
          <p className='text-slate-200 lg:text-lg xl:text-xl'>Im a</p>
          <p className=' text-blue-500 text-4xl xl:text-5xl font-bold'>{textSkill[currentTextIndex]}</p>
          <p className='text-slate-200 lg:text-lg xl:text-xl'>and my skill-set is</p>
          <p className=' text-blue-500 text-xl xl:text-2xl font-bold'>{textSkillSet[currentSkillSetIndex]}</p>
        </div>

        <div className='w-1/3 lg:w-1/4 xl:w-1/5 h-48 flex justify-center items-center'>
          <img src={ImageProfile} alt="" />
        </div>
      </div>
      <div className='w-full mt-16 flex flex-col md:flex-row gap-5'>
        <Link to="/project" className='w-fit text-slate-200 text-sm bg-blue-500 px-4 py-3 rounded flex items-center gap-2 hover:bg-blue-600  hover:cursor-pointer'>
          See my recent projects
          <LiaHandPointer className='inline-block' />
        </Link>
        <Link to="/experience" className='w-fit text-blue-500 text-sm bg-zinc-950 border-2 border-blue-500 px-4 py-3 rounded flex items-center gap-2 hover:bg-blue-500 hover:text-slate-200  hover:cursor-pointer'>
          See my experience
          <CiStar className='inline-block' />
        </Link>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div className='w-full h-full relative xl:min-h-screen container mx-auto justify-between xl:justify-center flex flex-col mt-24 xl:mt-0 px-5 md:px-10'>
      <p className='text-slate-200 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>About Me</p>

      <div className='w-full flex flex-col lg:flex-row justify-start mt-10 xl:mt-24'>

        <div className='w-full lg:w-1/4 flex'>

          <div className='w-1/4 lg:w-full aspect-square h-fit rounded-md' style={{ backgroundImage: `url(${Programmer})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          </div>

          <div className='w-3/4 flex lg:hidden flex-col gap-6 pl-10 md:pl-16'>
            <div className='flex flex-col gap-2'>
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
                Birth Day
              </p>
              <p className='font-bold text-slate-200'>
                30 - 05 - 2003
              </p>

            </div>
          </div>

        </div>

        <div className='w-full flex flex-col gap-10 lg:pl-16'>
          <div className='hidden w-full lg:flex flex-col lg:flex-row lg:justify-between gap-2'>
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
                Birth Day
              </p>
              <p className='font-bold text-slate-200 lg:text-lg xl:text-xl'>
                30 - 05 - 2003
              </p>

            </div>
          </div>
          <div className='flex flex-col gap-2 mt-10 lg:mt-0'>

            <p className='text-slate-200 text-sm xl:text-base indent-4 text-justify leading-loose'>Hello! I am currently pursuing my studies at <span className='text-blue-500'>Merdeka Malang University</span>, where I am enrolled in the <span className='text-blue-500'>Faculty of Information Technology</span>, specifically in the <span className='text-blue-500'>D3 Information Systems program.</span> </p>

            <p className='text-slate-200 text-sm xl:text-base indent-4 text-justify leading-loose'>My academic journey has fostered a strong interest in <span className='text-blue-500'>programming and web development</span>. Proficient in technologies like <span className='text-blue-500'>React.js, Tailwind CSS, CodeIgniter, and Laravel,</span> I am passionate about crafting innovative solutions and user-friendly interfaces. </p>

            <p className='text-slate-200 text-sm xl:text-base indent-4 text-justify leading-loose'>Beyond coding, I find joy in exploring the world of music, a hobby that complements my creative mindset. Through hands-on experiences and continuous learning, I am dedicated to evolving as a tech enthusiast and contributing to the ever-evolving landscape of information technology.  </p>

          </div>
        </div>

      </div>
      {/* <p className='text-zinc-900/20 absolute text-9xl w-full bottom-0'>About me</p> */}
    </div>
  )
}

const Skill = () => {
  return (
    <div className='w-full h-full  relative xl:min-h-screen container mx-auto justify-between xl:justify-center flex flex-col mt-24 xl:mt-0 px-5 md:px-10'>
      <p className='text-slate-200 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>My Skill-set</p>
      <div className='w-full z-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-10 lg:mt-0'>
        {DataSkill.map((data, index) => (
          <div className=' aspect-square flex flex-col justify-center items-center hover:bg-white/5 rounded-md'>
            <div className=' w-1/2 lg:w-1/3'>
              {data.logo}
            </div>
          </div>
        ))}
      </div>
      {/* <p className='text-zinc-900/20 absolute text-9xl w-full bottom-0'>My Skill-set</p> */}
    </div>
  )
}

const JobDesk = () => {
  return (
    <div className='w-full h-full relative xl:min-h-screen container mx-auto justify-between xl:justify-center flex flex-col mt-24 xl:mt-0 px-5 md:px-10'>
      <p className='text-slate-200 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>What Can I Do</p>
      <div className='w-full z-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-10 lg:mt-0'>
        {DataJobDesk.map((data, index) => (
          <div className=' aspect-square flex flex-col justify-center gap-5 center items-center hover:bg-white/5 rounded-md'>
            <div className='w-1/2 lg:w-1/3'>
              {data.icon}
            </div>
            <p className='text-slate-200 text-xs md:text-sm'>{data.title} </p>
          </div>
        ))}

      </div>
      {/* <p className='text-zinc-900/20 absolute text-9xl w-full bottom-0'>What Can i Do</p> */}
    </div>
  )
}

export default LandingPage