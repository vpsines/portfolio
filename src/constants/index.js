import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  firebase,
  dart,
  postgresql,
  experion,
  agrivator,
  finkassa
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "PostgreSql",
    icon: postgresql,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Experion Technologies",
    icon: experion,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Jul 2023",
    points: [
      "Developed and deployed innovative front‑end applications using SharePoint Online, SPFX, React, Typescript, HTML/CSS.",
      "Developed, maintained, and shipped production code for client websites using Angular Typescript and .Net.",
      "Coordinated with cross‑functional and offshore teams to expedite product development and response to customer requests and escalations.",
      "Conducted an engaging and informative presentation on ”Introduction to Flutter”, showcasing the power and versatility of Flutter.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Finkassa Oy",
    icon: finkassa,
    iconBg: "#383E56",
    date: "May 2021 - Dec 2021",
    points: [
      "Executed end‑to‑end development process of an e‑commerce mobile app with Flutter and Firebase using GetX State management.",
      "Formulated an E-commerce web application featuring an admin dashboard and customer profiling with Flutter and Firebase by implementing Providers.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Conceived and built a Point of Sale Android application using Flutter, including architecture, design and development.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Agrivator",
    icon: agrivator,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Apr 2021",
    points: [
      "Collaborated with cross‑functional teams to create feature‑rich an e-commerce mobile applications using Flutter and Dart for different users.",
      "Standardized the apps delivering the same quality and User Interface/User Experience(UI/UX) whilst minimizing duplication of effort",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Streamlined REST API integration process by identifying and resolving compatibility issues between web and mobile versions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };