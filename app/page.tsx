"use client";
import React, { useRef } from "react";
import { Home } from "./home/home";
import About from "./about/page";
import { Header } from "./components/Header/header";
import Projects from "./projects/page";
import Articles from "./articles/page";

export default function Main() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        return homeRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });

      case "projects":
        return projectsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      case "articles":
        return articleRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      case "about":
        return aboutRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
    }
  };
  return (
    <section className="flex h-screen flex-col justify-between">
      <Header scrollToSection={scrollToSection}></Header>

      <section ref={homeRef}>
        <Home></Home>
      </section>
      <section ref={projectsRef}>
        <Projects></Projects>
      </section>
      <section ref={articleRef}>
        <Articles></Articles>
      </section>
      <section ref={aboutRef}>
        <About></About>
      </section>
    </section>
  );
}
