require('dotenv').config({ path: '.env.local' });
const { createClient } = require('next-sanity');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-10',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function uploadImageFromUrl(url) {
  if (!url) return undefined;
  
  try {
    let buffer;
    if (url.startsWith('http')) {
      const client = url.startsWith('https') ? https : http;
      buffer = await new Promise((resolve, reject) => {
        client.get(url, (res) => {
          const data = [];
          res.on('data', (chunk) => data.push(chunk));
          res.on('end', () => resolve(Buffer.concat(data)));
          res.on('error', reject);
        }).on('error', reject);
      });
    } else {
      // Local file in public folder
      const localPath = path.join(__dirname, '../public', url);
      buffer = fs.readFileSync(localPath);
    }

    const asset = await client.assets.upload('image', buffer, {
      filename: path.basename(url.split('?')[0])
    });
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      }
    };
  } catch (error) {
    console.error(`Failed to upload image ${url}:`, error.message);
    return undefined;
  }
}

const packagesData = [
  { _id: "umrah-vip-2024", title: "VIP 14-Day Umrah Package", type: "hajj-umrah", subCategory: ["all", "luxury", "family"], price: "$1,500", duration: "14 Days / 13 Nights", image: "https://images.unsplash.com/photo-1565552643982-1262d1c69be8?auto=format&fit=crop&q=80&w=1000", description: "Experience a spiritually enriching journey with our premium VIP Umrah package. Includes 5-star hotel stays in Makkah and Madinah, just steps away from the Haram.", includes: ["Visa Processing", "Return Flights", "5-Star Hotel", "Daily Buffet Breakfast", "AC Transport", "Ziyarat Tours"], requiredDocuments: ["Original Passport (6 months validity)", "4 Passport Size Photographs (blue background)", "CNIC Copy", "Vaccination Certificate"], hotels: [{ _key: "h1", name: "Swissôtel Makkah", rating: 5, duration: "7 Nights" }, { _key: "h2", name: "Pullman Zamzam Madina", rating: 5, duration: "6 Nights" }], amountBreakdown: [{ _key: "a1", label: "Flight Tickets", amount: "$700" }, { _key: "a2", label: "Hotel Accommodation", amount: "$500" }, { _key: "a3", label: "Visa Processing", amount: "$150" }, { _key: "a4", label: "Transport & Ziyarat", amount: "$150" }], totalAmount: "$1,500" },
  { _id: "hajj-economy-2024", title: "Economy Hajj Package", type: "hajj-umrah", subCategory: ["all", "group"], price: "$5,500", duration: "21 Days / 20 Nights", image: "https://images.unsplash.com/photo-1591414436570-58074cb613ff?auto=format&fit=crop&q=80&w=1000", description: "An affordable yet comfortable Hajj experience for groups. Dedicated tour guides and well-organized logistics ensure a hassle-free pilgrimage.", includes: ["Hajj Visa", "Flights", "Standard Hotel", "Camps in Mina & Arafat", "Meals", "Transport"], requiredDocuments: ["Original Passport", "Photographs", "Medical Certificate", "Blood Group Report"], hotels: [{ _key: "h1", name: "Azizia Standard Accommodation", rating: 3, duration: "14 Nights" }, { _key: "h2", name: "Mina/Arafat Tents", rating: 0, duration: "6 Nights" }], amountBreakdown: [{ _key: "a1", label: "Airfare", amount: "$1,500" }, { _key: "a2", label: "Accommodation & Camps", amount: "$2,000" }, { _key: "a3", label: "Hajj Fee & Visa", amount: "$1,200" }, { _key: "a4", label: "Food & Transport", amount: "$800" }], totalAmount: "$5,500" },
  { _id: "schengen-visa-assistance", title: "Schengen Visa Processing", type: "visa", subCategory: ["all", "business", "family"], price: "$120", duration: "Processing: 15-20 Days", image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1000", description: "Complete assistance with Schengen visa applications. We help with form filling, cover letters, itinerary planning, and appointment booking.", includes: ["Document Review", "Cover Letter", "Flight Reservation", "Hotel Booking", "Appointment Scheduling"], requiredDocuments: ["Original Passport (Valid for 6 months)", "2 Passport Size Photos (White background, 35x45mm)", "Bank Statement (Last 6 months)"], visaDetails: "Schengen visas allow travel across 27 European countries. The process includes biometric verification and an interview depending on the embassy." },
  { _id: "usa-b1-b2-visa", title: "USA B1/B2 Visa Appointment", type: "visa", subCategory: ["all", "business", "family"], price: "$150", duration: "Processing: Varies", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000", description: "Expert guidance for USA Visit and Business visas. We prepare you for the interview and ensure your DS-160 form is flawlessly filled.", includes: ["DS-160 Filing", "Fee Payment Assist", "Interview Prep", "Document Checklist"], requiredDocuments: ["Original Passport", "USA Standard Photograph (2x2 inches)"], visaDetails: "The USA B1/B2 visa is a non-immigrant visa for business or tourism. The interview is the most critical part of the process." }
];

const topDestinations = [
  { _id: "top-dubai", title: "Dubai", country: "United Arab Emirates", subCategory: ["popular"], tagline: "Sky-high wonders, golden dunes and royal luxury", bestSeason: "Nov – Apr", image: "/destinations/dubai1.jpg", description: "From the world's tallest skyscraper to thrilling desert safaris and Arabian Gulf cruises.", includes: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah", "Dubai Mall"], showInTopDestinations: true, type: "international" },
  { _id: "top-santorini", title: "Santorini", country: "Greece", subCategory: ["couples"], tagline: "Whitewashed cliffs, cobalt blue domes and sunset vistas", bestSeason: "May – Oct", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop", description: "The crown jewel of the Cyclades, famous for iconic cliffside villages and volcanic beaches.", includes: ["Oia Sunsets", "Caldera Cruise", "Fira Town", "Red Beach"], showInTopDestinations: true, type: "international" },
  { _id: "top-maldives", title: "Maldives", country: "Indian Ocean", subCategory: ["luxury"], tagline: "Crystal lagoons, coral atolls and private overwater villas", bestSeason: "Dec – Apr", image: "/destinations/maldives1.jpg", description: "An idyllic archipelago offering unrivaled serenity, vibrant marine life, and pure ocean luxury.", includes: ["Overwater Villas", "Manta Ray Safari", "Underwater Dining", "Sunset Fishing"], showInTopDestinations: true, type: "international" },
  { _id: "top-japan", title: "Kyoto & Tokyo", country: "Japan", subCategory: ["family"], tagline: "Ancient shrines, cherry blossoms and neon-lit avenues", bestSeason: "Mar – May / Oct – Nov", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", description: "A breathtaking harmony between thousand-year-old temples and futuristic cityscapes.", includes: ["Fushimi Inari", "Arashiyama Grove", "Mount Fuji", "Shibuya Crossing"], showInTopDestinations: true, type: "international" },
  { _id: "top-swiss", title: "Swiss Alps", country: "Switzerland", subCategory: ["luxury"], tagline: "Snowcapped peaks, glacial lakes and panoramic train rides", bestSeason: "All Year Round", image: "/destinations/switzerland1.jpg", description: "Pure alpine magic with snow-draped chalets, scenic glacier express railways, and sparkling lakes.", includes: ["Mount Titlis", "Jungfraujoch", "Lake Lucerne", "Interlaken"], showInTopDestinations: true, type: "international" },
  { _id: "top-cappadocia", title: "Cappadocia", country: "Türkiye", subCategory: ["popular"], tagline: "Sunrise hot air balloons soaring over ancient cave valleys", bestSeason: "Apr – Oct", image: "/destinations/turkey1.jpg", description: "A surreal landscape of carved rock churches, subterranean cities, and hot air balloon skies.", includes: ["Hot Air Balloon", "Goreme Open Air", "Cave Suites", "Ihlara Valley"], showInTopDestinations: true, type: "international" },
  { _id: "top-bali", title: "Bali", country: "Indonesia", subCategory: ["couples"], tagline: "Lush emerald terraces, sacred temples and surf beaches", bestSeason: "Apr – Oct", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop", description: "A spiritual sanctuary blending tropical rainforests, cliffside temples, and vibrant coastal culture.", includes: ["Ubud Terraces", "Tanah Lot", "Nusa Penida", "Seminyak Sunsets"], showInTopDestinations: true, type: "international" },
  { _id: "top-kuala", title: "Kuala Lumpur", country: "Malaysia", subCategory: ["popular"], tagline: "Petronas twin towers, vibrant culture and rainforest getaways", bestSeason: "Nov – Aug", image: "/destinations/malaysia1.jpg", description: "Dynamic city life surrounded by lush tropical nature, iconic towers, and world-class street food.", includes: ["Petronas Towers", "Batu Caves", "Langkawi Island", "Genting Highlands"], showInTopDestinations: true, type: "international" },
];

const intlPackages = [
  { _id: "intl-dubai", title: "Dubai Luxury & Desert Safari", country: "United Arab Emirates", subCategory: ["popular"], duration: "5 Days / 4 Nights", rating: 4.9, reviews: 142, price: "PKR 185,000", image: "/destinations/dubai1.jpg", tag: "Best Seller", description: "Experience the pinnacle of modernity with Burj Khalifa access, luxury Marina dhow cruise, and premium red dune desert safari.", includes: ["4-Star Hotel", "Daily Breakfast", "Desert Safari", "Marina Cruise", "Visa Assistance"], showInInternationalPackages: true, type: "international" },
  { _id: "intl-turkey", title: "Enchanting Turkey & Cappadocia", country: "Türkiye", subCategory: ["couples"], duration: "7 Days / 6 Nights", rating: 4.95, reviews: 98, price: "PKR 295,000", image: "/destinations/turkey1.jpg", tag: "Trending", description: "Explore historic Istanbul mosques, Bosphorus yacht tours, and the magical fairy chimneys of Cappadocia with sunrise hot air ballooning.", includes: ["4-Star / Boutique Hotel", "Domestic Flights", "Bosphorus Cruise", "Cappadocia Tour", "Airport Transfers"], showInInternationalPackages: true, type: "international" },
  { _id: "intl-maldives", title: "Maldives Private Island Retreat", country: "Indian Ocean", subCategory: ["luxury"], duration: "5 Days / 4 Nights", rating: 5.0, reviews: 76, price: "PKR 430,000", image: "/destinations/maldives1.jpg", tag: "Honeymoon Special", description: "Pure romantic bliss in an overwater villa, surrounded by turquoise lagoons, coral reefs, private dining, and luxury speedboat transfers.", includes: ["Overwater Villa", "All Inclusive Meals", "Speedboat Transfer", "Snorkeling Tour", "Free Visa on Arrival"], showInInternationalPackages: true, type: "international" },
  { _id: "intl-malaysia", title: "Malaysia & Langkawi Island Hopping", country: "Southeast Asia", subCategory: ["family"], duration: "6 Days / 5 Nights", rating: 4.85, reviews: 110, price: "PKR 225,000", image: "/destinations/malaysia1.jpg", tag: "Family Favorite", description: "A vibrant family vacation featuring Kuala Lumpur's iconic towers, Sunway Lagoon theme park, and the serene beaches of Langkawi.", includes: ["4-Star Hotels", "Daily Breakfast", "City Tour & Cable Car", "Island Hopping", "E-Visa Processing"], showInInternationalPackages: true, type: "international" },
  { _id: "intl-swiss", title: "Majestic Switzerland & Alpine Peaks", country: "Europe", subCategory: ["luxury"], duration: "8 Days / 7 Nights", rating: 4.98, reviews: 64, price: "PKR 650,000", image: "/destinations/switzerland1.jpg", tag: "Premium Grand Tour", description: "Snow-capped Alpine panoramas, Mount Titlis revolving cable cars, scenic Swiss rail journeys, and sparkling Lake Lucerne.", includes: ["Luxury Alpine Hotels", "Swiss Travel Pass", "Mount Titlis Excursion", "Breakfast Included", "Schengen Visa Guidance"], showInInternationalPackages: true, type: "international" },
];

const domesticPackages = [
  { _id: "dom-hunza", title: "Hunza Valley & Attabad Lake", location: "Gilgit-Baltistan", tag: "Most Popular", duration: "6D / 5N", rating: 4.98, price: "PKR 65,000", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop", includes: ["Attabad Boating", "Passu Cones", "Baltit Fort", "Khunjerab Pass"], showInDomesticPackages: true, type: "domestic" },
  { _id: "dom-skardu", title: "Skardu & Deosai Plains", location: "Baltistan", tag: "Land of Giants", duration: "7D / 6N", rating: 4.95, price: "PKR 85,000", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop", includes: ["Shangrila Resort", "Cold Desert", "Deosai Plateau"], showInDomesticPackages: true, type: "domestic" },
  { _id: "dom-swat", title: "Swat & Malam Jabba Ski", location: "Khyber Pakhtunkhwa", tag: "Scenic Valley", duration: "4D / 3N", rating: 4.89, price: "PKR 45,000", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop", includes: ["Malam Jabba Ski", "Mahodand Lake", "Ushu Forest"], showInDomesticPackages: true, type: "domestic" },
  { _id: "dom-neelum", title: "Neelum Valley & Arang Kel", location: "Azad Kashmir", tag: "Paradise", duration: "5D / 4N", rating: 4.92, price: "PKR 52,000", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop", includes: ["Arang Kel Cable Car", "Kutton Waterfall", "Keran"], showInDomesticPackages: true, type: "domestic" },
  { _id: "dom-fairy", title: "Fairy Meadows & Nanga Parbat", location: "Diamer, Gilgit", tag: "Adventure Trek", duration: "5D / 4N", rating: 4.97, price: "PKR 58,000", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop", includes: ["4x4 Jeep Safari", "Camp Under Stars", "Base Camp View"], showInDomesticPackages: true, type: "domestic" },
  { _id: "dom-gwadar", title: "Gwadar & Makran Coastal Highway", location: "Balochistan Coast", tag: "Golden Beaches", duration: "4D / 3N", rating: 4.88, price: "PKR 48,000", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop", includes: ["Kund Malir Beach", "Princess of Hope", "Hammerhead Sunset"], showInDomesticPackages: true, type: "domestic" },
];

const allPackages = [...packagesData, ...topDestinations, ...intlPackages, ...domesticPackages];

async function migrate() {
  console.log('Starting migration...');
  for (const pkg of allPackages) {
    let descBlocks = undefined;
    if (pkg.description) {
      descBlocks = [
        { _type: 'block', _key: 'b1', style: 'normal', children: [ { _type: 'span', _key: 's1', text: pkg.description, marks: [] } ] }
      ];
    }

    const imageObj = await uploadImageFromUrl(pkg.image);

    const doc = {
      _type: 'package',
      _id: pkg._id,
      title: pkg.title,
      slug: { _type: 'slug', current: pkg._id },
      type: pkg.type,
      subCategory: pkg.subCategory,
      price: pkg.price,
      duration: pkg.duration,
      description: descBlocks,
      includes: pkg.includes,
      requiredDocuments: pkg.requiredDocuments,
      hotels: pkg.hotels,
      amountBreakdown: pkg.amountBreakdown,
      totalAmount: pkg.totalAmount,
      visaDetails: pkg.visaDetails,
      showInTopDestinations: pkg.showInTopDestinations || false,
      showInInternationalPackages: pkg.showInInternationalPackages || false,
      showInDomesticPackages: pkg.showInDomesticPackages || false,
      country: pkg.country,
      location: pkg.location,
      rating: pkg.rating,
      reviews: pkg.reviews,
      tag: pkg.tag,
      tagline: pkg.tagline,
      bestSeason: pkg.bestSeason,
      image: imageObj
    };

    console.log(`Uploading document: ${doc.title}`);
    await client.createOrReplace(doc);
  }
  
  console.log("Migration complete!");
}

migrate().catch(console.error);
