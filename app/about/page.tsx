import React from "react";
import Intro from "../components/Author/intro";

export default function About() {
  return (
    <section className="mt-8 flex h-24 flex-grow justify-around bg-[radial-gradient(100%_100%_at_bottom,rgb(0,0,0,.25),rgb(0,0,0,.25),rgb(74,32,138,0.25))]">
      <Intro></Intro>
    </section>
  );
}
