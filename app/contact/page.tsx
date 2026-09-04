import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#F8F9FA] min-h-screen pb-20">
      {/* 1. Hero Section */}
      <section className="relative h-72 md:h-96 w-full bg-gray-900 flex items-center justify-center text-center">
        <Image 
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Us Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Have questions or ready to book your next trip? Reach out to our dedicated travel consultants today.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-50">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 mb-6">
               <span className="h-2 w-2 rounded-full bg-[#5409DA]"></span>
               <span className="text-xs font-bold tracking-wider text-gray-800 uppercase">Send a Message</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              We'd love to <span className="text-[#5409DA]">hear from you</span>
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5409DA]/20 focus:border-[#5409DA] transition-all" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+1 (234) 567-890" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5409DA]/20 focus:border-[#5409DA] transition-all" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5409DA]/20 focus:border-[#5409DA] transition-all" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</label>
                <textarea id="message" rows={5} placeholder="Tell us about your travel plans..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5409DA]/20 focus:border-[#5409DA] transition-all resize-none"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-[#5409DA] text-white rounded-xl font-bold text-lg hover:bg-opacity-90 shadow-lg shadow-[#5409DA]/20 transition-all">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Consultant & Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Consultant Profile Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-50 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-[#5409DA]/5"></div>
              
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md mb-4 mt-4">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Customer Support Consultant"
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Sarah Jenkins</h3>
              <p className="text-sm font-medium text-[#5409DA] mb-6">Senior Travel Consultant</p>
              
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Need immediate assistance with your visa or custom holiday packages? I'm here to help you design your perfect trip.
              </p>

              <div className="space-y-4">
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-3.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  <FaCalendarAlt className="h-5 w-5 text-white/80" />
                  Schedule a Video Call
                </a>
                
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#20b858] transition-colors shadow-lg shadow-[#25D366]/20">
                  <FaWhatsapp className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Direct Contact Info Card */}
            <div className="bg-[#5409DA] rounded-3xl p-8 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 font-medium mb-1">Email Us</p>
                    <a href="mailto:sarah@fatimatravels.com" className="font-semibold hover:underline">sarah@fatimatravels.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <FaPhoneAlt className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 font-medium mb-1">Call Us (24/7)</p>
                    <a href="tel:+1234567890" className="font-semibold hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 font-medium mb-1">Office Location</p>
                    <p className="font-semibold">123 Travel Avenue, Suite 400<br/>New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
