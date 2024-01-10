"use client";

import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="bg-bkg text-content h-screen data-theme">
      <Navbar />
      <Hero />
    </div>
  );
}
