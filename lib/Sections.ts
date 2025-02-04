export type SectionName = "home" | "projects" | "articles" | "about";

export interface HeaderProps {
  scrollToSection: (section: SectionName) => void;
}
