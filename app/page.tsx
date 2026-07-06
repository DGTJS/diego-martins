import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main id="top" className="theme-app-shell min-h-screen pb-40 sm:pb-44">
      <Navbar />
      <Hero />
      <Skills />
      <Main />
      <Contact />
      <Footer />
    </main>
  );
}
