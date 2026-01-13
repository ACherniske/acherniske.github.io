import { skills } from '../data/skills';
import bucknellLogo from '../assets/logos/bucknellLogo.png';

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F1F1F1] mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#EF5B0C] mb-6"></div>
            
            <p className="text-[#A3A3A3] text-lg leading-relaxed mb-6">
              I'm a <span className="text-[#EF5B0C] font-medium">Computer Engineering</span> student @ <span className="text-[#EF5B0C] font-medium">Bucknell University</span> focused on digital hardware design. 
              I work across the full hardware stack — designing custom PCBs in <span className="text-[#EF5B0C] font-medium">KiCAD</span>, developing 
              <span className="text-[#EF5B0C] font-medium"> embedded firmware</span> for microcontrollers and building <span className="text-[#EF5B0C] font-medium">IoT systems</span> that solve real problems.
            </p>
            <p className="text-[#A3A3A3] text-lg leading-relaxed mb-6">
              Currently, I'm exploring the intersection of hardware and firmware development through 
              RFID authentication systems and racing telemetry projects, while honing my skills in <span className="text-[#EF5B0C] font-medium">FPGA 
              development</span> with a focus on <span className="text-[#EF5B0C] font-medium">signal processing</span> and <span className="text-[#EF5B0C] font-medium">software-defined radio</span>.
            </p>
            <p className="text-[#A3A3A3] text-lg leading-relaxed">
              When I'm not designing circuits or writing code, I enjoy teaching and sharing knowledge with 
              the engineering community, contributing to conservation efforts through technology, and 
              pursuing digital design and photography.
            </p>
          </div>

          {/* Education/Quick Facts */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border-2 border-[#111111] rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <img src={bucknellLogo} alt="Bucknell Logo" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-[#F1F1F1]">
                    Bucknell University
                  </h3>
                  <p className="text-[#A3A3A3] font-medium">B.S. Computer Engineering</p>
                </div>
              </div>
              <div className="space-y-2 ml-1">
                <div>
                  <p className="text-[#A3A3A3] text-sm">Expected Graduation: <span className="text-[#F1F1F1] font-medium">May 2027</span></p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border-2 border-[#111111] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#F1F1F1] mb-4">
                Experience
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-start mb-1.5">
                    <h4 className="text-[#F1F1F1] font-medium">Teaching Assistant</h4>
                    <span className="text-[#A3A3A3] text-xs whitespace-nowrap ml-2">Aug 2025 - Present</span>
                  </div>
                  <p className="text-[#A3A3A3] text-sm mb-0.5">ECEG 201 - Intro to Electrical & Computer Engineering Design</p>
                  <p className="text-[#EF5B0C] text-sm mb-2">Bucknell University</p>
                  <ul className="space-y-1 text-[#A3A3A3] text-xs ml-4">
                    <li>• 8 hrs/week help sessions improving student satisfaction</li>
                    <li>• Created 15+ instructional videos</li>
                    <li>• Guided circuit testing w/ oscilloscopes & multimeters</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1.5">
                    <h4 className="text-[#F1F1F1] font-medium">Makerspace Manager</h4>
                    <span className="text-[#A3A3A3] text-xs whitespace-nowrap ml-2">Jan 2025 - Present</span>
                  </div>
                  <p className="text-[#EF5B0C] text-sm mb-2">Bucknell University</p>
                  <ul className="space-y-1 text-[#A3A3A3] text-xs ml-4">
                    <li>• Trained 100+ users on equipment operation and safety</li>
                    <li>• Resolved 90% of equipment issues within 24 hours</li>
                    <li>• Managed team of 8 student technicians</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1.5">
                    <h4 className="text-[#F1F1F1] font-medium">First Year Engineering Mentor</h4>
                    <span className="text-[#A3A3A3] text-xs whitespace-nowrap ml-2">Apr 2024 - Present</span>
                  </div>
                  <p className="text-[#EF5B0C] text-sm mb-2">Bucknell University</p>
                  <ul className="space-y-1 text-[#A3A3A3] text-xs ml-4">
                    <li>• Guided 10+ first-year students through college transition</li>
                    <li>• Conducted weekly sessions providing academic advising</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#F1F1F1] mb-2">
            Current Technologies
          </h3>
          <p className="text-[#A3A3A3] mb-8 text-lg">
            I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`bg-[#1F1F1F] rounded-lg p-4 hover:bg-[#252525] transition-colors duration-300 border-2 border-transparent hover:border-[#EF5B0C] w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] ${
                  skill.alwaysShowIcon ? '' : 'hidden md:flex'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2A2A2A] rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                    {skill.icon ? (
                      skill.icon === 'ASM' ? (
                        <span className="text-sm font-bold text-[#EF5B0C]">ASM</span>
                      ) : (
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className={`w-8 h-8 object-contain ${
                            ['Arduino', 'Linux', 'MicroPython'].includes(skill.name) 
                              ? 'brightness-0 invert' 
                              : ''
                          }`}
                        />
                      )
                    ) : (
                      <span className="text-2xl">{skill.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#F1F1F1] font-semibold text-base mb-0.5">
                      {skill.name}
                    </h4>
                    <p className="text-[#A3A3A3] text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
