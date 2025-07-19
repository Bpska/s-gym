"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { FeaturedClasses } from '@/components/sections/featured-classes';
import { TrainerSpotlight } from '@/components/sections/trainer-spotlight';
import { MembershipPricing } from '@/components/sections/membership-pricing';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <FeaturedClasses />
      <TrainerSpotlight />
      <MembershipPricing />
      <Testimonials />
      <Footer />
    </main>
  );
}