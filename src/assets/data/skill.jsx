import {
  FaReact,
  FaHtml5,
  FaPython,
  FaCss3Alt,
  FaVuejs,
  FaJava,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaNpm,
  FaGithub
} from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoPostgresql
} from "react-icons/bi";
import {
  SiMysql,
  SiPostman,
  SiCplusplus,
  SiDaisyui,
  SiReactrouter,
  SiVite,
  SiApache,
  SiNginx,
  SiMicrosoftsqlserver,
  SiCanva
} from "react-icons/si";
import {
  DiCodeigniter,
  DiJqueryLogo
} from "react-icons/di";
import {
  IoLogoJavascript,
  IoLogoFigma,
  IoLogoVercel 
} from "react-icons/io5";
import { FiFramer } from "react-icons/fi";
import {
  FaGitAlt,
  FaGitlab
} from "react-icons/fa6";


const Skill = [
  {
    id: 0,
    logo: <FaReact className="w-full h-full text-sky-500" />,
    title: "React Js",
    delay: 0.1
  },
  {
    id: 12,
    logo: <FaVuejs className="w-full h-full text-emerald-500" />,
    title: "Vue Js",
    delay: 0.3
  },
  {
    id: 1,
    logo: <BiLogoTailwindCss className="w-full h-full text-teal-500" />,
    title: "Tailwind CSS",
    delay: 0.2
  },
  {
    id: 2,
    logo: <FaBootstrap className="w-full h-full text-violet-500" />,
    title: "Bootstrap",
    delay: 0.3
  },
  {
    id: 4,
    logo: <DiCodeigniter className="w-full h-full text-red-600" />,
    title: "CodeIgniter",
    delay: 0.4
  },
  {
    id: 3,
    logo: <SiMysql className="w-full h-full text-indigo-700" />,
    title: "MySQL",
    delay: 0.5
  },
  {
    id: 5,
    logo: <FaLaravel className="w-full h-full text-rose-700" />,
    title: "Laravel",
    delay: 0.1
  },
  {
    id: 6,
    logo: <FaPhp className="w-full h-full text-indigo-800" />,
    title: "PHP",
    delay: 0.2
  },
  {
    id: 7,
    logo: <IoLogoJavascript className="w-full h-full text-yellow-400" />,
    title: "JavaScript",
    delay: 0.3
  },
  {
    id: 8,
    logo: <FaJava className="w-full h-full text-red-900" />,
    title: "Java",
    delay: 0.4
  },
  {
    id: 9,
    logo: <FiFramer className='w-full h-full text-fuchsia-600' />,
    title: "Framer Motion",
    delay: 0.5
  },
  {
    id: 10,
    logo: <DiJqueryLogo className="w-full h-full text-sky-800" />,
    title: "JQuery",
    delay: 0.1
  },
  {
    id: 11,
    logo: <FaCss3Alt className="w-full h-full text-orange-600" />,
    title: "CSS 3",
    delay: 0.2
  },
  {
    id: 12,
    logo: <SiPostman className="w-full h-full text-orange-500" />,
    title: "Postman",
    delay: 0.3
  },
  {
    id: 13,
    logo: <FaHtml5 className="w-full h-full text-orange-700" />,
    title: "HTML5",
    delay: 0.4
  },
  {
    id: 14,
    logo: <SiCplusplus className="w-full h-full text-sky-700" />,
    title: "C++",
    delay: 0.5
  },
  {
    id: 15,
    logo: <FaPython className="w-full h-full text-yellow-600" />,
    title: "Python",
    delay: 0.1
  },
  {
    id: 16,
    logo: <IoLogoFigma className="w-full h-full text-pink-600" />,
    title: "Figma",
    delay: 0.2
  },
  {
    id: 17,
    logo: <SiDaisyui className="w-full h-full text-purple-300" />,
    title: "DaisyUI",
    delay: 0.3
  },
  {
    id: 18,
    logo: <FaNpm className="w-full h-full text-red-600" />,
    title: "NPM",
    delay: 0.4
  },
  {
    id: 19,
    logo: <SiReactrouter className="w-full h-full text-red-600" />,
    title: "React Router",
    delay: 0.5
  },
  {
    id: 20,
    logo: <SiVite className="w-full h-full text-fuchsia-600" />,
    title: "ViteJS",
    delay: 0.1
  },
  {
    id: 21,
    logo: <SiApache className="w-full h-full text-red-500" />,
    title: "Apache Web Server",
    delay: 0.2
  },
  {
    id: 22,
    logo: <SiNginx className="w-full h-full text-green-700" />,
    title: "Nginx Web Server",
    delay: 0.3
  },
  {
    id: 23,
    logo: <SiMicrosoftsqlserver className="w-full h-full text-red-600" />,
    title: "Microsoft SQL Server",
    delay: 0.4
  },
  {
    id: 24,
    logo: <BiLogoPostgresql className="w-full h-full text-indigo-900" />,
    title: "PostgreSQL",
    delay: 0.5
  },
  {
    id: 25,
    logo: <SiCanva className="w-full h-full text-cyan-400" />,
    title: "Canva",
    delay: 0.1
  },
  {
    id: 26,
    logo: <FaGitAlt className="w-full h-full text-red-600" />,
    title: "Git",
    delay: 0.2
  },
  {
    id: 27,
    logo: <FaGithub className="w-full h-full text-zinc-100" />,
    title: "GitHub",
    delay: 0.3
  },
  {
    id: 28,
    logo: <FaGitlab className="w-full h-full text-orange-600" />,
    title: "GitLab",
    delay: 0.4
  },
  {
    id: 29,
    logo: <IoLogoVercel className="w-full h-full text-white" />,
    title: "Vercel",
    delay: 0.5
  }
];

export default Skill;
