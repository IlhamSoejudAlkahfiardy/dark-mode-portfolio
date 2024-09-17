import React from 'react'

const Hero = () => {
    return (
        <div className='container w-screen flex justify-center items-center relative'>
            <div className='my-24 overflow-y-hidden w-full md:w-3/4 py-10 px-10 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 rounded-3xl flex flex-col justify-center items-center lg:flex-row gap-10 shadow-md drop-shadow-md'>
                <div className='w-full flex flex-col items-center gap-10'>
                    <p className='text-2xl lg:text-3xl text-center text-slate-100 font-extrabold tracking-wide'>Awards & Certificate</p>
                </div>
            </div>
        </div>
    )
}

export default Hero