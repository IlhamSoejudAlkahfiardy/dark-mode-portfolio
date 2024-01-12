import React from 'react'
import { useLocation } from 'react-router-dom'

const Experience = () => {
    const baseURL = window.location.origin

    const setpres = `${baseURL}/src/assets/downloadable/sertifikat_setpres.pdf`
    const IL = `${baseURL}/src/assets/downloadable/sertifikat_IL.pdf`

    const download = (url) => {
        // alert('download '+ url)
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()

        alert(`${fileName} downloaded, check your download folder`)
    }

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
                    download={download}
                    url={setpres}
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
                    major={"Major: Diploma of Information System"}
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
                    date={"2023 Feb - Aug"}
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
                    download={download}
                    url={IL}
                />

                <Timeline />

                <Colspan />
                <Colspan />

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

const Detail = ({ left, internship, date, title, major, certificate, download, url }) => {
    return (
        <div className={`w-full h-fit col-span-2 flex flex-col gap-2 p-3 ${left && "items-end"} `}>
            {internship && (
                <p className='text-xs text-slate-200 bg-green-600 w-fit px-2 py-1 rounded mb-3'>Internship</p>
            )}
            <p className='text-slate-400 text-xs lg:text-sm 2xl:text-base font-light'>{date}</p>
            <p className={`text-slate-200 text-sm lg:text-base 2xl:text-lg ${left && "text-end"}`}>{title}</p>
            <p className={`text-blue-500 text-xs lg:text-sm 2xl:text-base ${left && "text-end"}`}>{major}</p>
            {certificate && (
                <Certificate download={download} url={url} />
            )}
        </div>
    )
}

const Certificate = ({ download, url }) => {
    return (
        <div onClick={() => download(url)} className='w-full h-fit bg-blue-600 hover:bg-blue-700 hover:cursor-pointer py-2 rounded'>
            <p className='text-xs lg:text-sm 2xl:text-base text-center text-slate-200 '>Certificate</p>
        </div>
    )
}

export default Experience