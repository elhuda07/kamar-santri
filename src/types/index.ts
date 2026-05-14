export interface NavLink {
  href: string;
  label: string;
}

export interface DashboardNavItem extends NavLink {
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "santri" | "ustadz" | "admin";
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
}
