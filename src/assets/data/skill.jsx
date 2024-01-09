import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


const Skill = [
  {
    id: 0,
    logo: <FaReact className="w-full h-full text-sky-500" />,
    title: "React Js",
  },
  {
    id: 1,
    logo: <BiLogoTailwindCss className="w-full h-full text-teal-500" />,
    title: "Tailwind CSS",
  },
  {
    id: 2,
    logo: <FaBootstrap className="w-full h-full text-violet-500" />,
    title: "Bootstrap",
  },
  {
    id: 4,
    logo: <DiCodeigniter className="w-full h-full text-red-600" />,
    title: "CodeIgniter",
  },
  {
    id: 3,
    logo: <SiMysql className="w-full h-full text-indigo-700" />,
    title: "MySQL",
  },
  {
    id: 5,
    logo: <FaLaravel className="w-full h-full text-rose-700" />,
    title: "Laravel",
  },
  {
    id: 6,
    logo: <FaPhp className="w-full h-full text-indigo-800" />,
    title: "PHP",
  },
  {
    id: 7,
    logo: <IoLogoJavascript className="w-full h-full text-yellow-400" />,
    title: "JavaScript",
  },
];

export default Skill;
