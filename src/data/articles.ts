import { type Article } from '../types';
import plugIntoPossibilityPdf from '../assets/pdfs/PlugIntoPossibility.pdf';

export const articles: Article[] = [
  {
    id: '2',
    title: 'Plug Into Possibility',
    description: 'Featured in Bucknell Magazine discussing digital hardware engineering and innovation through my research.',
    url: plugIntoPossibilityPdf,
    source: 'Bucknell Magazine',
    date: 'Fall 2025',
  },
  {
    id: '1',
    title: 'Aiden Cherniske \'27 — Computer Engineering',
    description: 'Student story highlighting my work at Bucknell University in computer engineering and hardware design.',
    url: 'https://www.bucknell.edu/meet-bucknell/bucknell-stories/student-stories/aiden-cherniske-27-computer-engineering',
    source: 'Bucknell University',
    date: '2024',
  },
];
