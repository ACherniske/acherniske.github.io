import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import headshot from '../assets/headshot.png';
import AidenCherniskeResume from '../assets/AidenCherniskeResume.pdf';
import CircuitGenerator from '../utils/pcbBackground';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [autoPos, setAutoPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generatePattern = () => {
      const svg = document.getElementById('hero-pcb-bg');
      if (svg) {
        // Set proper dimensions
        const rect = svg.getBoundingClientRect();
        svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
      }
      
      const generator = new CircuitGenerator('hero-pcb-bg', {
        gridSpacing: 15,
        lineWidth: 3,
        lineColor: '#EF5B0C',
        padColor: '#DC4E08',
        branchProbability: 0.7,
      });
      generator.generate(3);
    };

    generatePattern();

    const handleResize = () => {
      generatePattern();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMouseOver) return;

    let animationFrameID: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const hero = document.getElementById('hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        //create a figure 8 or lissajous curve path
        const t = elapsed / 3000; //speed
        const x = width / 2 + Math.sin(t) * (width * 0.35);
        const y = height / 2 + Math.sin(t * 2) * (height * 0.35);

        setAutoPos({ x, y });
      }

      animationFrameID = requestAnimationFrame(animate);
    };

    animationFrameID = requestAnimationFrame(animate);

    return () => {
      if (animationFrameID) {
        cancelAnimationFrame(animationFrameID);
      }
    };
  }, [isMouseOver]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.getElementById('hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);

    const hero = document.getElementById('hero');
    hero?.addEventListener('mousemove', handleMouseMove);
    hero?.addEventListener('mouseenter', handleMouseEnter);
    hero?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      hero?.removeEventListener('mousemove', handleMouseMove);
      hero?.removeEventListener('mouseenter', handleMouseEnter);
      hero?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  //use mouse position when hovering, autopos otherwise
  const revealPos = isMouseOver ? mousePos : autoPos;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden"
    >
      {/* SVG Definitions for Mask */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <radialGradient id="reveal-gradient">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="15%" stopColor="white" stopOpacity="0.6" />
            <stop offset="30%" stopColor="white" stopOpacity="0.4" />
            <stop offset="50%" stopColor="white" stopOpacity="0.2" />
            <stop offset="70%" stopColor="white" stopOpacity="0.08" />
            <stop offset="85%" stopColor="white" stopOpacity="0.03" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id="feather-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
          </filter>
          <mask id="reveal-mask">
            <rect width="100%" height="100%" fill="rgba(255,255,255,0.03)" />
            <circle
              cx={revealPos.x}
              cy={revealPos.y}
              r="300"
              fill="url(#reveal-gradient)"
              filter="url(#feather-blur)"
            />
          </mask>
        </defs>
      </svg>

      {/* PCB Background */}
      <svg
        id="hero-pcb-bg"
        className="absolute inset-0 w-full h-full transition-opacity duration-300"
        preserveAspectRatio="none"
        mask="url(#reveal-mask)"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          {/* Profile Picture */}
          <div className="flex-0-0-auto">
            <div className="w-44 h-44 rounded-full bg-[#EF5B0C] p-1">
              <img
                src={headshot}
                alt="AC"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name and Location */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#f1f1f1] mb-2">
              Aiden Cherniske
            </h2>
            <p className="text-[#A3A3A3] flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} className="text-[#EF5B0C]" />
              Based in Connecticut, USA
            </p>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-[#f1f1f1] mb-8 leading-tight text-center">
          DIGITAL HARDWARE
          <br />
          <span className="text-transparent bg-clip-text bg-[#EF5B0C]">
            ENGINEER
          </span>
        </h1>

        {/* Contact Button */}
        <div className="mb-8 text-center flex items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#EF5B0C] text-[#f1f1f1] rounded-lg hover:bg-[#DC4E08] transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            Contact me
          </a>
          <a
            href={AidenCherniskeResume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-[#f1f1f1] rounded-lg hover:bg-[#EF5B0C] transition-all duration-300 hover:scale-105 shadow-[inset_0_0_0_2px_#EF5B0C]"
          >
            <FileText size={20} />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="mailto:apcherniske@gmail.com"
            className="w-12 h-12 rounded-full bg-black border-2 border-[#2a2a2a] hover:border-[#EF5B0C] flex items-center justify-center text-[#A3A3A3] hover:text-[#EF5B0C] transition-all duration-300"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/aiden-cherniske"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-black border-2 border-[#2a2a2a] hover:border-[#EF5B0C] flex items-center justify-center text-[#A3A3A3] hover:text-[#EF5B0C] transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/ACherniske"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-black border-2 border-[#2a2a2a] hover:border-[#EF5B0C] flex items-center justify-center text-[#A3A3A3] hover:text-[#EF5B0C] transition-all duration-300"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
