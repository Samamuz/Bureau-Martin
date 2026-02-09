export interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  items: string[];
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
}