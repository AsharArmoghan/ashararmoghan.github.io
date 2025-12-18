export type SectionName = "home" | "projects" | "articles" | "about";

export interface Section {
  id: SectionName;
  label: string;
  ref: React.RefObject<HTMLDivElement>;
  component: React.ReactNode;
}
export interface HeaderProps {
  activeSection: SectionName;
  sections: Omit<Section, "ref" | "component">[];
}
export interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SideMenuPropsWithSections extends SideMenuProps {
  sections: { id: string; label: string }[];
}
