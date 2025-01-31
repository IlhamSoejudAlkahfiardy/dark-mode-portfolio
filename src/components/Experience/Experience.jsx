import { motion } from 'framer-motion'
import React from 'react'

import Colspan from '../Experience/Colspan'
import Detail from '../Experience/Detail'
import Timeline from '../Experience/Timeline'

const Experience = () => {
    const baseURL = window.location.origin

    const setpres = `${baseURL}/downloadable/sertifikat_setpres.pdf`
    const IL = `${baseURL}/downloadable/sertifikat_IL.pdf`

    console.log(baseURL);

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
        <div className='container flex flex-col w-full min-h-screen gap-10 px-5 mx-auto mt-10 xl:justify-center md:my-24 xl:gap-0 md:px-10'>
            <motion.p
                drag
                dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}

                initial={{ scale: 0 }}
                animate={{ scale: 1 }}

                whileHover={{ cursor: 'grab' }}
                whileTap={{ cursor: 'grabbing' }}

                transition={{
                    type: 'spring'
                }}
                className='mx-auto leading-loose transition-colors duration-500 border-b-2 border-blue-500 dark:text-slate-200 text-zinc-950 lg:text-lg xl:text-xl w-fit xl:py-2'>
                My Experience
            </motion.p>

            <div className='grid w-full max-w-3xl grid-cols-5 mx-auto h-fit'>
                <Colspan />
                <div className='flex items-end justify-center w-full h-24'>
                    <div className='w-px border h-1/2 dark:border-slate-500 border-zinc-500'>

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
                    delay={0.1}
                />

                <Timeline
                />

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
                    delay={0.2}
                />

                <Detail
                    certificate={false}
                    date={"2020 Aug - Dec"}
                    internship={true}
                    left={true}
                    major={"Web Developer"}
                    title={"MejaKita Edunusa Mandiri"}
                    delay={0.3}
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
                    delay={0.4}
                />

                <Detail
                    certificate={false}
                    date={"2022 Jan - 2023 Aug"}
                    internship={false}
                    left={true}
                    major={"Department: Interests and talents"}
                    title={"Student Executive Board"}
                    delay={0.5}
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
                    delay={0.6}
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
                    delay={0.7}
                />

                <Timeline />

                <Colspan />
                <Colspan />

                <Timeline />

                <Detail
                    certificate={false}
                    date={"2024 Oct - Now"}
                    internship={false}
                    left={false}
                    major={"Front End Developer"}
                    title={"PT. AERO GRUP INDONESIA"}
                    delay={0.8}
                />

                <Colspan />

                <div className='flex items-start justify-center w-full h-24'>
                    <div className='w-px border h-1/2 dark:border-slate-500 border-zinc-500'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience