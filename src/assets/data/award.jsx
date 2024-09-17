// gambar sertifikat
import alibaba from '../images/awards/image/certificate/alibaba_cloud.jpg'
import dicoding1 from '../images/awards/image/certificate/dicoding_1.png'
import dicoding2 from '../images/awards/image/certificate/dicoding_2.png'
import dicoding3 from '../images/awards/image/certificate/dicoding_3.png'
import dicoding4 from '../images/awards/image/certificate/dicoding_3.png'
import dicoding5 from '../images/awards/image/certificate/dicoding_4.png'
import il1 from '../images/awards/image/certificate/il_1.png'
import il2 from '../images/awards/image/certificate/il_2.png'
import wideedu from '../images/awards/image/certificate/wideedu.png'

// gambar project
import Hairhub from '../images/awards/image/banner/hairhub.png'
import BeraniBicara from '../images/awards/image/banner/beranibicara.png'

// logo project
import LogoHairhub from '../images/awards/image/logo/hairhub.png'
import LogoBeranibicara from '../images/awards/image/logo/beranibicara.png'

// icon tech stack
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Award = [
    {
        id: 0,
        image: alibaba,
        serialNumber: 'ACCD0119700100004206',
        title: 'Alibaba Cloud Services',
        desc: '-',
        date: 'January 3, 2023',
        validUntil: 'January 3, 2026',
        publisher: 'Alibaba Cloud',
        url: '-',
        category: 'Server Deployment',
        project: [],
        score: '-',
    },
    {
        id: 1,
        image: dicoding1,
        serialNumber: '6RPNW3YM9P2M',
        title: 'Getting Started with Programming Basics to Become a Software Developer',
        desc: 'This class is aimed at beginners who want to start learning programming to become software developers, based on the occupational standards for Software Developers (occupational code KBJI: 2512.03, Indotask: 2512). By the end of the training, students will be able to modify software applications using flowchart guidelines and basic programming with HTML, CSS, and JavaScript technology, accurately following the applications specifications and functionality requirements.',
        date: 'March 29, 2023',
        validUntil: 'March 29, 2026',
        publisher: 'Dicoding Indonesia',
        url: 'https://www.dicoding.com/certificates/6RPNW3YM9P2M',
        category: 'Web Development',
        project: [],
        score: '91/100',
    },
    {
        id: 2,
        image: dicoding2,
        serialNumber: '4EXG9W409ZRL',
        title: 'Pursuing a Career as a Software Developer',
        desc: 'This class is intended for beginners who want to start their career as Software Developers based on industry competency standards. By the end of the class, students will be able to determine and choose a career path that suits them, and understand the necessary preparations to achieve and pursue that career.',
        date: 'March 23, 2023',
        validUntil: 'March 23, 2026',
        publisher: 'Dicoding Indonesia',
        url: 'https://www.dicoding.com/certificates/4EXG9W409ZRL',
        category: 'Web Development',
        project: [],
        score: '-',
    },
    {
        id: 3,
        image: dicoding3,
        serialNumber: '4EXGNEV5QZRL',
        title: 'Introduction to Data in Programming (Data 101)',
        desc: 'This class is intended for beginners who want to learn about data in the field of programming, based on industry standards. By the end of the class, students will understand how data can be used to meet the basic needs in the field of Software Development.',
        date: 'March 29, 2023',
        validUntil: 'March 29, 2026',
        publisher: 'Dicoding Indonesia',
        url: 'https://www.dicoding.com/certificates/4EXGNEV5QZRL',
        category: 'Web Development',
        project: [],
        score: '-',
    },
    {
        id: 4,
        image: dicoding4,
        serialNumber: '6RPNW3RVQP2M',
        title: 'Introduction to Programming Logic (Programming Logic 101)',
        desc: 'This class is intended for beginners who want to start learning logic in the field of programming, based on industry standards. By the end of the class, students will understand basic programming logic and be able to apply it to problem-solving in the field of Software Development.',
        date: 'March 29, 2023',
        validUntil: 'March 29, 2026',
        publisher: 'Dicoding Indonesia',
        url: 'https://www.dicoding.com/certificates/6RPNW3RVQP2M',
        category: 'Web Development',
        project: [],
        score: '-',
    },
    {
        id: 5,
        image: dicoding5,
        serialNumber: 'QLZ9QDN7MZ5D',
        title: 'Learning Git Basics with GitHub',
        desc: 'This class is designed for developers who want to learn how to manage code or data using Git with GitHub to collaborate with other developers according to industry standards. By the end of the class, students will be able to manage their own datasets or code in a GitHub repository and collaborate with other developers on the same repository.',
        date: 'March 30, 2023',
        validUntil: 'March 30, 2026',
        publisher: 'Dicoding Indonesia',
        url: 'https://www.dicoding.com/certificates/QLZ9QDN7MZ5D',
        category: 'Web Development',
        project: [],
        score: '-',
    },
    {
        id: 6,
        image: il1,
        serialNumber: '1034/IL-SIB/I/2024',
        title: 'MSIB BATCH 5',
        desc: 'This certificate is awarded for completing Independent Study Program Batch 5 on Web Development at Infinite Learning from August 2023 to December 2023',
        date: 'January 2, 2024',
        validUntil: '-',
        publisher: 'Infinite Learning',
        url: '-',
        category: 'Web Development',
        project: [
            {
                id: 0,
                logo: LogoHairhub,
                banner: Hairhub,
                title: 'HairHub',
                desc: 'A JavaScript-based front-end and back-end website that serves as an information and reservation system for barbershops and salons. Users can register, search for barbershops or salons, make reservations, and promote their own barbershop or salon on the platform.',
                url: 'https://hairhub.id/',
                teamwork: 'Teamwork Project',
                role: 'Front End Developer, UI/UX Designer',
                date: 'October 20, 2023',
                techStack: [
                    {
                        id: 0,
                        logo: <FaReact className='w-full h-full text-sky-500' />,
                        title: 'React JS'
                    },
                    {
                        id: 1,
                        logo: <BiLogoTailwindCss className="w-full h-full text-teal-500" />,
                        title: 'Tailwind CSS'
                    },
                    {
                        id: 2,
                        logo: <SiExpress className=' w-full h-full text-slate-200' />,
                        title: 'Express JS'
                    },
                    {
                        id: 3,
                        logo: <SiMysql className="w-full h-full text-indigo-700" />,
                        title: 'MySQL'
                    },
                ]
            },
            {
                id: 1,
                logo: LogoBeranibicara,
                banner: BeraniBicara,
                title: 'Berani Bicara',
                desc: 'We are Berani Bicara, a platform for those seeking justice and support in facing sexual harassment. Our mission is to protect, support, and empower individuals who have gone through this painful experience.',
                url: 'https://beranibicara.my.id/',
                teamwork: 'Teamwork Project',
                role: 'Front End Developer, UI/UX Designer',
                date: 'September 7, 2023',
                techStack: [
                    {
                        id: 0,
                        logo: <FaReact className='w-full h-full text-sky-500' />,
                        title: 'React JS'
                    },
                    {
                        id: 1,
                        logo: <BiLogoTailwindCss className="w-full h-full text-teal-500" />,
                        title: 'Tailwind CSS'
                    },
                ]
            },
        ],
        score: '-',
    },
    {
        id: 7,
        image: il2,
        serialNumber: '006/IL-SIB/BEST-MASPP/I/2024',
        title: 'Best Non-Merge Product',
        desc: 'This certificate is awarded in appreciation for Undefined Team hard work during Independent Study Web Development at Infinite Learning Batch 5 from August 2023 to December 2023',
        date: 'January 8, 2024',
        validUntil: '-',
        publisher: 'Infinite Learning',
        url: '-',
        category: 'Web Development',
        project: [
            {
                id: 0,
                logo: LogoHairhub,
                banner: Hairhub,
                title: 'HairHub',
                desc: 'A JavaScript-based front-end and back-end website that serves as an information and reservation system for barbershops and salons. Users can register, search for barbershops or salons, make reservations, and promote their own barbershop or salon on the platform.',
                url: 'https://hairhub.id/',
                teamwork: 'Teamwork Project',
                role: 'Front End Developer, UI/UX Designer',
                date: 'October 20, 2023',
                techStack: [
                    {
                        id: 0,
                        logo: <FaReact className='w-full h-full text-sky-500' />,
                        title: 'React JS'
                    },
                    {
                        id: 1,
                        logo: <BiLogoTailwindCss className="w-full h-full text-teal-500" />,
                        title: 'Tailwind CSS'
                    },
                    {
                        id: 2,
                        logo: <SiExpress className=' w-full h-full text-slate-200' />,
                        title: 'Express JS'
                    },
                    {
                        id: 3,
                        logo: <SiMysql className="w-full h-full text-indigo-700" />,
                        title: 'MySQL'
                    },
                ]
            },
        ],
        score: '-',
    },
    {
        id: 7,
        image: wideedu,
        serialNumber: '-',
        title: 'Hello World from Java',
        desc: 'This certificate is awarded for completing the Hello World from Java class on the Wideedu platform',
        date: 'December 13, 2022',
        validUntil: '-',
        publisher: 'Wide Edu',
        url: '-',
        category: 'Desktop Development',
        project: [],
        score: '-',
    },
]

export default Award