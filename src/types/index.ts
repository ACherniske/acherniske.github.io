export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  pcbImages?: {
    front: string;
    back: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  websiteUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'hardware' | 'software' | 'tools' | 'languages';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description?: string;
  icon?: string;
  alwaysShowIcon: boolean;
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

export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  date: string;
  imageUrl?: string;
}
