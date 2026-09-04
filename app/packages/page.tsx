"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { packagesData, PackageType, SubCategory } from "../data/packages";
import { FaClock } from "react-icons/fa";

const types: { id: PackageType | 'all'; label: string }[] = [
  { id: 'all', label: 'All Packages' },
  { id: 'hajj-umrah', label: 'Hajj & Umrah' },
  { id: 'international', label: 'International' },
  { id: 'domestic', label: 'Domestic' },
  { id: 'visa', label: 'Visa Services' },
];

const subCategories: { id: SubCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'business', label: 'Business Trip' },
  { id: 'honeymoon', label: 'Honeymoon' },
  { id: 'family', label: 'Family Tour' },
  { id: 'group', label: 'Group Tour' },
  { id: 'luxury', label: 'Luxury' },
];

function PackagesContent() {
  const searchParams = useSearchParams();
  const initialTypeParam = searchParams.get("type") as PackageType | null;

  const [activeType, setActiveType] = useState<PackageType | 'all'>(
    initialTypeParam && types.some(t => t.id === initialTypeParam) ? initialTypeParam : 'all'
  );
  const [activeSubCat, setActiveSubCat] = useState<SubCategory>('all');

  // Sync state if URL changes directly
  useEffect(() => {
    if (initialTypeParam && types.some(t => t.id === initialTypeParam)) {
      setActiveType(initialTypeParam);
      setActiveSubCat('all'); // reset subcat on type change
    }
  }, [initialTypeParam]);

  const filteredPackages = packagesData.filter(pkg => {
    const matchType = activeType === 'all' || pkg.type === activeType;
    const matchSub = activeSubCat === 'all' || pkg.subCategory.includes(activeSubCat);
    return matchType && matchSub;
  });

  return (
    <div className="w-full bg-[#F8F9FA] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 w-full bg-gray-900 flex items-center justify-center text-center">
        <Image 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Packages Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
            Explore Our Packages
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Find the perfect itinerary tailored to your needs—whether it's a spiritual journey, a romantic getaway, or a business trip.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        {/* Type Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {types.map(type => (
            <button
              key={type.id}
              onClick={() => {
                setActiveType(type.id);
                setActiveSubCat('all');
                // Optional: Update URL without refreshing the page to share links
                // window.history.pushState(null, '', `?type=${type.id}`);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeType === type.id 
                  ? "bg-[#5409DA] text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#5409DA] hover:text-[#5409DA]"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Sub Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {subCategories.map(sub => (
            <button
              key={sub.id}
              onClick={() => setActiveSubCat(sub.id)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeSubCat === sub.id 
                  ? "bg-gray-900 text-white shadow-sm" 
                  : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map(pkg => (
              <div key={pkg.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-xl transition-shadow flex flex-col group">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-extrabold text-[#5409DA] shadow-sm">
                    {pkg.price}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5 font-medium"><FaClock className="text-[#5409DA]" /> {pkg.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5409DA] transition-colors">{pkg.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow">
                    {pkg.description}
                  </p>
                  
                  <Link 
                    href={`/packages/${pkg.id}`}
                    className="w-full block text-center py-3.5 bg-gray-50 text-gray-900 font-semibold rounded-xl hover:bg-[#5409DA] hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Packages Found</h3>
            <p className="text-gray-500">We couldn't find any packages matching your selected filters.</p>
            <button 
              onClick={() => { setActiveType('all'); setActiveSubCat('all'); }}
              className="mt-6 px-8 py-3 bg-[#5409DA] text-white rounded-full text-sm font-semibold hover:bg-opacity-90 shadow-md transition-all"
            >
              View All Packages
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-[#5409DA]"></div>
      </div>
    }>
      <PackagesContent />
    </Suspense>
  );
}
