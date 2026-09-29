import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Bubbles from "./components/Bubbles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zukipedia — The Free Fish Encyclopedia",
  description:
    "Zukipedia is a comprehensive, free encyclopedia dedicated to fish species from around the world. Explore freshwater, saltwater, tropical, and deep-sea fish with detailed articles, taxonomy, and stunning visuals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Bubbles />
        <Header />
        <div className="site-layout">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
