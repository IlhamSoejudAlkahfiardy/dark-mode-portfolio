import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import ImageContactMe from '../assets/images/profile/contact-me.svg'
import { motion, MotionConfig } from 'framer-motion';
import { useEffect } from 'react';
import { useToast } from './ui/use-toast';

const ContactMe = () => {
    const { toast } = useToast()
    // const [emailFilled, setEmailFilled] = useState(false)
    // const [toastMessage, setToastMessage] = useState('Your message has been sent!')

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [subject, setSubject] = useState('')
    // const [message, setMessage] = useState('')

    const [state, setState] = useState({
        emailFilled: false,
        toastMessage: 'Your message has been sent!',
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const { emailFilled, toastMessage, name, email, subject, message } = state

    useEffect(() => {
        if (name != '' && email != '' && subject != '' && message != '') {
            // setEmailFilled(true)
            setState({ ...state, emailFilled: true })
        }

    }, [name, email, subject, message])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gicilp8', 'template_s2oopoq', form.current, 'RhzUa3XxcxH8RlqgS')
            .then((result) => {
                // setToastMessage('Email has been sent!')
                setState({ ...state, toastMessage: 'Email has been sent!' })
            }, (error) => {
                console.log(error.text);
                // setToastMessage('email not sent, I ran out of tokens 😞')
                setState({ ...state, toastMessage: 'email not sent, I ran out of tokens 😞' })
            });

        setState({ ...state, name: '', email: '', subject: '', message: '', emailFilled: false })
    };

    return (
        <div className='w-full min-h-screen justify-center overflow-x-hidden container mx-auto flex flex-col my-10 md:my-24 gap-5 xl:gap-0 px-5 md:px-10'>
            <div className='w-full flex flex-col lg:flex-row items-center gap-5'>
                <motion.div

                    initial={{ y: -500 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring'
                    }}

                    className='w-full flex flex-col gap-5'>
                    <MotionConfig
                        whileTap={{
                            scale: 1.1,
                            cursor: 'pointer'
                        }}

                        whileHover={{
                            cursor: 'pointer',
                            scale: 1.1,
                        }}

                        transition={{
                            type: 'spring'
                        }}
                    >
                        <motion.p
                            className='dark:text-slate-200 text-zinc-700 z-10 transition-colors duration-500 text-4xl font-semibold w-fit leading-loose xl:py-2'>
                            Hello, <br /> Tell Me About Your Project
                        </motion.p>

                        <motion.p

                            className='dark:text-slate-200 text-zinc-700 z-10 transition-colors duration-500 text-base lg:text-lg xl:text-xl w-fit leading-loose xl:py-2'>
                            Tell me your wish, your dream project, even your dreams teammates. I'll be glad to help you. <br /> <span className='dark:text-amber-400 text-orange-400 font-semibold tracking-wider'>Cheers!🍻</span>
                        </motion.p>
                    </MotionConfig>
                </motion.div>

                <div className='w-full my-10 flex justify-center items-center'>
                    <motion.img

                        initial={{ y: -500 }}
                        animate={{ y: 0 }}

                        transition={{
                            type: 'spring',
                            delay: 0.1
                        }}

                        whileHover={{
                            scale: 1.1,
                            cursor: 'grab',
                            transition: {
                                type: 'spring',
                                delay: 0
                            }
                        }}

                        whileTap={{
                            scale: 1.2,
                            cursor: 'grabbing'
                        }}

                        src={ImageContactMe} className='max-w-sm xl:scale-125' alt="" srcset="" />
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className='w-full lg:max-w-2xl xl:max-w-3xl mx-auto flex flex-col gap-3 mt-10 overflow-hidden'>
                <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: 'spring',
                        delay: .1
                    }}

                    className='dark:text-slate-200 text-zinc-700 transition-colors duration-500 z-10 mb-10 mx-auto lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>
                    Get in touch!
                </motion.p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: 'spring',
                        delay: .2
                    }}

                    className='w-full flex flex-col md:flex-row gap-3'>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-xs dark:text-slate-200 transition-colors duration-500 text-zinc-700'>Name</p>
                        <input value={name} onChange={(e) => setState({ ...state, name: e.target.value })} name='user_name' type="text" className='w-full h-12 dark:bg-zinc-950 bg-slate-200 border dark:text-slate-200 transition-colors duration-500 text-zinc-700 px-3 focus:outline-none dark:border-slate-200/30 border-zinc-950/30 rounded-sm' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-xs dark:text-slate-200 transition-colors duration-500 text-zinc-700'>Email</p>
                        <input value={email} onChange={(e) => setState({ ...state, email: e.target.value })} name='user_email' type="text" className='w-full h-12 dark:bg-zinc-950 bg-slate-200 border dark:text-slate-200 transition-colors duration-500 text-zinc-700 px-3 focus:outline-none dark:border-slate-200/30 border-zinc-950/30 rounded-sm' />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: 'spring',
                        delay: .2
                    }}

                    className='w-full flex flex-col gap-5'>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-xs dark:text-slate-200 transition-colors duration-500 text-zinc-700'>Subject</p>
                        <input value={subject} onChange={(e) => setState({ ...state, subject: e.target.value })} name='subject' type="text" className='w-full h-12 dark:bg-zinc-950 bg-slate-200 border dark:text-slate-200 transition-colors duration-500 text-zinc-700 px-3 focus:outline-none dark:border-slate-200/30 border-zinc-950/30 rounded-sm' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-xs dark:text-slate-200 transition-colors duration-500 text-zinc-700'>Your Message</p>
                        <div className='w-full flex flex-col items-end gap-3 border dark:border-slate-200/30 border-zinc-950/30 rounded-sm transition-colors duration-500'>
                            <textarea value={message} onChange={(e) => setState({ ...state, message: e.target.value })} name="message" id="" className='w-full dark:bg-zinc-950 bg-slate-200  dark:text-slate-200 transition-colors duration-500 text-zinc-700 p-3 focus:outline-none ' rows="10"></textarea>

                            {emailFilled ? (
                                <button onClick={() => { toast({ title: toastMessage }) }} type='submit' className='w-fit text-slate-200 bg-blue-500 px-4 mr-3 mb-3 hover:bg-blue-600 py-2 rounded-sm'>Submit</button>
                            ) : (
                                <button disabled type='submit' className='w-fit dark:text-slate-200 transition-colors duration-500 text-zinc-700 border dark:border-slate-200/30 border-zinc-950/30 dark:hover:bg-zinc-500 hover:bg-slate-400 hover:cursor-not-allowed px-4 mr-3 mb-3 py-2 rounded-sm'>Fill the form!</button>
                            )}
                        </div>
                        <p className='text-xs dark:text-slate-200 transition-colors duration-500 text-zinc-700'>
                            *please don't spam, my tokens will run out
                        </p>
                    </div>
                </motion.div>
            </form>

        </div>
    )
}

export default ContactMe