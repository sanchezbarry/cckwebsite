export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
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
  link: string;
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
  link: string;
}


export interface SermonCategory {
  id: string;
  title: string;
  series: string;
  speaker: string;
  date: string;
  duration: string;
  description: string;
  imageUrl: string;
  type: 'LATEST' | 'REGULAR' | 'SPECIAL' | 'VISION';
  categoryColor?: string;
}

export type Speaker = 'Pastor John Doe' | 'Pastor Jane Smith' | 'Dr. Michael Brown' | 'All Speakers';
export type Series = 'Walking in Faith' | 'The Book of Romans' | 'Special Event' | 'Vision Sunday' | 'All Series';

