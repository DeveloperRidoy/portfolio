import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { EngineeringProfile } from "@/components/sections/EngineeringProfile";
import { EngineeringChallenges } from "@/components/sections/EngineeringChallenges";
import { BusinessOperations } from "@/components/sections/BusinessOperations";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { EarlierProjects } from "@/components/sections/EarlierProjects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ImpactMetrics />
        <EngineeringProfile />
        <BusinessOperations />
        <EngineeringChallenges />
        <CaseStudies />
        <Skills />
        <Experience />
        <EarlierProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
