import Image from "next/image";
import { 
  FaPlane, 
  FaPassport, 
  FaMapMarkedAlt,
  FaCheck,
  FaComments,
  FaFileInvoice,
  FaTicketAlt,
  FaHeadset,
  FaHandshake,
  FaChartLine,
  FaMoneyBillWave
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-96 md:h-[500px] w-full bg-gray-900 flex items-center justify-center text-center px-4">
        <Image 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Services Hero"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-6">
            End-to-End Travel Solutions: Ticketing, Worldwide Visas & Curated Tours
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Seamless domestic and international flight bookings, expert visa processing for over 15 destinations, and tailored leisure and corporate holiday packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <button className="px-8 py-3 bg-[#5409DA] text-white rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg">
              Explore Services
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Get Instant Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 mb-4">
             <span className="h-2 w-2 rounded-full bg-[#5409DA]"></span>
             <span className="text-xs font-bold tracking-wider text-gray-800 uppercase">Our Offerings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <span className="text-[#5409DA]">Core</span> Services
          </h2>
        </div>

        <div className="space-y-24">
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
               <Image 
                  src="https://images.unsplash.com/photo-1540339832862-4745ea731ea7?q=80&w=2070&auto=format&fit=crop" 
                  alt="Flight Ticketing"
                  fill
                  className="object-cover"
               />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5409DA]/10 text-[#5409DA]">
                  <FaPlane className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Domestic & International Flight Ticketing</h3>
              </div>
              <p className="text-[#5409DA] font-semibold mb-3">Best fare discovery, real-time seat availability, and flexible itinerary planning.</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Direct access to global and local airline inventory with dedicated support for routing, rescheduling, and cancellation management.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "Global & Local Routes", desc: "Full coverage across regional carriers and international global alliances." },
                  { title: "Corporate & Group Bookings", desc: "Special rates and customized billing for business delegations and large family groups." },
                  { title: "24/7 Reissuance & Date Changes", desc: "Direct backend coordination for quick emergency changes without airline queue delays." },
                  { title: "Baggage & Seat Upgrades", desc: "Pre-booked baggage allowances, preferred seating, and special meal requests." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 text-[#5409DA] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-gray-900 text-sm">{item.title}:</strong>
                      <span className="text-gray-500 text-sm ml-1">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5409DA]/10 text-[#5409DA]">
                  <FaPassport className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Visa Consultancy & Processing</h3>
              </div>
              <p className="text-[#5409DA] font-semibold mb-3">High-approval documentation guidance for religious, leisure, and business visas.</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Comprehensive support from application verification to appointment scheduling, eliminating rejection risks caused by paperwork errors.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "Religious Travel (Umrah Visa)", desc: "Fast-track digital visa processing paired with approved ground support guidelines." },
                  { title: "Sticker & Visit Visas (USA, UK, Schengen)", desc: "Full application review, cover letter drafting, financial profile alignment, and interview prep." },
                  { title: "E-Visas & Fast-Track Entry", desc: "Seamless online filing for Azerbaijan (Baku), Turkey, UAE, Malaysia, Kenya, and Uzbekistan." },
                  { title: "Documentation & File Preparation", desc: "Certified translations, insurance verification, itinerary proofing, and mock interview briefing." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 text-[#5409DA] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-gray-900 text-sm">{item.title}:</strong>
                      <span className="text-gray-500 text-sm ml-1">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2">
               <Image 
                  src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop" 
                  alt="Visa Processing"
                  fill
                  className="object-cover"
               />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
               <Image 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1974&auto=format&fit=crop" 
                  alt="Custom Holiday Packages"
                  fill
                  className="object-cover"
               />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5409DA]/10 text-[#5409DA]">
                  <FaMapMarkedAlt className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Custom Holiday Packages & Group Tours</h3>
              </div>
              <p className="text-[#5409DA] font-semibold mb-3">Handpicked hotels, certified local guides, and stress-free transport.</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Thoughtfully designed private and fixed-departure tours across Southeast Asia, Central Asia, the Middle East, and East Africa.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "Tailored Private Trips", desc: "Fully customizable daily itineraries, private chauffeurs, and luxury or boutique hotel stays." },
                  { title: "Fixed-Departure Group Departures", desc: "Budget-optimized group packages with dedicated tour managers and pre-planned excursions." },
                  { title: "Curated Activities & Transfers", desc: "Airport transfers, private intercity bullet train/ferry tickets, and skip-the-line attraction passes." },
                  { title: "Destination Specializations", desc: "Baku city breaks, tropical Thailand/Bali retreats, Turkish historical tours, Tashkent silk-route routes, and Sharm El Sheikh resort stays." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="h-5 w-5 text-[#5409DA] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-gray-900 text-sm">{item.title}:</strong>
                      <span className="text-gray-500 text-sm ml-1">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trust & Workflow Section */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 mb-4">
               <span className="h-2 w-2 rounded-full bg-[#5409DA]"></span>
               <span className="text-xs font-bold tracking-wider text-gray-800 uppercase">Process</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
               <span className="text-[#5409DA]">How We</span> Work
             </h2>
             <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-500">
                A simple, transparent, and hassle-free 4-step process to get your travel plans sorted.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
             {[
               { icon: FaComments, title: "1. Initial Consultation", desc: "Tell us your travel dates, preferred budget, and traveler count." },
               { icon: FaFileInvoice, title: "2. Customized Quote", desc: "Receive a comprehensive proposal covering flights, stay, and required documentation." },
               { icon: FaTicketAlt, title: "3. Filing & Confirmation", desc: "Instant flight holds, visa documentation filing, and voucher generations." },
               { icon: FaHeadset, title: "4. On-Trip Support", desc: "Dedicated 24/7 WhatsApp concierge support throughout your journey." },
             ].map((step, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50 text-center hover:shadow-md transition-shadow relative mt-6 lg:mt-0">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-[#5409DA] text-white shadow-lg border-4 border-[#F8F9FA]">
                     <step.icon className="h-6 w-6" />
                   </div>
                   <h4 className="mt-6 font-bold text-gray-900 text-lg">{step.title}</h4>
                   <p className="mt-3 text-sm text-gray-500">{step.desc}</p>
                </div>
             ))}
          </div>

          <div className="text-center mb-10">
             <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 mb-4">
               <span className="h-2 w-2 rounded-full bg-[#5409DA]"></span>
               <span className="text-xs font-bold tracking-wider text-gray-800 uppercase">Trust</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
               Why <span className="text-[#5409DA]">Choose Us</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { icon: FaHandshake, title: "IATA/Accredited Partnerships", desc: "Direct access to airline GDS and verified hotel networks." },
               { icon: FaChartLine, title: "High Visa Success Track Record", desc: "Strict pre-submission scrutiny minimizes refusal rates." },
               { icon: FaMoneyBillWave, title: "Transparent Pricing", desc: "Zero hidden taxes or unannounced processing fees." },
             ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-md transition-shadow">
                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#5409DA] text-white">
                      <feature.icon className="h-6 w-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                      <p className="mt-1 text-xs text-gray-500">{feature.desc}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
