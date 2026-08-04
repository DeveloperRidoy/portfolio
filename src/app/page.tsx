import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Specializations } from "@/components/sections/Specializations";
import { Experience } from "@/components/sections/Experience";
import { Toolkit } from "@/components/sections/Toolkit";
import { EarlierProjects } from "@/components/sections/EarlierProjects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Hero />
        <ProofStrip />
        <SelectedWork />
        <Specializations />
        <Experience />
        <Toolkit />
        <EarlierProjects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
