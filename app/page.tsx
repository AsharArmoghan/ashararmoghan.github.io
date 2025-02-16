"use client";
import React, { useEffect, useRef, useState } from "react";
import { Home } from "./home/home";
import About from "./about/page";
import Header from "./components/Header/header";
import Projects from "./projects/page";
import Articles from "./articles/page";
import { Section, SectionName } from "@/lib/Types/HeaderProps";

export default function Main() {
  const [activeSection, setActiveSection] = useState<SectionName>("home");

  const scrollToSection = (section: SectionName) => {
    const sectionData = sections.find((s) => s.id === section);
    if (sectionData && sectionData.ref.current) {
      sectionData.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const sections: Section[] = [
    {
      id: "home",
      label: "Home",
      ref: useRef<HTMLDivElement>(null),
      component: <Home />,
    },
    {
      id: "projects",
      label: "Projects",
      ref: useRef<HTMLDivElement>(null),
      component: <Projects />,
    },
    {
      id: "articles",
      label: "Articles",
      ref: useRef<HTMLDivElement>(null),
      component: <Articles />,
    },
    {
      id: "about",
      label: "About",
      ref: useRef<HTMLDivElement>(null),
      component: <About />,
    },
  ];

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
  }, []);

  useEffect(() => {
    console.log("Active Section:", activeSection); // Debug log
  }, [activeSection]);

  return (
    <section className="flex h-screen flex-col justify-between overflow-x-hidden">
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
    </section>
  );
}
