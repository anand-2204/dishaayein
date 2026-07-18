import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import { ThemeProvider } from "../Context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dishaayein Technology | AI-Native Products Driving Real Business Impact",
  description:
    "Dishaayein Technology builds AI-first platforms that make operations faster and cheaper for businesses — and puts the same intelligence to work reuniting families and connecting communities.",
  keywords: [
    "Dishaayein Technology",
    "AI-native products",
    "artificial intelligence solutions",
    "business impact",
    "digital transformation",
    "enterprise AI",
  ],
  authors: [{ name: "Dishaayein Technology", url: "https://www.dishaayein.com" }],
  openGraph: {
    title: "Dishaayein Technology — AI-Native Products for Real Business Impact",
    description:
      "Discover how Dishaayein Technology leverages AI-native products to create real business impact and drive digital transformation.",
    url: "https://www.dishaayein.com",
    siteName: "Dishaayein Technology",
    images: [
      {
        url: "/logo/light Horizontal.png",
        width: 1200,
        height: 630,
        alt: "Dishaayein Technology Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dishaayein Technology — AI-Native Products for Real Business Impact",
    description: "AI-native products designed to deliver measurable business impact.",
    images: ["/logo/light Horizontal.png"],
  },
  icons: {
    icon: "/logo/light Horizontal.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
