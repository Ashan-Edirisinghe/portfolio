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
    image: "/assets/projects/web/hr-1.png",
    images: [
      "/assets/projects/hr/hr1.png",
      "/assets/projects/hr/hr2.png",
      "/assets/projects/hr/hr3.png",
      "/assets/projects/hr/hr4.png",
      "/assets/projects/hr/hr5.png",
      "/assets/projects/hr/hr6.png",


      
    ],
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
    image: "/assets/projects/sms/sm1.png",
    images: [
      "/assets/projects/sms/sm1.png",
      "/assets/projects/sms/sm2.png",
      "/assets/projects/sms/sm3.png",
      "/assets/projects/sms/sm4.png"
    ],
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
    href: "https://solidweddings.netlify.app",
    logo: "",
    image: "/assets/projects/sw.png",
    images: [
      "/assets/projects/sw.png",
      
    ],
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
    image: "/assets/projects/web/ecommerce-1.png",
    images: [
      "/assets/projects/web/ecommerce-1.png",
      "/assets/projects/web/ecommerce-2.png",
      "/assets/projects/web/ecommerce-3.png"
    ],
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
    title: "Website Host In DIGITAL OCEAN",
    description: "",
    subDescription: [
       "~Created two CI/CD pipelines using GitHub Actions:",
       "~Docker Pipeline: Built Docker images with Docker Compose and deployed them to Docker Hub.",
       "~Deployment Pipeline: Automated the deployment process to the DigitalOcean droplet.",
       "~Configured the remote server by SSH access and installed Docker to streamline setup and orchestration.",
       "~Implemented load balancing using Nginx proxy to manage and distribute traffic across three running containers of the application for better scalability and reliability.",
    ],
    href: "http://ashandev.codes",
    logo: "",
    image: "/assets/projects/web/digitalocean-1.png",
    images: [
      "/assets/projects/web/digitalocean-1.png",
      "/assets/projects/web/digitalocean-2.png",
      "/assets/projects/web/digitalocean-3.png"
    ],
    tags: [
      {
        id: 1,
        name: "NGINX",
        path: "/assets/logos/nginx.png",
      },
      {
        id: 2,
        name: "GITHUB ACTIONS",
        path: "/assets/logos/actions.png",
      },
      {
        id: 3,
        name: "DOCKER",
        path: "/assets/logos/docker.png",
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
