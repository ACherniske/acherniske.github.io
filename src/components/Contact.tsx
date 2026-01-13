import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#EF5B0C] mx-auto"></div>
          <p className="text-[#A3A3A3] text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:apcherniske@gmail.com"
            className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg p-6 sm:p-8 text-center hover:border-[#EF5B0C] transition-all duration-300 group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[#0a0a0a] border-2 border-[#2a2a2a] flex items-center justify-center group-hover:border-[#EF5B0C] transition-all duration-300">
              <Mail className="text-[#EF5B0C]" size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-[#F5F5F5] mb-2">Email</h3>
            <p className="text-[#A3A3A3] text-xs sm:text-sm break-all">
              apcherniske@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/aiden-cherniske"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg p-6 sm:p-8 text-center hover:border-[#EF5B0C] transition-all duration-300 group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[#0a0a0a] border-2 border-[#2a2a2a] flex items-center justify-center group-hover:border-[#EF5B0C] transition-all duration-300">
              <Linkedin className="text-[#EF5B0C]" size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-[#F5F5F5] mb-2">
              LinkedIn
            </h3>
            <p className="text-[#A3A3A3] text-xs sm:text-sm">/in/aiden-cherniske</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ACherniske"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg p-6 sm:p-8 text-center hover:border-[#EF5B0C] transition-all duration-300 group sm:col-span-2 md:col-span-1"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[#0a0a0a] border-2 border-[#2a2a2a] flex items-center justify-center group-hover:border-[#EF5B0C] transition-all duration-300">
              <Github className="text-[#EF5B0C]" size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-[#F5F5F5] mb-2">
              GitHub
            </h3>
            <p className="text-[#A3A3A3] text-xs sm:text-sm">@ACherniske</p>
          </a>
        </div>

        {/* Location Info */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#A3A3A3] text-sm sm:text-base">
            <MapPin size={18} className="text-[#EF5B0C] sm:w-5 sm:h-5" />
            <span>Based in Connecticut, USA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;