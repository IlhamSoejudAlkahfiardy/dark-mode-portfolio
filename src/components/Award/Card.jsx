import { motion } from 'framer-motion';
import React from 'react'
import { FaEye } from "react-icons/fa";

const Card = (props) => {
    
    return (
        <motion.div
        layout
        initial={{
            opacity: 0
        }}

        animate={{
            opacity: 1,
            transition: {
                type: 'spring',
                delay: props.delay
            }
        }}

        exit={{
            opacity: 0,
            transition: {
                delay: props.delay
            }
        }}

        whileHover={{
            scale: 1.05,
            transition: {
                duration: 0.5,
                delay: 0,
            }
        }}

        whileTap={{
            scale: 0.95,
            transition: {
                delay: 0
            }
        }}

        className='relative w-full md:max-w-md aspect-square rounded-lg  transition-colors duration-500 flex justify-center items-center'>
            <div onClick={() => { props.setShowDetail(true); props.setIndexAward(props.indexAward) }} className='absolute flex justify-center items-center group w-3/4 aspect-video hover:cursor-pointer hover:bg-gray-400/50 bg-transparent transition-all duration-300'>
                <FaEye className='text-3xl group-hover:text-slate-100 text-transparent transition-all duration-300' />
            </div>
            <img src={props.image} alt={props.title} className='w-5/6 shadow-md' />
        </motion.div>
    )
}

export default Card