export interface ExperienceTag {
  label: string;
}

export interface ExperienceButtons {
  resume?: boolean;
  company?: string;
}

export interface ExperiencePeriod {
  start: string;
  end: string | null;
}

export interface ExperienceItem {
  id: number;
  period: ExperiencePeriod;
  position: string;
  company: string;
  description: React.ReactNode;
  tags: ExperienceTag[];
  links?: ExperienceButtons;
}
