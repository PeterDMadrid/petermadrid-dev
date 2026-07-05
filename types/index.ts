export interface NavItem {
  index: string;
  label: string;
  href: string;
}

export interface Project {
  index: string;
  title: string;
  year: string;
  stack: string[];
  description: string;
  href?: string;
}
