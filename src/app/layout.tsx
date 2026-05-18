import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Body font — highly legible, clean sans-serif
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Display / heading font — modern, premium geometric sans
const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.geethamhostels.in";
const siteName = "Geetham Women's Hostel";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Geetham Women's Hostel | Premium Stay in Ambattur, Chennai",
    template: "%s | Geetham Women's Hostel",
  },
  description:
    "Geetham Women's Hostel offers safe, comfortable and affordable accommodation exclusively for women — IAS aspirants and working professionals in Ambattur, Chennai. Premium rooms, 24/7 security, homely food, Wi-Fi, and more.",

  keywords: [
    "women's hostel Chennai",
    "ladies hostel Ambattur",
    "working women hostel Chennai",
    "IAS aspirant hostel Chennai",
    "female hostel Ambattur",
    "PG for ladies Chennai",
    "women PG Ambattur",
    "safe hostel for women",
    "Geetham hostel",
    "hostel near Ambattur Industrial Estate",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: "Geetham Women's Hostel | Premium Stay in Ambattur, Chennai",
    description:
      "Safe, comfortable & affordable accommodation for women — IAS aspirants & working professionals in Ambattur, Chennai. 24/7 security, homely food, premium rooms.",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 200,
        alt: "Geetham Women's Hostel – Premium Accommodation in Ambattur, Chennai",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geetham Women's Hostel | Premium Stay in Ambattur, Chennai",
    description:
      "Safe, comfortable & affordable accommodation for women in Ambattur, Chennai. 24/7 security, homely food & premium rooms.",
    images: ["/favicon.ico"],
  },

  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },

  category: "Accommodation",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Geetham Women's Hostel",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  image: `${siteUrl}/favicon.ico`,
  description:
    "Safe, comfortable and affordable hostel accommodation exclusively for women — IAS aspirants and working professionals in Ambattur, Chennai.",
  priceRange: "₹₹",
  telephone: "+91-93443-82988",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ambattur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600053",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.1143,
    longitude: 80.1548,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "24/7 Security", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Homely Food", value: true },
    { "@type": "LocationFeatureSpecification", name: "AC Rooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "CCTV Surveillance", value: true },
  ],
  sameAs: [
    "https://www.instagram.com/geethamhostel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${dmSans.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Sticky WhatsApp Floating Button */}
        <a
          href="https://wa.me/918939929055"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          {/* We use an SVG for the official WhatsApp logo instead of MessageCircle */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
          </svg>
          <span className="absolute right-full mr-4 bg-white/95 backdrop-blur-sm text-zinc-900 text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 shadow-xl hidden sm:block">
            Chat with us
          </span>
        </a>
      </body>
    </html>
  );
}
