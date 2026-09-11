import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { FaClock, FaCheckCircle, FaArrowLeft, FaFileAlt, FaHotel, FaMoneyBillWave, FaStar, FaPassport } from "react-icons/fa";
import { urlForImage } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const ids = await client.fetch(groq`*[_type == "package"][]._id`);
  return ids.map((id: string) => ({ id }));
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const pkg = await client.fetch(
    groq`*[_type == "package" && (_id == $id || slug.current == $id)][0]`,
    { id: resolvedParams.id }
  );

  if (!pkg) {
    notFound();
  }

  const isVisa = pkg.type === "visa";

  return (
    <div className="w-full bg-[#F8F9FA] min-h-screen pb-24">
      {/* Hero Image Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full bg-gray-900">
        <Image 
          src={pkg.image?.asset ? urlForImage(pkg.image).url() : (typeof pkg.image === 'string' ? pkg.image : "/destinations/dubai1.jpg")}
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
                  {pkg.type?.replace("-", " ")}
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
            <div className="md:col-span-2 space-y-10">
              
              {/* Overview */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {typeof pkg.description === 'string' ? pkg.description : pkg.description?.[0]?.children?.[0]?.text || ''}
                </p>
              </div>

              {/* Visa Specific Details */}
              {isVisa && pkg.visaDetails && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaPassport className="text-[#5409DA]" /> Visa Details & Requirements
                  </h3>
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <p className="text-blue-900 leading-relaxed text-md">
                      {pkg.visaDetails}
                    </p>
                  </div>
                </div>
              )}

              {/* Included Items */}
              {pkg.includes && pkg.includes.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pkg.includes.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#5409DA] h-5 w-5 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Required Documents */}
              {pkg.requiredDocuments && pkg.requiredDocuments.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaFileAlt className="text-[#5409DA]" /> Required Documents
                  </h3>
                  <ul className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                    {pkg.requiredDocuments.map((doc: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                        <span className="h-2 w-2 rounded-full bg-[#5409DA] mt-2 shrink-0"></span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hotels */}
              {pkg.hotels && pkg.hotels.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaHotel className="text-[#5409DA]" /> Accommodation Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pkg.hotels.map((hotel: any, idx: number) => (
                      <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{hotel.name}</h4>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < hotel.rating ? "text-yellow-400" : "text-gray-200"} size={14} />
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 font-medium bg-gray-100 inline-block px-3 py-1 rounded-full">
                          {hotel.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar / Booking Card */}
            <div className="md:col-span-1 space-y-6 sticky top-24">
              
              {/* Cost Summary Breakdown */}
              {pkg.amountBreakdown && pkg.amountBreakdown.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaMoneyBillWave className="text-[#5409DA]" /> Cost Summary
                  </h4>
                  <div className="space-y-4 mb-6">
                    {pkg.amountBreakdown.map((item: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-bold text-gray-900">{item.amount}</span>
                      </div>
                    ))}
                    <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                      <span className="text-gray-900 font-bold">Total Estimated</span>
                      <span className="text-[#5409DA] font-black text-lg">{pkg.totalAmount || pkg.price}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Booking Action */}
              <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100">
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
