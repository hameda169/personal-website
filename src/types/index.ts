type SelfOrArray<T> = T | Array<T>;

export interface SocialMediaType {
  name: string;
  link: string;
}

export interface SkillType {
  name: string;
  score: number;
}

export interface ProjectType {
  name: string;
  demo?: SelfOrArray<{ name: string; link: string }>;
  source?: SelfOrArray<{ name: string; link: string }>;
}

export interface ContactType {
  name: string;
  value: string;
}
