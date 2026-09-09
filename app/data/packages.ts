export type PackageType = 'hajj-umrah' | 'visa' | 'international' | 'domestic';
export type SubCategory = 'all' | 'business' | 'honeymoon' | 'family' | 'group' | 'luxury';

export interface Hotel {
  name: string;
  rating: number;
  duration: string;
}

export interface AmountBreakdown {
  label: string;
  amount: string;
}

export interface Package {
  id: string;
  title: string;
  type: PackageType;
  subCategory: SubCategory[];
  price: string;
  duration: string;
  image: string;
  description: string;
  includes: string[];
  requiredDocuments?: string[];
  hotels?: Hotel[];
  amountBreakdown?: AmountBreakdown[];
  totalAmount?: string;
  visaDetails?: string;
}

export const packagesData: Package[] = [
  // Hajj & Umrah
  {
    id: "umrah-vip-2024",
    title: "VIP 14-Day Umrah Package",
    type: "hajj-umrah",
    subCategory: ["all", "luxury", "family"],
    price: "$1,500",
    duration: "14 Days / 13 Nights",
    image: "https://images.unsplash.com/photo-1565552643982-1262d1c69be8?auto=format&fit=crop&q=80&w=1000",
    description: "Experience a spiritually enriching journey with our premium VIP Umrah package. Includes 5-star hotel stays in Makkah and Madinah, just steps away from the Haram.",
    includes: ["Visa Processing", "Return Flights", "5-Star Hotel", "Daily Buffet Breakfast", "AC Transport", "Ziyarat Tours"],
    requiredDocuments: ["Original Passport (6 months validity)", "4 Passport Size Photographs (blue background)", "CNIC Copy", "Vaccination Certificate"],
    hotels: [
      { name: "Swissôtel Makkah", rating: 5, duration: "7 Nights" },
      { name: "Pullman Zamzam Madina", rating: 5, duration: "6 Nights" }
    ],
    amountBreakdown: [
      { label: "Flight Tickets", amount: "$700" },
      { label: "Hotel Accommodation", amount: "$500" },
      { label: "Visa Processing", amount: "$150" },
      { label: "Transport & Ziyarat", amount: "$150" }
    ],
    totalAmount: "$1,500"
  },
  {
    id: "hajj-economy-2024",
    title: "Economy Hajj Package",
    type: "hajj-umrah",
    subCategory: ["all", "group"],
    price: "$5,500",
    duration: "21 Days / 20 Nights",
    image: "https://images.unsplash.com/photo-1591414436570-58074cb613ff?auto=format&fit=crop&q=80&w=1000",
    description: "An affordable yet comfortable Hajj experience for groups. Dedicated tour guides and well-organized logistics ensure a hassle-free pilgrimage.",
    includes: ["Hajj Visa", "Flights", "Standard Hotel", "Camps in Mina & Arafat", "Meals", "Transport"],
    requiredDocuments: ["Original Passport", "Photographs", "Medical Certificate", "Blood Group Report"],
    hotels: [
      { name: "Azizia Standard Accommodation", rating: 3, duration: "14 Nights" },
      { name: "Mina/Arafat Tents", rating: 0, duration: "6 Nights" }
    ],
    amountBreakdown: [
      { label: "Airfare", amount: "$1,500" },
      { label: "Accommodation & Camps", amount: "$2,000" },
      { label: "Hajj Fee & Visa", amount: "$1,200" },
      { label: "Food & Transport", amount: "$800" }
    ],
    totalAmount: "$5,500"
  },

  // International
  {
    id: "maldives-honeymoon",
    title: "Maldives Romantic Escape",
    type: "international",
    subCategory: ["all", "honeymoon", "luxury"],
    price: "$2,200",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1000",
    description: "Escape to the pristine beaches of the Maldives. Stay in an overwater villa and enjoy romantic candlelit dinners and couples spa treatments.",
    includes: ["Flights", "Water Villa Stay", "All-Inclusive Meals", "Speedboat Transfers", "Couples Spa"],
    requiredDocuments: ["Original Passport (6 months validity)", "Return Air Ticket", "Hotel Booking Confirmation"],
    hotels: [
      { name: "Kurumba Maldives Resort", rating: 5, duration: "4 Nights" }
    ],
    amountBreakdown: [
      { label: "Flights", amount: "$800" },
      { label: "Water Villa", amount: "$1,000" },
      { label: "Meals & Transfers", amount: "$400" }
    ],
    totalAmount: "$2,200"
  },
  {
    id: "dubai-business-expo",
    title: "Dubai Business & Leisure",
    type: "international",
    subCategory: ["all", "business"],
    price: "$950",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000",
    description: "Ideal for business travelers attending conferences in Dubai. Centrally located hotels near the World Trade Centre with high-speed internet and premium lounges.",
    includes: ["Visa", "Flights", "Business Hotel Stay", "Airport Transfers", "Breakfast"],
    requiredDocuments: ["Passport Copy", "Passport Size Photo", "Business Card or Employee ID"],
    hotels: [
      { name: "Novotel World Trade Centre", rating: 4, duration: "3 Nights" }
    ],
    amountBreakdown: [
      { label: "Flights", amount: "$350" },
      { label: "Hotel", amount: "$400" },
      { label: "Visa", amount: "$100" },
      { label: "Transfers", amount: "$100" }
    ],
    totalAmount: "$950"
  },
  {
    id: "turkey-family-tour",
    title: "Turkey Historical Family Tour",
    type: "international",
    subCategory: ["all", "family", "group"],
    price: "$1,800",
    duration: "8 Days / 7 Nights",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1000",
    description: "Explore the magical cities of Istanbul and Cappadocia. Perfect for families looking to discover history, culture, and hot air balloon rides.",
    includes: ["Flights", "4-Star Hotels", "Guided Tours", "Hot Air Balloon Ride", "Breakfast & Dinner"],
    requiredDocuments: ["Passport Copy", "Bank Statement", "National ID", "Visa Application Form"],
    hotels: [
      { name: "Ramada Plaza Istanbul", rating: 4, duration: "4 Nights" },
      { name: "Cappadocia Cave Hotel", rating: 4, duration: "3 Nights" }
    ],
    amountBreakdown: [
      { label: "Airfare", amount: "$600" },
      { label: "Hotels", amount: "$500" },
      { label: "Tours & Hot Air Balloon", amount: "$450" },
      { label: "Visa & Transport", amount: "$250" }
    ],
    totalAmount: "$1,800"
  },

  // Domestic
  {
    id: "northern-areas-adventure",
    title: "Hunza Valley Adventure",
    type: "domestic",
    subCategory: ["all", "family", "group"],
    price: "PKR 90,000",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1627896157734-4bcbfbb1cebc?auto=format&fit=crop&q=80&w=1000",
    description: "Discover the breathtaking beauty of Pakistan's northern areas. A complete road trip experience covering Naran, Kaghan, and the mesmerizing Hunza Valley.",
    includes: ["Luxury Coaster", "Hotel Stays", "Breakfast", "Tour Guide", "Jeep Rides"],
    requiredDocuments: ["Original CNIC Copy"],
    hotels: [
      { name: "Naran Swiss Hotel", rating: 3, duration: "2 Nights" },
      { name: "Hunza Serena Inn", rating: 4, duration: "4 Nights" }
    ],
    amountBreakdown: [
      { label: "Transport & Fuel", amount: "PKR 30,000" },
      { label: "Accommodation", amount: "PKR 40,000" },
      { label: "Jeep Safari & Guide", amount: "PKR 20,000" }
    ],
    totalAmount: "PKR 90,000"
  },
  {
    id: "murree-weekend-getaway",
    title: "Murree Weekend Getaway",
    type: "domestic",
    subCategory: ["all", "family", "honeymoon"],
    price: "PKR 45,000",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1588612739439-d3e75e533c39?auto=format&fit=crop&q=80&w=1000",
    description: "A quick and refreshing weekend escape to the hills of Murree and Bhurban. Relax in cozy resorts and enjoy the cool weather.",
    includes: ["Transport", "Resort Stay", "Breakfast", "Local Sightseeing"],
    requiredDocuments: ["CNIC Copy"],
    hotels: [
      { name: "PC Bhurban", rating: 5, duration: "2 Nights" }
    ],
    amountBreakdown: [
      { label: "Hotel", amount: "PKR 30,000" },
      { label: "Transport", amount: "PKR 15,000" }
    ],
    totalAmount: "PKR 45,000"
  },

  // Visa
  {
    id: "schengen-visa-assistance",
    title: "Schengen Visa Processing",
    type: "visa",
    subCategory: ["all", "business", "family"],
    price: "$120",
    duration: "Processing: 15-20 Days",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1000",
    description: "Complete assistance with Schengen visa applications. We help with form filling, cover letters, itinerary planning, and appointment booking.",
    includes: ["Document Review", "Cover Letter", "Flight Reservation", "Hotel Booking", "Appointment Scheduling"],
    requiredDocuments: [
      "Original Passport (Valid for 6 months)", 
      "2 Passport Size Photos (White background, 35x45mm)", 
      "Bank Statement (Last 6 months)", 
      "Account Maintenance Certificate", 
      "Employment Letter or Business Registration", 
      "Travel Insurance", 
      "FRC/MRC for Family Visas"
    ],
    visaDetails: "Schengen visas allow travel across 27 European countries. The process includes biometric verification and an interview depending on the embassy. Ensure your bank statements have sufficient funds to cover the trip.",
    amountBreakdown: [
      { label: "Consultancy & Service Fee", amount: "$120" },
      { label: "Embassy Visa Fee", amount: "€80 (Paid directly to Embassy)" }
    ],
    totalAmount: "$120 + €80"
  },
  {
    id: "usa-b1-b2-visa",
    title: "USA B1/B2 Visa Appointment",
    type: "visa",
    subCategory: ["all", "business", "family"],
    price: "$150",
    duration: "Processing: Varies",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    description: "Expert guidance for USA Visit and Business visas. We prepare you for the interview and ensure your DS-160 form is flawlessly filled.",
    includes: ["DS-160 Filing", "Fee Payment Assist", "Interview Prep", "Document Checklist"],
    requiredDocuments: [
      "Original Passport", 
      "USA Standard Photograph (2x2 inches)", 
      "Previous Travel History", 
      "Business/Employment Proof", 
      "Property Documents (optional but recommended)"
    ],
    visaDetails: "The USA B1/B2 visa is a non-immigrant visa for business or tourism. The interview is the most critical part of the process. Our package includes 2 mock interview sessions to build confidence.",
    amountBreakdown: [
      { label: "DS-160 Filing & Consultation", amount: "$150" },
      { label: "USA Embassy Fee", amount: "$185 (Paid directly to Embassy)" }
    ],
    totalAmount: "$150 + $185"
  }
];
