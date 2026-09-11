import Hero from "@/app/components/Hero";
import TopDestinationsCarousel from "@/app/components/TopDestinationsCarousel";
import InternationalExperience from "@/app/components/InternationalExperience";
import DomesticPackages from "@/app/components/DomesticPackages";
import ClientTestimonials from "@/app/components/ClientTestimonials";
import FAQ from "@/app/components/FAQ";
import { client } from "@/sanity/lib/client";
import { getTopDestinationsQuery, getInternationalPackagesQuery, getDomesticPackagesQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const [topDestinations, internationalPackages, domesticPackages] = await Promise.all([
    client.fetch(getTopDestinationsQuery),
    client.fetch(getInternationalPackagesQuery),
    client.fetch(getDomesticPackagesQuery),
  ]);

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
        <TopDestinationsCarousel destinations={topDestinations || []} />
        <InternationalExperience packages={internationalPackages || []} />
        <DomesticPackages packages={domesticPackages || []} />
        <ClientTestimonials />
        <FAQ />
      </div>
    </main>
  );
}