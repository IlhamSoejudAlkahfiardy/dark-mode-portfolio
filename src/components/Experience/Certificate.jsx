import React from 'react'

const Certificate = ({ download, url }) => {
    return (
        <div onClick={() => download(url)} className='w-full h-fit bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:cursor-pointer py-2 rounded shadow-md'>
            <p className='text-xs lg:text-sm 2xl:text-base text-center text-slate-200 '>Certificate</p>
        </div>
    )
}

export default Certificate