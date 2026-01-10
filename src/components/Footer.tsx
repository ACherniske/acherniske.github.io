import { Github, Linkedin, Mail } from 'lucide-react';
import wordmark from '../assets/Wordmark.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Left: Name/Brand */}
          <div className="text-center">
            <img 
              src={wordmark} 
              alt="Aiden Cherniske" 
              className="h-10 md:h-12 brightness-0 invert mx-auto"
            />
          </div>

          {/* Right: Copyright */}
          <div className="text-center">
            <p className="text-[#A3A3A3] text-sm">
              © {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
