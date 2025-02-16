export type SectionName = "home" | "projects" | "articles" | "about";

export interface Section {
  id: SectionName;
  label: string;
  ref: React.RefObject<HTMLDivElement>;
  component: React.ReactNode;
}
export interface HeaderProps {
  scrollToSection: (section: SectionName) => void;
  activeSection: SectionName;
  sections: Omit<Section, "ref" | "component">[];
}
export interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (section: SectionName) => void;
}
