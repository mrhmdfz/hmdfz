export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl: string;
  techStack: string[];
}
export interface DesignProjectCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  link?: string;
}

export interface OtherProjectCardProps {
  title: string;
  description: string;
  category?: string;
  link?: string;
  techStack: string[];
}
