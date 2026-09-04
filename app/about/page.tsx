import Image from "next/image";
import { FaPlay, FaUsers, FaDollarSign, FaGlobe, FaFacebook, FaYoutube, FaInstagram,} from "react-icons/fa";
import { CiMail } from "react-icons/ci";


export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-75 md:h-100 w-full bg-gray-900">
        <Image 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="About Us Hero"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">About us</h1>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        
        {/* Top Text area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#5409DA]"></span>
              <span className="text-xs font-bold tracking-wider text-gray-800 uppercase">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="text-[#5409DA]">Introduction</span> To Best Travel Agency!
            </h2>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500 pt-2 lg:pt-12">
            <p className="text-sm leading-relaxed">
              We provide the best travel experiences, offering affordable packages for Hajj, Umrah, and international tours. Our mission is to make your journey seamless and spiritually enriching, ensuring every detail is handled with care.
            </p>
            <p className="text-sm leading-relaxed">
              With years of expertise in the travel industry, our dedicated team guarantees exceptional service, 24/7 support, and personalized itineraries to suit your preferences and budget perfectly.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#5409DA] text-white">
              <FaDollarSign className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Best Price Guaranteed</h4>
              <p className="mt-1 text-xs text-gray-500">Offering the most competitive rates for all your travel needs.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white">
              <FaGlobe className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Global Destinations</h4>
              <p className="mt-1 text-xs text-gray-500">Explore breathtaking locations across the globe with our expert guides.</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#5409DA] text-white">
              <FaUsers className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Professional Team</h4>
              <p className="mt-1 text-xs text-gray-500">Our dedicated staff is committed to providing outstanding service.</p>
            </div>
          </div>
        </div>

        {/* Images Area */}
        <div className="mt-20 relative w-full h-75 md:h-125">
          {/* Main Large Image */}
          <div className="relative h-full w-full md:w-[75%] rounded-3xl overflow-hidden">
             <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Office Team"
                fill
                className="object-cover"
             />
          </div>
          {/* Small Overlapping Image */}
          <div className="absolute right-0 -bottom-10 md:bottom-10 md:right-10 h-50 w-[80%] md:h-75 md:w-[45%] rounded-3xl overflow-hidden border-8 border-white shadow-xl">
             <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Meeting"
                fill
                className="object-cover"
             />
             {/* Play Button Overlay */}
             <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5409DA] text-white transition-transform hover:scale-110 shadow-lg">
                  <FaPlay className="h-6 w-6 ml-1" fill="currentColor" />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="bg-[#F8F9FA] py-20 mt-10 md:mt-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#5409DA]"></span>
            <span className="text-xs font-bold tracking-wider text-gray-800 uppercase">Our Team</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            <span className="text-[#5409DA]">Team</span> Members
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-500">
            Meet our dedicated team of travel experts, committed to ensuring your journey is seamless, comfortable, and truly unforgettable.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Team Member 1 */}
            <div className="group rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow pb-6">
              <div className="relative h-70 w-full rounded-t-3xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Sony Madison"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative -mt-8 mx-6 rounded-2xl bg-[#5409DA] text-white p-4 shadow-lg text-center z-10 transition-colors group-hover:bg-gray-900">
                <h4 className="font-bold text-lg">Sony Madison</h4>
                <p className="text-xs text-white/80">CEO, Director</p>
              </div>
              <div className="mt-6 flex justify-center gap-3 px-6">
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaFacebook className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><CiMail className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaYoutube className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaInstagram className="h-3.5 w-3.5" /></a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow pb-6">
              <div className="relative h-70 w-full rounded-t-3xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Harry Warth"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative -mt-8 mx-6 rounded-2xl bg-[#5409DA] text-white p-4 shadow-lg text-center z-10 transition-colors group-hover:bg-gray-900">
                <h4 className="font-bold text-lg">Harry Warth</h4>
                <p className="text-xs text-white/80">Head Manager</p>
              </div>
              <div className="mt-6 flex justify-center gap-3 px-6">
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaFacebook className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><CiMail className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaYoutube className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaInstagram className="h-3.5 w-3.5" /></a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow pb-6">
              <div className="relative h-70 w-full rounded-t-3xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
                  alt="Jenny Hobb"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative -mt-8 mx-6 rounded-2xl bg-[#5409DA] text-white p-4 shadow-lg text-center z-10 transition-colors group-hover:bg-gray-900">
                <h4 className="font-bold text-lg">Jenny Hobb</h4>
                <p className="text-xs text-white/80">Branch Manager</p>
              </div>
              <div className="mt-6 flex justify-center gap-3 px-6">
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaFacebook className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><CiMail className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaYoutube className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaInstagram className="h-3.5 w-3.5" /></a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow pb-6">
              <div className="relative h-70 w-full rounded-t-3xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
                  alt="Johny Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative -mt-8 mx-6 rounded-2xl bg-[#5409DA] text-white p-4 shadow-lg text-center z-10 transition-colors group-hover:bg-gray-900">
                <h4 className="font-bold text-lg">Johny Smith</h4>
                <p className="text-xs text-white/80">Supervisor</p>
              </div>
              <div className="mt-6 flex justify-center gap-3 px-6">
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaFacebook className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><CiMail className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaYoutube className="h-3.5 w-3.5" /></a>
                 <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-[#5409DA] hover:border-[#5409DA] transition-colors"><FaInstagram className="h-3.5 w-3.5" /></a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
