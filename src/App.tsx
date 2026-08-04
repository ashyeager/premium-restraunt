/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { LanguageProvider } from './context/LanguageContext';

import {
  HeroSkeleton,
  SignatureDishesSkeleton,
  InteractiveMenuSkeleton,
  LocationSkeleton
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
const WokBuilder = lazyWithDelay(() => import('./components/WokBuilder'));
const PopularDishes = lazyWithDelay(() => import('./components/PopularDishes'));
const LocationInfo = lazyWithDelay(() => import('./components/LocationInfo'));

export default function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen overflow-x-hidden bg-[#0D0D0D] text-white font-sans selection:bg-[#C8102E] selection:text-white">
        <Navigation />
        
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<InteractiveMenuSkeleton />}>
          <WokBuilder />
        </Suspense>
        
        <Suspense fallback={<SignatureDishesSkeleton />}>
          <PopularDishes />
        </Suspense>
        
        <Suspense fallback={<LocationSkeleton />}>
          <LocationInfo />
        </Suspense>
        
        <Footer />
        <BottomNav />
      </main>
    </LanguageProvider>
  );
}
