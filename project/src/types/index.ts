export interface Feature {
  id: number;
  name: string;
  icon: any; // LucideIcon type
  color: string;
  bgColor: string;
  description: string;
}

export interface SidebarProps {
  features: Feature[];
  selectedFeature: number | null;
  onFeatureSelect: (id: number) => void;
}

export interface DashboardProps {
  features: Feature[];
  selectedFeature: number | null;
  onFeatureSelect: (id: number) => void;
}

export interface SearchBarProps {
  features: Feature[];
  onFeatureSelect: (id: number) => void;
}

export interface FeatureModalProps {
  feature: Feature;
  onClose: () => void;
}