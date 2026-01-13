import { type Skill } from '../types';
import kicadIcon from '../assets/logos/kicad.svg';
import esp32Icon from '../assets/logos/esp32.svg';
import yosyshqIcon from '../assets/logos/yosyshq.png';
import arduinoIcon from '../assets/logos/arduino.svg';
import pythonIcon from '../assets/logos/python.svg';
import cIcon from '../assets/logos/C.svg';
import cppIcon from '../assets/logos/CPP.svg';
import micropythonIcon from '../assets/logos/micropython.svg';
import verilogIcon from '../assets/logos/verilog.svg';
import gitIcon from '../assets/logos/git.svg';
import linuxIcon from '../assets/logos/linux.svg';

export const skills: Skill[] = [
  // Core Hardware/Embedded - Most Important
  { name: 'KiCAD', category: 'hardware', level: 'expert', description: 'PCB Design & Layout', icon: kicadIcon },
  { name: 'ESP32', category: 'hardware', level: 'advanced', description: 'Microcontroller', icon: esp32Icon },
  { name: 'YosysHQ Toolchain', category: 'hardware', level: 'intermediate', description: 'FPGA EDA Suite', icon: yosyshqIcon },
  { name: 'Arduino', category: 'hardware', level: 'advanced', description: 'Rapid Prototyping', icon: arduinoIcon },
  
  // Core Programming Languages
  { name: 'Python', category: 'software', level: 'advanced', description: 'Data & Scripting', icon: pythonIcon },
  { name: 'C', category: 'software', level: 'intermediate', description: 'Low-Level Programming', icon: cIcon },
  { name: 'C++', category: 'software', level: 'intermediate', description: 'Systems Programming', icon: cppIcon },
  { name: 'Assembly', category: 'software', level: 'intermediate', description: 'Machine Code', icon: 'ASM' },
  { name: 'MicroPython', category: 'software', level: 'advanced', description: 'Python for MCUs', icon: micropythonIcon },
  { name: 'Verilog', category: 'software', level: 'intermediate', description: 'Hardware Description', icon: verilogIcon },
  
  // Development Tools
  { name: 'Git', category: 'tools', level: 'advanced', description: 'Version Control', icon: gitIcon },
  { name: 'Linux', category: 'tools', level: 'advanced', description: 'Development OS', icon: linuxIcon },
];
