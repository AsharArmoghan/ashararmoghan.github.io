"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Home } from "./home/home";
import About from "./about/page";
import Header from "./components/Header/header";
import Projects from "./projects/page";
import ArticleList from "./articles/page";
import { Section, SectionName } from "./lib/Types/HeaderProps";
import Footer from "./components/Footer/footer";

const Main = () => {
  const [activeSection, setActiveSection] = useState<SectionName>("home");

  const scrollToSection = (section: SectionName) => {
    const sectionData = sections.find((s) => s.id === section);
    if (sectionData.ref.current) {
      sectionData.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  };
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const sections: Section[] = useMemo(
    () => [
      {
        id: "home",
        label: "Home",
        ref: homeRef,
        component: <Home />,
      },
      {
        id: "projects",
        label: "Projects",
        ref: projectsRef,
        component: <Projects />,
      },
      {
        id: "articles",
        label: "Articles",
        ref: articlesRef,
        component: <ArticleList />,
      },
      {
        id: "about",
        label: "About",
        ref: aboutRef,
        component: <About />,
      },
    ],
    [homeRef, projectsRef, articlesRef, aboutRef],
  );

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // console.log(entry.target.id, entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionName);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback);
    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, [sections]);
  return (
    <section className="">
      <Header
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        sections={sections.map(({ id, label }) => ({ id, label }))}
      />
      {sections.map((section) => (
        <section key={section.id} id={section.id} ref={section.ref}>
          {section.component}
        </section>
      ))}

      <Footer />
    </section>
  );
};
export default Main;
