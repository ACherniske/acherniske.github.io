import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#EF5B0C] mx-auto"></div>
          <p className="text-[#A3A3A3] text-lg mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:apcherniske@gmail.com"
            className="bg-[#111111] border-2 border-[#1F1F1F] rounded-lg p-8 text-center hover:border-[#EF5B0C] transition-all duration-300 group"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-center group-hover:border-[#EF5B0C] transition-all duration-300">
              <Mail className="text-[#EF5B0C]" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Email</h3>
            <p className="text-[#A3A3A3] text-sm">
              apcherniske@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/aiden-cherniske"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111111] border-2 border-[#1F1F1F] rounded-lg p-8 text-center hover:border-[#EF5B0C] transition-all duration-300 group"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-center group-hover:border-[#EF5B0C] transition-all duration-300">
              <Linkedin className="text-[#EF5B0C]" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">
              LinkedIn
            </h3>
            <p className="text-[#A3A3A3] text-sm">/in/aiden-cherniske</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ACherniske"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111111] border-2 border-[#1F1F1F] rounded-lg p-8 text-center hover:border-[#EF5B0C] transition-all duration-300 group"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-center group-hover:border-[#EF5B0C] transition-all duration-300">
              <Github className="text-[#EF5B0C]" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">
              GitHub
            </h3>
            <p className="text-[#A3A3A3] text-sm">@ACherniske</p>
          </a>
        </div>

        {/* Location Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#A3A3A3]">
            <MapPin size={20} className="text-[#EF5B0C]" />
            <span>Based in Connecticut, USA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
