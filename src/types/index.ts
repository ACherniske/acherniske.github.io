export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'hardware' | 'software' | 'tools' | 'languages';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description?: string;
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
