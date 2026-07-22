/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import FloatingBookingButton from './components/FloatingBookingButton';
import Footer from './components/Footer';

import {
  HeroSkeleton,
  BrandStorySkeleton,
  SignatureDishesSkeleton,
  InteractiveMenuSkeleton,
  ExperienceSkeleton,
  ChefSectionSkeleton,
  GallerySkeleton,
  TestimonialsSkeleton,
  ReservationSkeleton,
  LocationSkeleton,
  PremiumCTASkeleton,
  InstagramGallerySkeleton
} from './components/Skeletons';

// Helper to simulate network/asset loading delay for demonstration of premium loading states
function lazyWithDelay<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  minDelay: number = 800
) {
  return lazy(() => 
    Promise.all([
      factory(),
      new Promise(resolve => setTimeout(resolve, minDelay))
    ]).then(([moduleExports]) => moduleExports)
  );
}

const Hero = lazyWithDelay(() => import('./components/Hero'));
const BrandStory = lazyWithDelay(() => import('./components/BrandStory'));
const SignatureDishes = lazyWithDelay(() => import('./components/SignatureDishes'));
const InteractiveMenu = lazyWithDelay(() => import('./components/InteractiveMenu'));
const Experience = lazyWithDelay(() => import('./components/Experience'));
const ChefSection = lazyWithDelay(() => import('./components/ChefSection'));
const Gallery = lazyWithDelay(() => import('./components/Gallery'));
const Testimonials = lazyWithDelay(() => import('./components/Testimonials'));
const Reservation = lazyWithDelay(() => import('./components/Reservation'));
const Location = lazyWithDelay(() => import('./components/Location'));
const InstagramGallery = lazyWithDelay(() => import('./components/InstagramGallery'));
const PremiumCTA = lazyWithDelay(() => import('./components/PremiumCTA'));

export default function App() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F4F1EB]">
      <Navigation />
      <FloatingBookingButton />
      
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<BrandStorySkeleton />}>
        <BrandStory />
      </Suspense>
      
      <Suspense fallback={<SignatureDishesSkeleton />}>
        <SignatureDishes />
      </Suspense>
      
      <Suspense fallback={<InteractiveMenuSkeleton />}>
        <InteractiveMenu />
      </Suspense>
      
      <Suspense fallback={<ExperienceSkeleton />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<ChefSectionSkeleton />}>
        <ChefSection />
      </Suspense>
      
      <Suspense fallback={<GallerySkeleton />}>
        <Gallery />
      </Suspense>
      
      <Suspense fallback={<TestimonialsSkeleton />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<ReservationSkeleton />}>
        <Reservation />
      </Suspense>
      
      <Suspense fallback={<LocationSkeleton />}>
        <Location />
      </Suspense>
      
      <Suspense fallback={<InstagramGallerySkeleton />}>
        <InstagramGallery />
      </Suspense>
      
      <Suspense fallback={<PremiumCTASkeleton />}>
        <PremiumCTA />
      </Suspense>
      
      <Footer />
    </main>
  );
}
