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
  date: string;
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

export interface Ministry {
  title: string;
  description: string;
  icon: string;
  action: string;
}