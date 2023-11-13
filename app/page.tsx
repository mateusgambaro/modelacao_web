"use client";

import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { useRef } from "react";

export default function Home() {
  const campRef = useRef<HTMLDivElement>(null); // Create a ref

  const scrollToCamp = () => {
    campRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Hero scrollToCamp={scrollToCamp} />
      <div ref={campRef}>
        <Camp />
      </div>
      <Guide />
      {/* <Features /> */}
      {/* <GetApp /> */}
    </>
  );
}
