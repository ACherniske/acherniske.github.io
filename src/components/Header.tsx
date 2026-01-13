import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/brand/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand - Mobile */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[#EF5B0C] font-bold text-xl sm:hidden"
          >
              <img 
              src={logo} 
              alt="AC" 
              className="h-5 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-8 mx-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pb-4 border-t border-[#1F1F1F] pt-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors duration-300 text-left py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;