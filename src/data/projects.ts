
import { type Project } from '../types';
import motrFront from '../assets/projects/motr-front.svg';
import motrBack from '../assets/projects/motr-back.svg';
import kinnectFront from '../assets/projects/kinnect-front.svg';
import kinnectBack from '../assets/projects/kinnect-back.svg';
import siteImage from '../assets/projects/sitemockup.png';
import portalThumbnail from '../assets/projects/portalhands.png';
import portalOld from '../assets/projects/portalOld.jpg';
import portalLayout from '../assets/projects/portalPCB.png';
import portalSchematic from '../assets/projects/portalSchem.png';
import portalComparison from '../assets/projects/portalComp.jpeg';

// Common tags mapping
export const commonTags: Record<string, string[]> = {
  hardware: ['Hardware', 'KiCAD', 'Embedded'],
  webdev: ['Web Dev', 'Typescript', 'React'],
  backend: ['Backend', 'Node.js', 'REST API'],
  esp32: ['ESP32', 'IoT',],
  software: ['Software', 'C++'],
  // Add more as needed
};

function expandTags(tags: string[]): string[] {
  const expanded = tags.flatMap(tag =>
    commonTags[tag.toLowerCase()] ? commonTags[tag.toLowerCase()] : [tag]
  );
  // Remove duplicates
  return Array.from(new Set(expanded));
}

export const projects: Project[] = [
  {
    id: 'portalbox',
    title: 'PortalBox',
    image: portalThumbnail,
    description: 'The Portal Box project is a do-it-yourself option for equipment access control designed for small shops and makerspaces.',
    tags: expandTags(['hardware', 'esp32', 'Micropython']),
    featured: true,
    githubUrl: 'https://github.com/Foster-05/PortalBox-5.1',
    alwaysShowProject: true,
    images: [portalOld, portalLayout, portalSchematic, portalComparison],
    longDescription: 
    
    `The Portal Box project is a do-it-yourself option for equipment access control designed for small shops and makerspaces. 
      The system uses interlocks to ensure that equipment can only be powered on when authorized users are present, enhancing safety and security in shared workspaces.\n\n

      I had the privilege of collaborating on Version 5 of the PortalBox system, focusing on improved speed and reliability by
      optimizing the PCB design and firmware implementation. We also aimed to reduce costs and enhance user experience through better documentation and assembly instructions.\n\n

      My primary contributions to the project centered on the embedded software and electronics design foundation. I created the initial KiCAD schematic based on previous versions, 
      establishing the groundwork for our hardware revision.\n\n
      
      Drawing on my experience with KiCAD, I mentored team members in PCB layout best practices, ensuring a robust and manufacturable design.
      This collaborative approach allowed us to iterate rapidly through design revisions while maintaining consistency and quality in our hardware development.\n\n
      
      On the firmware side, I took full 
      ownership of the embedded software development. I wrote the entire firmware stack in MicroPython from scratch for the ESP32 microcontroller, reimagining and improving upon the functionality 
      from previous versions that had run on Raspberry Pi.\n\n
      
      I also collaborated with an additional team member to update the REST API and PHP management portal, ensuring seamless integration between 
      the embedded firmware and the web-based management system. This work was essential for creating a cohesive user experience and allowing administrators to easily configure and monitor their 
      equipment access systems.\n\n
      
      The modular, open-source nature of the project means all our work is available on our public GitHub repository, enabling makerspaces worldwide to implement and 
      customize the PortalBox for their needs.`,
      
    features: [
      'User authentication via RFID cards',
      'Web-based management interface',
      'Real-time access logging',
      'Touchscreen display for user interaction',
    ],
  },
  {
    id: 'bucknell-racing', //placeholder project for baja differential control system
    title: 'Bucknell Racing Electronics',
    description: 'Placeholder.',
    tags: expandTags(['hardware', 'Automotive']),
    featured: false,
    alwaysShowProject: false,
  },
  {
    id: 'music-of-the-ring',
    title: 'Music of the Ring',
    description: 'Performance art project utilizing sensor data collected from boxing gloves during a boxing match to generate a digital music accompaniment.',
    tags: expandTags(['hardware', 'esp32', 'Sensors', 'Music Tech', 'Performance Art']),
    featured: true,
    githubUrl: 'https://github.com/gabegolem/music-of-the-ring',
    pcbImages: {
      front: motrFront,
      back: motrBack,
    },
    alwaysShowProject: true
  },
  {
    id: 'kinnect-senior-living',
    title: 'KinNect for Senior Living',
    description: 'KinNect helps bridge the barrier of digital communication with an accessible, one-button system that enables residents in assisted living facilities to easily connect with their loved ones.',
    tags: expandTags(['hardware', 'esp32','Consulting']),
    featured: true,
    websiteUrl: 'https://seniorlivingkinnect.com/',
    pcbImages: {
      front: kinnectFront,
      back: kinnectBack,
    },
    alwaysShowProject: true
  },
  {
    id: 'stewardview',
    title: 'StewardView',
    description: 'StewardView transforms how land trusts and conservation organizations monitor environmental change on their trails.',
    tags: expandTags(['webDev', 'backend', 'Google APIs']),
    featured: true,
    githubUrl: 'https://github.com/ACherniske/stewardview',
    liveUrl: 'https://acherniske.github.io/StewardView/',
    alwaysShowProject: true,
  },
  {
    id: 'personal-website',
    title: 'Personal Website',
    image: siteImage,
    description: 'This very website! Built from scratch using React and TailwindCSS to showcase my projects, skills, and experience.',
    tags: expandTags(['webDev', 'TailwindCSS', 'Vite']),
    featured: true,
    githubUrl: 'https://github.com/ACherniske/acherniske.github.io',
    liveUrl: 'https://acherniske.github.io',
    alwaysShowProject: false,
  },
  {
    id: 'eceg431-nand2tetris',
    title: 'ECEG431: Nand2Tetris & Jack Tetris',
    description:
      'Completed the full nand2tetris course, building a computer from logic gates up to a full software stack including a implementation of Tetris in the Jack language with all game mechanics.',
    tags: expandTags(['software', 'HDL', 'Assembly', 'BASH', 'Compilers']),
    featured: true,
    githubUrl: 'https://github.com/ACherniske/ECEG431',
    websiteUrl: 'https://github.com/Swimotter/JackTetris',
    alwaysShowProject: false,
  },
];
