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
    <main className="min-h-dvh">
      
      {/* Hero Section */}
      <div className="relative z-20 bg-transparent">
        <Hero />
      </div>

      {/* Fixed Image Background for the rest of the page */}
      <div className="fixed inset-0 z-0">
        <img
          src="/bgimage.jpg"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content wrapper for the rest of the sections, with transparent backgrounds */}
      <div className="relative z-10">
        <TopDestinationsCarousel />
        <InternationalExperience />
        <DomesticPackages />
        <ClientTestimonials />
        <FAQ />
      </div>
    </main>
  );
}