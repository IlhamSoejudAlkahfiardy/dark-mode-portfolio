import Sample from "../images/project/image/sample.svg";
import LogoHairHub from "../images/project/logo/hairhub.png";
import ImageHairHub from "../images/project/image/hairhub.png";
import LogoBeraniBicara from "../images/project/logo/beranibicara.png";
import ImageBeraniBicara from "../images/project/image/beranibicara.png";
import LogoHavenBook from "../images/project/logo/havenbook.png";
import ImageHavenBook from "../images/project/image/havenbook.png";
import ImageWeatherApp from "../images/project/image/weather-app.png";
import ImageBank from "../images/project/image/bank.png";
import ImageCashier from "../images/project/image/cashier.jpg";
import ImageLMSKlojen from "../images/project/image/LMSKlojen.png";
import ImageStudentLMS from "../images/project/image/student-lms.jpg";
import ImageTeacherLMS from "../images/project/image/teacher-lms.jpg";
import ImageAuction from "../images/project/image/auction.png";
import ImagePorto from "../images/project/image/porto.png";
import LogoPorto from "../images/project/logo/porto.png";

const Project = [
  {
    id: 0,
    logo: LogoHairHub,
    image: ImageHairHub,
    title: "HairHub",
    desc: "HairHub is an innovative website platform that serves as a central information hub for owners and users of barbershops and salons in the Greater Jakarta Area (Jabodetabek). The platform was developed in 2023, and we are committed to providing detailed and accurate information, facilitating business owners in effectively promoting their services, while users can easily discover and rate various barbershops and salons. With HairHub, we are dedicated to supporting the growth of the barbershop and salon industry!",
    hosting: "https://www.hairhub.id",
    github:
      "https://github.com/IlhamSoejudAlkahfiardy/frontend-MassiveProject-InfiniteLearning",
    date: "23-10-2023",
    category: "latest",
    active: true,
    teams: [
      {
        name: "Danang",
        role: "Back End Developer",
      },
      {
        name: "Ilham",
        role: "Front End Developer",
      },
      {
        name: "Tiara",
        role: "Front End Developer",
      },
      {
        name: "Asmali",
        role: "Project Manager",
      },
      {
        name: "Ariska",
        role: "UI/UX Designer",
      },
      {
        name: "Ismi",
        role: "UI/UX Designer",
      },
      {
        name: "Syita",
        role: "UI/UX Designer",
      },
    ],
  },
  {
    id: 1,
    logo: LogoBeraniBicara,
    image: ImageBeraniBicara,
    title: "Berani Bicara",
    desc: "We are Berani Bicara, a platform for those seeking justice and support in facing sexual harassment. Our mission is to protect, support, and empower individuals who have gone through this painful experience.",
    hosting: "https://beranibicara.my.id/",
    github: "https://github.com/IlhamSoejudAlkahfiardy/macro-project-IL",
    date: "07-09-2023",
    category: "latest",
    active: true,
    teams: [
      {
        name: "Danang",
        role: "UX Developer",
      },
      {
        name: "Ilham",
        role: "Front End Developer",
      },
      {
        name: "Rafael",
        role: "Project Manager",
      },
      {
        name: "Tania",
        role: "UI/UX Designer",
      },
      {
        name: "Gilang",
        role: "UI/UX Designer",
      },
      {
        name: "Adit",
        role: "UI/UX Designer",
      },
    ],
  },
  {
    id: 2,
    logo: LogoHavenBook,
    image: ImageHavenBook,
    title: "HavenBook",
    desc: "HavenBook is a website that serves its users to rent books with various categories, genres, titles, and prices. With easy and fast payment methods, as well as user-friendly features for new users, we aim to provide you with a good book rental experience.",
    hosting: "-",
    github: "-",
    date: "05-06-2023",
    category: "latest",
    active: false,
    teams: [
      {
        name: "Ilham",
        role: "Back End & Front End Developer",
      },
      {
        name: "Tommy",
        role: "Back End & Front End Developer",
      },
      {
        name: "Arini",
        role: "UI/UX Designer",
      },
    ],
  },
  {
    id: 3,
    logo: "-",
    image: ImageWeatherApp,
    title: "Weather App",
    desc: "The Weather App is a website that can provide data such as temperature, wind speed, and humidity levels for a specific region. You can input the name of your region in the search field, then press the search button, and the data will appear.",
    hosting: "https://alkahfiardyweatherapp.vercel.app",
    github: "https://github.com/IlhamSoejudAlkahfiardy/weather-app",
    date: "15-03-2023",
    category: "archive",
    active: true,
    teams: [
      {
        name: "Ilham",
        role: "Fullstack Developer",
      },
    ],
  },
  {
    id: 4,
    logo: "-",
    image: ImageBank,
    title: "Virtual Account Payment",
    desc: "A simulation of payment through a virtual account, serving as a learning project and a payment tool in my personal project.",
    hosting: "-",
    github:
      "https://github.com/IlhamSoejudAlkahfiardy/Auction.co.id/tree/master/Bank",
    date: "2019",
    category: "archive",
    active: false,
    teams: [
      {
        name: "Ilham",
        role: "Fullstack Developer",
      },
    ],
  },
  {
    id: 5,
    logo: "-",
    image: ImageCashier,
    title: "Cafe Cashier Desktop App",
    desc: "A desktop-based Java payment application that can handle menu orders. Users can input available menu items, add menu items, update quantities, delete items, and make payments on the platform.",
    hosting: "-",
    github: "-",
    date: "2022",
    category: "archive",
    active: false,
    teams: [
      {
        name: "Ilham",
        role: "Fullstack Developer",
      },
    ],
  },
  {
    id: 6,
    logo: "-",
    image: ImageLMSKlojen,
    title: "LMS Elementary School Klojen 1 ",
    desc: "A learning management system website for Klojen 1 Elementary School. This website features functionalities such as data upload via Excel, adding classes, student and teacher management, and more.",
    hosting: "-",
    github: "-",
    date: "2021",
    category: "archive",
    active: false,
    teams: [
      {
        name: "Zidan",
        role: "Project Manager",
      },
      {
        name: "Ilham",
        role: "Back End Developer",
      },
      {
        name: "Nayaka",
        role: "Back End Developer",
      },
      {
        name: "Yusuf",
        role: "System Analyst",
      },
      {
        name: "Yosi",
        role: "System Analyst",
      },
      {
        name: "Dimas",
        role: "Front End Developer",
      },
      {
        name: "Wishnu",
        role: "Tester",
      },
      {
        name: "Aisyah",
        role: "UI/UX Designer",
      },
    ],
  },
  {
    id: 7,
    logo: "-",
    image: ImageStudentLMS,
    title: "LMS for Vocational High School Student",
    desc: "A Java-based desktop learning management system application for vocational high school 4 students in Malang. The features available in this application include student and class management, CRUD (Create, Read, Update, Delete) for assignments, grades, and updating personal information",
    hosting: "-",
    github: "-",
    date: "2021",
    category: "archive",
    active: false,
    teams: [
      {
        name: "Ilham",
        role: "Fullstack Developer",
      },
    ],
  },
  {
    id: 8,
    logo: "-",
    image: ImageTeacherLMS,
    title: "LMS for Vocational High School Teacher",
    desc: "A Java-based desktop learning management system application for vocational high school 4 teacher in Malang. The features available in this application include student and class management, CRUD (Create, Read, Update, Delete) for assignments, grades, and updating personal information",
    hosting: "-",
    github: "-",
    date: "2021",
    category: "archive",
    active: false,
    teams: [
      {
        name: "Ilham",
        role: "Fullstack Developer",
      },
    ],
  },
  {
    id: 10,
    logo: LogoPorto,
    image: ImagePorto,
    title: "Personal Portfolio Web",
    desc: "A personal web portfolio showcasing past projects, skills, personal bio, and a 'Contact Me' section for users interested in collaboration.",
    hosting: "-",
    github: "https://github.com/IlhamSoejudAlkahfiardy/Auction.co.id/tree/master/Lelang",
    date: "Now",
    category: "archive",
    active: true,
    teams: [
      {
        name: "Ilham",
        role: "Front End Developer",
      },
    ],
  },
  {
    id: 9,
    logo: "-",
    image: ImageAuction,
    title: "Online Auction",
    desc: "A website that serves online auction services. Users can update their profile information, place bidding offers, and upload items for auction. There is also an admin role that can manage items, users, and transactions.",
    hosting: "-",
    github: "https://github.com/IlhamSoejudAlkahfiardy/Auction.co.id/tree/master/Lelang",
    date: "2021",
    category: "archive",
    active: false,
    teams: [
      {
        name: "Ilham",
        role: "Fullstack Developer",
      },
    ],
  },
];

export default Project;
