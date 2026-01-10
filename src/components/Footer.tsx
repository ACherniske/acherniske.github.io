import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Name/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">
              Aiden Cherniske
            </h3>
            <p className="text-[#A3A3A3] text-sm">
              Computer Engineering @ Bucknell University
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/aiden-cherniske"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#1F1F1F] hover:border-[#EF5B0C] flex items-center justify-center text-[#A3A3A3] hover:text-[#EF5B0C] transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/ACherniske"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#1F1F1F] hover:border-[#EF5B0C] flex items-center justify-center text-[#A3A3A3] hover:text-[#EF5B0C] transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:apcherniske@gmail.com"
              className="w-10 h-10 rounded-full border border-[#1F1F1F] hover:border-[#EF5B0C] flex items-center justify-center text-[#A3A3A3] hover:text-[#EF5B0C] transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-[#A3A3A3] text-sm">
              © {currentYear} Aiden Cherniske. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
