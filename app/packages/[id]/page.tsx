import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { packagesData } from "../../data/packages";
import { FaClock, FaCheckCircle, FaArrowLeft } from "react-icons/fa";

export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    id: pkg.id,
  }));
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pkg = packagesData.find((p) => p.id === params.id);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="w-full bg-[#F8F9FA] min-h-screen pb-24">
      {/* Hero Image Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full bg-gray-900">
        <Image 
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
          <Link href="/packages" className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white text-sm font-medium transition-colors">
            <FaArrowLeft /> Back to Packages
          </Link>
        </div>
      </section>

      {/* Package Content */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-gray-100 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#5409DA]/10 text-[#5409DA] rounded-full text-xs font-bold uppercase tracking-wide">
                  {pkg.type.replace("-", " ")}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
                  <FaClock className="text-gray-400" /> {pkg.duration}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{pkg.title}</h1>
            </div>
            
            <div className="text-left md:text-right shrink-0">
              <p className="text-sm text-gray-500 font-medium mb-1">Starting from</p>
              <p className="text-4xl font-black text-[#5409DA]">{pkg.price}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {pkg.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#5409DA] h-5 w-5 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar / Booking Card */}
            <div className="md:col-span-1">
              <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 sticky top-24">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Interested in this package?</h4>
                <p className="text-sm text-gray-500 mb-6">
                  Our travel experts are ready to customize this package exactly to your requirements.
                </p>
                
                <Link href="/#contact" className="w-full flex justify-center py-4 bg-[#5409DA] text-white font-bold rounded-xl hover:bg-opacity-90 shadow-md transition-all mb-3">
                  Book Now
                </Link>
                <Link href="/#contact" className="w-full flex justify-center py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
