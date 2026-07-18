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
  title: "Dishaayein technology",
  description: "Dishaayein Technology builds AI-first platforms that make operations faster and cheaper for businesses — and puts the same intelligence to work reuniting families and connecting communities.",
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
