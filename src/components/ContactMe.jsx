import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import ImageContactMe from '../assets/images/profile/contact-me.svg'

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gicilp8', 'template_s2oopoq', form.current, 'RhzUa3XxcxH8RlqgS')
            .then((result) => {
                console.log(result.text);
                console.log('Message sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='w-full min-h-screen relative overflow-x-hidden container mx-auto flex flex-col my-10 md:my-24 gap-5 xl:gap-0 px-5 md:px-10'>
            <div className='w-full flex flex-col lg:flex-row items-center gap-5'>
                <div className='w-full flex flex-col gap-5'>
                    <p className='text-slate-200 z-10 text-4xl font-semibold w-fit leading-loose xl:py-2'>Hello, <br /> Tell Me About Your Project</p>
                    <p className='text-slate-200 z-10 text-base lg:text-lg xl:text-xl w-fit leading-loose xl:py-2'>Tell me your wish, your dream project, even your dreams teammates. I'll be glad to help you. <br /> <span className='text-amber-400 font-semibold tracking-wider'>Cheers!🍻</span></p>
                </div>

                <div className='w-full my-10 flex justify-center items-center'>
                    <img src={ImageContactMe} className='max-w-sm xl:scale-125' alt="" srcset="" />
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className='w-full lg:max-w-2xl xl:max-w-3xl mx-auto flex flex-col gap-3 mt-10'>
                <p className='text-slate-200 z-10 mb-10 mx-auto lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit leading-loose xl:py-2'>Get in touch!</p>
                <div className='w-full flex flex-col md:flex-row gap-3'>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-xs text-slate-200'>Name</p>
                        <input name='user_name' type="text" className='w-full h-12 bg-zinc-950 border text-slate-200 px-3 focus:outline-none border-slate-200/30 rounded-sm' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-xs text-slate-200'>Email</p>
                        <input name='user_email' type="text" className='w-full h-12 bg-zinc-950 border text-slate-200 px-3 focus:outline-none border-slate-200/30 rounded-sm' />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5'>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-xs text-slate-200'>Subject</p>
                        <input name='subject' type="text" className='w-full h-12 bg-zinc-950 border text-slate-200 px-3 focus:outline-none border-slate-200/30 rounded-sm' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-xs text-slate-200'>Your Message</p>
                        <div className='w-full flex flex-col items-end gap-3 border border-slate-200/30 rounded-sm'>
                            <textarea name="message" id="" className='w-full bg-zinc-950  text-slate-200 p-3 focus:outline-none ' rows="10"></textarea>
                            <button type='submit' className='w-fit text-slate-200 bg-blue-500 px-4 mr-3 mb-3 hover:bg-blue-600 py-2 rounded-sm'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactMe