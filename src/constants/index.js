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
  finkassa,
  kinamarket_web_app,
  nattupedika,
  pind_balluchi,
  gayaan,
  electriva,
  github_social,
  linkedIn,
  mail
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

const socials = [
  {
    socialUrl: "https://github.com/vpsines",
    icon: github_social,
    title:"Github",
  },
  {
    socialUrl: "https://www.linkedin.com/in/vyshnav-sasidharan",
    icon: linkedIn,
    title:"LinkedIn",

  },
  {
    socialUrl: "mailto:vyshnavs0811@gmail.com",
    icon: mail,
    title:"E-mail",
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
    name: "Gayaan",
    description:
      "Gayaan is redefining matchmaking by providing a secure, feature-rich, and culturally tailored dating experience for Somali singles worldwide.",
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
    image: gayaan,
    source_code_link: "https://github.com/",
    isMobileApp:true,
    live_link:"https://kiinamarketwebshop.web.app/",
    isMobileApp:false,
    isPlaybackVideo:true,
  },
  {
    name: "Kinnemarket Web App",
    description:
      "An innovative geographic data provider app built with Flutter, Firebase, and Firebase Cloud Messaging.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "firebase-cloud-messaging",
        color: "pink-text-gradient",
      },
    ],
    image: kinamarket_web_app,
    source_code_link: "https://github.com/",
    live_link:"https://kiinamarketwebshop.web.app/",
    isMobileApp:false,
    isPlaybackVideo:false,
  },
  {
    name: "Electriva",
    description:
      "A Flutter-based mobile application that enables seamless EV charging by providing real-time charging station locations ",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "google-map-api",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: electriva,
    source_code_link: "https://github.com/",
    live_link:"https://play.google.com/store/apps/details?id=com.electriva",
    isMobileApp:true,
    isPlaybackVideo:true,
    isSourceCodeAvailable:false,
  },
  {
    name: "Pind Balluchi",
    description:
      "A cutting‑edge restaurant ordering mobile app built using Flutter and Firebase.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "google-map-api",
        color: "green-text-gradient",
      },
      {
        name: "firebase-auth",
        color: "pink-text-gradient",
      },
    ],
    image: pind_balluchi,
    source_code_link: "https://github.com/",
    isSourceCodeAvailable:false,
    isPlaybackVideo:false,
    live_link:"https://play.google.com/store/apps/details?id=com.app.uengage.pindballuchi"
  },
  {
    name: "Loha",
    description:
      "An intuitive e-commerce app for creating, customizing, and purchasing digital and printed collage albums.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase-cloud-messaging",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    isPlaybackVideo:true,
    isSourceCodeAvailable:false,
  },
  {
    name: "Nattupedika",
    description:
      "An innovative geographic data provider app built with Flutter, Firebase, and Firebase Cloud Messaging.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "firebase-cloud-messaging",
        color: "pink-text-gradient",
      },
    ],
    image: nattupedika,
    source_code_link: "https://github.com/Nattupeedikaa/nattupedika",
    isMobileApp:true,
    isSourceCodeAvailable:true,
    isPlaybackVideo:false,
  },
];

const keys = {
  service_key:import.meta.env.VITE_EMAILJS_SERVICE_KEY,
  template_key:import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
  public_key:import.meta.env.VITE_EMAIJS_PUBLIC_KEY
};

const resumeUrl = "https://drive.google.com/file/d/1ruC-LTnIRSVywUiXImwSbSNysD3JMil8/view?usp=sharing";

export { services, technologies, experiences, testimonials, projects, keys, resumeUrl, socials };