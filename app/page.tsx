import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <Hero />
      <div id="skills-section">
        <Skills />
      </div>
      {/* <div id="experience-section">
        <Experience />
      </div> */}
      <div id="projects-section">
        <Main />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
