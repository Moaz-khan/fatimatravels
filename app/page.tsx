import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopDestinationsCarousel from "./components/TopDestinationsCarousel";
import InternationalExperience from "./components/InternationalExperience";
import DomesticPackages from "./components/DomesticPackages";
import ClientTestimonials from "./components/ClientTestimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <TopDestinationsCarousel />
      <InternationalExperience />
      <DomesticPackages />
      <ClientTestimonials />
      <FAQ />
      <Footer />
    </main>
  );
}