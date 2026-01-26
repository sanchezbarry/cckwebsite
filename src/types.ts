export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Sermon {
  id: string;
  title: string;
  series: string;
  speaker: string;
  imageUrl: string;
  category?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface MinistryHome {
  title: string;
  description: string;
  icon: string;
  action: string;
}

export interface Ministry {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  tagTextColor: string;
  description: string;
  imageUrl: string;
  alt: string;
  icon: string;
  action: string;
}
