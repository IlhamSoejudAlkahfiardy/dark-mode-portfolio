import { motion } from 'framer-motion'
import React from 'react'
import DataJobDesk from '../../assets/data/jobdesk'

const JobDesk = () => {
    return (
      <div className='container relative flex flex-col justify-between w-full h-full px-5 mx-auto mt-24 xl:min-h-screen xl:justify-center xl:mt-0 md:px-10'>
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

          viewport={{ once: true }}
  
          className='leading-loose transition-colors duration-500 border-b-2 border-blue-500 dark:text-slate-200 text-zinc-700 lg:text-lg xl:text-xl w-fit xl:py-2'>
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

          viewport={{ once: true }}
  
          className='mt-5 text-xs leading-loose transition-colors duration-500 dark:text-slate-400 text-slate-600 w-fit hover:cursor-pointer'>*You also can play with my jobdesks, try to drag some of my job below. <br /> Hahaha, remember dont hurt them
        </motion.p>
  
        <div className='z-20 grid w-full grid-cols-2 gap-2 mt-10 md:grid-cols-3 xl:grid-cols-4 lg:mt-0'>
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

              viewport={{ once: true }}
  
              className='flex flex-col items-center justify-center gap-5 transition-colors duration-500 rounded-md aspect-square center hover:bg-white/5'>
              <div className='w-1/2 lg:w-1/3'>
                {data.icon}
              </div>
              <p className='text-xs transition-colors duration-500 dark:text-slate-200 text-zinc-700 md:text-sm'>{data.title} </p>
            </motion.div>
          ))}
  
        </div>
  
      </div>
    )
  }

export default JobDesk