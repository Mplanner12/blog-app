"use client";

import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";

export default function Page() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-center">
      <Hero />
      <BlogSection />
    </main>
  );
}
