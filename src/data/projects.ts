
import { type Project } from '../types';
import motrFront from '../assets/projects/motr-front.svg';
import motrBack from '../assets/projects/motr-back.svg';
import kinnectFront from '../assets/projects/kinnect-front.svg';
import kinnectBack from '../assets/projects/kinnect-back.svg';
import portalboxImage from '../assets/projects/portalhands.png';
import siteImage from '../assets/projects/sitemockup.png';

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
    image: portalboxImage,
    description: 'The Portal Box project is a do-it-yourself option for equipment access control designed for small shops and makerspaces.',
    tags: expandTags(['hardware', 'esp32', 'Micropython']),
    featured: true,
    githubUrl: 'https://github.com/Foster-05/PortalBox-5.1',
    alwaysShowProject: true,
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
