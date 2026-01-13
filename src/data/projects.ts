import { type Project } from '../types';
import motrFront from '../assets/projects/motr-front.svg';
import motrBack from '../assets/projects/motr-back.svg';
import kinnectFront from '../assets/projects/kinnect-front.svg';
import kinnectBack from '../assets/projects/kinnect-back.svg';
import portalboxImage from '../assets/projects/portalhands.png';
import siteImage from '../assets/projects/sitemockup.png';

export const projects: Project[] = [
  {
    id: 'portalbox',
    title: 'PortalBox',
    image: portalboxImage,
    description: 'The Portal Box project is a do-it-yourself option for equipment access control designed for small shops and makerspaces.',
    tags: ['KiCAD', 'ESP32', 'Micropython', 'IoT', 'Embedded', 'Hardware'],
    featured: true,
    githubUrl: 'https://github.com/Foster-05/PortalBox-5.1',
    alwaysShowProject: true,
  },
  {
    id: 'bucknell-racing', //placeholder project for baja differential control system
    title: 'Bucknell Racing Electronics',
    description: 'Placeholder.',
    tags: ['KiCAD', 'Automotive', 'Embedded'],
    featured: false,
    alwaysShowProject: false,
  },
  {
    id: 'music-of-the-ring',
    title: 'Music of the Ring',
    description: 'Performance art project utilizing sensor data collected from boxing gloves during a boxing match to generate an digital music accompaniment.',
    tags: ['ESP32', 'Sensors', 'Music Tech', 'Performance Art', 'Hardware'],
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
    tags: ['ESP32', 'Embedded', 'IoT','Consulting', 'Hardware'],
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
    tags: ['React', 'Javascript', 'REST API', 'Google APIs', 'Vercel', 'Web Dev'],
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
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Web Dev'],
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
    tags: ['HDL', 'Assembly', 'BASH', 'C++', 'Compilers', 'Software'],
    featured: true,
    githubUrl: 'https://github.com/ACherniske/ECEG431',
    liveUrl: 'https://github.com/Swimotter/JackTetris',
    alwaysShowProject: false,
  },
];
