import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experiences";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}