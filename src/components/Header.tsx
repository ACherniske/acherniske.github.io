import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1F1F1F]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-center">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
