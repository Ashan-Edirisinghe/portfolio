import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "HR Website",
    description:
      "Managing employees leave requests in Zonal Education office of mulatiyana",
    subDescription: [
      "~Design the frontend of the admin dashboard.",
      "~Implemented leave form submitting functionality.",
      "~Developed managing controls for employee leave requests.",
       
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/Rival.png",
    tags: [
      {
        id: 1,
        name: "PHP",
        path: "/assets/logos/php.png",
      },
      {
        id: 2,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "Boostrap",
        path: "/assets/logos/boostrap.png",
      },
      {
        id: 4,
        name: "MYSQL",
        path: "/assets/logos/mysql.jpg",
      }
    ],
  },
  {
    id: 2,
    title: "Student Management System",
    description: "For managing & monitoring students enrolment for postgraduate students in faculty of graduate studies .",
    subDescription: [
       "~Designed and programmed admin dashboard.",
        "~Implemented web socket technology to send real time notifications.",
       "~Developed a time line tracker and count down for degree progress.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/Runner of the maze.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.png",
      },
      {
        id: 2,
        name: "ExpressJS",
        path: "/assets/logos/express.png",
      },
      {
        id: 3,
        name: "Socket.io",
        path: "/assets/logos/socket.png",
      },
      {
        id:4,
        name: "MYSQL",
        path: "/assets/logos/mysql.jpg",
      }
    ],
  },
  {
    id: 3,
    title: "Solid Weddings",
    description: "A  photography website for a client to contact customers and showcase hit gallery and services.",
    subDescription: [
      "~Developed email sending function using email.js for users to contact the owner.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/Trigger.png",
    tags: [
      {
        id: 1,
        name: "MERN",
        path: "/assets/logos/mern.svg",
      },
     
      {
        id: 2,
        name: "Email.js",
        path: "/assets/logos/express.png",
      },
    ],
  },
  {
    id: 4,
    title: "E-Commerce REST API",
    description: "An E-commerce REST API designed for managing basic operations in a web store.",
    subDescription: [
     "~Developed user, product,cart and order management methods",
     "~Used JWT authentication for user login",
     "~Test the API using postman",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/Grow in the Dark.png",
    tags: [
      {
        id: 1,
        name: "NodeJS",
        path: "/assets/logos/nodeimg.png",
      },
      {
        id: 2,
        name: "ExpressJS",
        path: "/assets/logos/express.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongo.png",

      },
      {
        id: 4,
        name: "Postman",
        path: "/assets/logos/postman.svg",

      },
    ],
  },
  {
    id: 5,
    title: "Runner",
    description: "A simple platformer game built in Unity where the player must keep moving forward without falling.",
    subDescription: [
      "Developed in Unity with C# focusing on smooth forward movement and platforming mechanics.",
      "Designed challenging platforms that test timing and precision as the player progresses.",
      "Optimized controls and physics for a responsive and seamless gameplay experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/games/Runner.png",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "Unity",
        path: "/assets/logos/unity.svg",
      },
      {
        id: 3,
        name: "Blender",
        path: "/assets/logos/blender.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Karathe player detection system",
    description: "A computer vision–based system designed to detect karate players’ positions and identify when a player moves out of the fighting circle, assisting referees and umpires in decision-making.",
    subDescription: [
      "Developed using computer vision techniques to track player movements accurately in real time.",
      "Implemented boundary detection to identify when players step outside the circle.",
      "Designed as an assistive tool to support referees in maintaining fairness during matches.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/AI/karathe.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
    ],
  },
  {
    id: 7,
    title: "A driver safety system",
    description: "A driver safety system built with Python and MediaPipe to detect signs of drowsiness and alert the driver in real time.",
    subDescription: [
      "Implemented facial landmark detection using the MediaPipe library to monitor eye status and head position.",
      "Developed algorithms to identify when the driver shows signs of sleep or drowsiness.",
      "Integrated an alert mechanism that activates when drowsiness is detected to improve road safety.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/AI/sleep detection.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ashanedirisinghe",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Blogger",
    href: "https://dev-odessy.hashnode.dev/",
    icon: "/assets/socials/blog.png",
  },
  {
    name: "GITHUB",
    href: "https://github.com/Ashan-Edirisinghe",
    icon: "/assets/socials/hub.png",
  },
];

export const experiences = [
  {
    title: "Volunteer Lead",
    job: "IEEE Student Branch  Sabaragamuwa University of Sri Lanka",
    date: "NOV 2025-Present",
    contents: [
      " Coordinating an introduction event for new members of IEEE.",
      "Collaborating with the executive committee to organize proposals,designs,marketing plans.",
      "Guiding members of volunteer teams to contribute to the project  .",
       
    ],
  },
  {
    title: "Educator",
    job: "STEMUP EDUCAITONAL FOUNDATION",
    date: "JUL  2025",
    contents: [
       "Taught Web design concepts to   students in rathnapura library using HTML,CSS.",
    ],
  } 
];
export const reviews = [
  {
    name: "AWS BASIC",
    username: "",
    body: "",
    img: "/assets/Certificates/aws-basic.png",
  },
  {
    name: "Linux FUNDAMENTALS",
    username: "",
    body: "",
    img: "/assets/Certificates/linux.png",
  },
  {
    name: "Devops FUNDAMENTALS",
    username: "",
    body: "",
    img: "/assets/Certificates/devops.png",
  },
  {
    name: "DOCKER FUNDAMENTALS",
    username: "",
    body: "",
    img: "/assets/Certificates/docker.png",
  },
  {
    name: "Agile PROJECT MANAGEMENT",
    username: "",
    body: "",
    img: "/assets/Certificates/agile.png",
  },
  {
    name: "Semi Finalist - BRAINSTORM 2025",
    username: "",
    body: "MEDITEC",
    img: "/assets/badges/meditec.png",
  },
   
];
