import { FaCode } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";

const JobDesk = [
    {
        id: 0,
        title: 'Web Development',
        icon: <FaCode className="w-full h-full text-rose-700" />,
        delay:0.1
    },
    {
        id: 1,
        title: 'Database Administrator',
        icon: <BsDatabaseFillGear className="w-full h-full text-gray-700" />,
        delay:0.2
    },
    {
        id: 2,
        title: 'Front End Developer',
        icon: <FaCss3Alt className="w-full h-full text-orange-600" />,
        delay:0.3
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        icon: <CgFigma className="w-full h-full text-indigo-700" />,
        delay:0.4
    },
]

export default JobDesk