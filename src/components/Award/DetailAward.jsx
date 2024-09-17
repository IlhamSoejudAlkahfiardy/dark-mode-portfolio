import { motion } from 'framer-motion'
import React from 'react'
import { MdClose } from "react-icons/md";

const DetailAward = (props) => {

    const openLink = (url) => {
        window.open(url, '_blank')
    }

    return (
        <motion.div
            layout
            initial={{
                opacity: 0
            }}

            animate={{
                opacity: 1,
                transition: {
                    delay: 0
                }
            }}


            className={`${props.showDetail ? 'fixed' : 'none'} inset-0 z-50 m-auto w-full h-full bg-opacity-80 bg-zinc-900 flex justify-center items-center`}>
            <div className='w-5/6 h-5/6 xl:w-4/6 bg-zinc-900 p-5 lg:p-10 rounded-md flex flex-col gap-5 overflow-y-scroll'>
                <div className='w-full flex justify-end'>
                    <motion.div
                        layout
                        whileTap={{
                            scale: 0.90
                        }}

                        onClick={() => props.setShowDetail(false)} className='fixed w-10 h-10 rounded-md bg-zinc-900  flex justify-center items-center hover:cursor-pointer hover:scale-110 transition-all duration-500'>
                        <MdClose className='text-slate-200 h-full w-full' />
                        {/* <p className='text-slate-200 text-sm'>
                            
                        </p> */}
                    </motion.div>
                </div>
                <div className='w-full h-full flex flex-col gap-5'>
                    <div className='w-full h-fit flex justify-center items-center'>
                        <img src={props.data.image} alt={props.title} className='lg:max-w-xl 2xl:max-w-4xl' />
                    </div>
                    <div className='w-full '>
                        <table className='text-slate-200 mb-5 lg:mb-10'>
                            {props.data.serialNumber != '-' && (
                                <TableTR>
                                    <TableTH title='Serial Number' />
                                    <TableTD data={props.data.serialNumber} />
                                </TableTR>
                            )}

                            <TableTR>
                                <TableTH title='Title' />
                                <TableTD data={props.data.title} />
                            </TableTR>

                            <TableTR>
                                <TableTH title='Date' />
                                <TableTD data={props.data.date} />
                            </TableTR>

                            {props.data.validUntil != '-' && (
                                <TableTR>
                                    <TableTH title='Valid Until' />
                                    <td className='text-sm lg:text-base 2xl:text-lg align-top pt-3 pl-3 font-thin'>{props.data.validUntil}</td>
                                </TableTR>
                            )}

                            <TableTR>
                                <TableTH title='Publisher' />
                                <TableTD data={props.data.publisher} />
                            </TableTR>

                            {props.data.url != '-' && (
                                <TableTR>
                                    <TableTH title='URL' />
                                    <td className='text-sm lg:text-base 2xl:text-lg align-top pt-3 pl-3 font-thin'>
                                        <a href={props.data.url} target='_blank' rel='noreferrer'>
                                            {props.data.url}
                                        </a>
                                    </td>
                                </TableTR>
                            )}

                            <TableTR>
                                <TableTH title='Category' />
                                <TableTD data={props.data.category} />
                            </TableTR>

                            {console.log(props.data.project)}
                            {props.data.project.length > 0 && (

                                <TableTR>
                                    <TableTH title='Project' />
                                    <td className='text-sm lg:text-base 2xl:text-lg align-top pt-3 pl-3 font-thin'>
                                        {props.data.project.map((item, index) => (
                                            <div key={index} className='flex flex-col pb-2 mb-24 border-b border-slate-200/25'>
                                                <img onClick={() => openLink(item.url)} src={item.banner} className='max-w-md hover:cursor-pointer' alt="" />
                                                <div className='flex gap-2 items-center py-5'>
                                                    <TextProject data={item.title} />
                                                    <img src={item.logo} className='w-8 aspect-square' alt="" />
                                                </div>

                                                <TRProject>
                                                    <THProject data='Description:' />
                                                    <TextProject data={item.desc} />
                                                </TRProject>

                                                <TRProject>
                                                    <THProject data='Teamwork:' />
                                                    <TextProject data={item.teamwork} />
                                                </TRProject>

                                                <TRProject>
                                                    <THProject data='Role:' />
                                                    <TextProject data={item.role} />
                                                </TRProject>

                                                <TRProject>
                                                    <THProject data='Date:' />
                                                    <TextProject data={item.date} />
                                                </TRProject>

                                                <TRProject>
                                                    <THProject data='Tech Stack:' />
                                                    <div className='flex gap-5'>
                                                        {item.techStack.map((tech, index) => (
                                                            <div className='w-8 h-8'>
                                                                <TextProject data={tech.logo} key={index} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </TRProject>

                                            </div>
                                        ))}
                                    </td>
                                </TableTR>
                            )}

                        </table>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const TableTR = (props) => {
    return (
        <tr className='h-20'>
            {props.children}
        </tr>
    )
}

const TableTH = (props) => {
    return (
        <th className='text-slate-200/50 text-left w-28 lg:w-36 align-top pt-3 text-sm lg:text-base font-thin 2xl:text-lg'>{props.title}</th>
    )
}

const TableTD = (props) => {
    return (
        <td className='text-sm lg:text-base 2xl:text-lg align-top pt-3 pl-3 font-thin'>{props.data}</td>
    )
}

const TextProject = (props) => {
    return (
        <p className='text-sm font-thin lg:text-base 2xl:text-lg'>{props.data}</p>
    )
}

const TRProject = (props) => {
    return (
        <div className='flex flex-col gap py-5 gap-1'>
            {props.children}
        </div>
    )
}

const THProject = (props) => {
    return (
        <p className='text-sm xl:text-base text-slate-200/50 font-thin'>
            {props.data}
        </p>
    )
}

export default DetailAward