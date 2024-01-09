import React from 'react'

const Experience = () => {
    return (
        <div className='w-full min-h-screen  xl:justify-center container mx-auto flex flex-col mt-10 md:my-24 gap-10 xl:gap-0 px-5 md:px-10'>
            <p className='text-slate-200 lg:text-lg xl:text-xl border-b-2 border-blue-500 w-fit mx-auto leading-loose xl:py-2'>My Experience</p>
            <div className='w-full mx-auto max-w-3xl h-fit grid grid-cols-5'>
                <Colspan />
                <div className='w-full h-24 flex justify-center items-end'>
                    <div className='w-px h-1/2 border border-slate-500'>

                    </div>
                </div>

                <Colspan />

                <Detail
                    certificate={false}
                    date={"2018 Jun - 2021 Jun"}
                    internship={false}
                    left={true}
                    major={"Major: Software Engineering"}
                    title={"Vocational High School"}
                />

                <Timeline />

                <Colspan />
                <Colspan />

                <Timeline />

                <Detail
                    certificate={true}
                    date={"2020 Jan - Mar"}
                    internship={true}
                    left={false}
                    major={"Press Bureau of Media and Information"}
                    title={"Presidental Secretariat"}
                />

                <Detail
                    certificate={false}
                    date={"2020 Aug - Dec"}
                    internship={true}
                    left={true}
                    major={"Web Developer"}
                    title={"MejaKita Edunusa Mandiri"}
                />

                <Timeline />

                <Colspan />

                <Colspan />

                <Timeline />

                <Detail
                    certificate={false}
                    date={"2021 Jun - Now"}
                    internship={false}
                    left={false}
                    major={"Major: Information System"}
                    title={"Merdeka Malang University"}
                />

                <Detail
                    certificate={false}
                    date={"2022 Jan - 2023 Aug"}
                    internship={false}
                    left={true}
                    major={"Department: Interests and talents"}
                    title={"Student Executive Board"}
                />

                <Timeline />

                <Colspan />
                <Colspan />

                <Timeline />

                <Detail
                    certificate={false}
                    date={"Belum"}
                    internship={false}
                    left={false}
                    major={"Major: Web Developer"}
                    title={"IndevPro"}
                />

                <Detail
                    certificate={true}
                    date={"2023 Aug - 2024 Jan"}
                    internship={true}
                    left={true}
                    major={"Major: Independent Study Web Developer"}
                    title={"Infinite Learning"}
                />

                <Timeline />

                <Colspan/>
                <Colspan/>

                <div className='w-full h-24 flex justify-center items-start'>
                    <div className='w-px h-1/2 border border-slate-500'>

                    </div>
                </div>

            </div>
        </div>
    )
}

const Colspan = () => {
    return (
        <div className='col-span-2'>

        </div>
    )
}

const Timeline = () => {
    return (
        <div className='w-full h-full flex justify-center items-center relative'>
            <div className='w-px h-full border border-slate-500'>

            </div>
            <div className='w-5 h-5 bg-blue-500 absolute rounded-full border-2 border-slate-200'>

            </div>
        </div>
    )
}

const Detail = ({ left, internship, date, title, major, certificate }) => {
    return (
        <div className={`w-full h-fit col-span-2 flex flex-col gap-2 p-3 ${left && "items-end"} `}>
            {internship && (
                <p className='text-xs text-slate-200 bg-green-600 w-fit px-2 py-1 rounded mb-3'>Internship</p>
            )}
            <p className='text-slate-400 text-xs font-light'>{date}</p>
            <p className={`text-slate-200 text-sm ${left && "text-end"}`}>{title}</p>
            <p className={`text-blue-500 text-xs ${left && "text-end"}`}>{major}</p>
            {certificate && (
                <Certificate />
            )}
        </div>
    )
}

const Certificate = () => {
    return (
        <div className='w-full h-fit bg-blue-600 hover:bg-blue-700 hover:cursor-pointer py-2 rounded'>
            <p className='text-xs text-center text-slate-200 '>Certificate</p>
        </div>
    )
}

export default Experience