/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function HeroSkeleton() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#0D0D0D]">
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]" />
      <div className="relative z-10 text-center flex flex-col items-center px-6 mt-20 max-w-5xl mx-auto w-full">
        <div className="h-4 w-48 shimmer-bg rounded mb-8" />
        <div className="h-[120px] w-full max-w-3xl shimmer-bg rounded mb-12" />
        <div className="flex gap-6">
          <div className="h-14 w-40 shimmer-bg rounded" />
          <div className="h-14 w-40 shimmer-bg rounded" />
        </div>
      </div>
    </section>
  );
}

export function BrandStorySkeleton() {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-5/12 aspect-[3/4] shimmer-bg rounded" />
        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          <div className="h-4 w-32 shimmer-bg rounded mb-4" />
          <div className="h-24 w-full shimmer-bg rounded" />
          <div className="h-[1px] w-12 shimmer-bg my-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="h-4 w-40 shimmer-bg rounded mb-4" />
              <div className="h-20 w-full shimmer-bg rounded" />
            </div>
            <div>
              <div className="h-4 w-40 shimmer-bg rounded mb-4" />
              <div className="h-20 w-full shimmer-bg rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SignatureDishesSkeleton() {
  return (
    <section className="py-32 bg-[#0D0D0D] px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="h-4 w-40 shimmer-bg rounded mb-6" />
        <div className="h-12 w-64 shimmer-bg rounded mb-24" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/5] shimmer-bg rounded" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function InteractiveMenuSkeleton() {
  return (
    <section className="py-32 px-6 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <div className="h-4 w-32 shimmer-bg rounded mb-6" />
          <div className="h-12 w-64 shimmer-bg rounded" />
        </div>
        <div className="flex justify-center gap-12 mb-20">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-6 w-24 shimmer-bg rounded" />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="h-6 w-48 shimmer-bg rounded" />
                <div className="h-6 w-12 shimmer-bg rounded" />
              </div>
              <div className="h-4 w-full shimmer-bg rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSkeleton() {
  return (
    <section className="py-32 md:py-48 bg-[#0D0D0D] px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="h-4 w-32 shimmer-bg rounded mb-6" />
        <div className="h-12 w-64 shimmer-bg rounded mb-24" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
          {[1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="aspect-[4/3] shimmer-bg rounded" />
              <div className="h-8 w-48 shimmer-bg rounded" />
              <div className="h-16 w-full shimmer-bg rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChefSectionSkeleton() {
  return (
    <section className="py-32 bg-[#0D0D0D] px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="h-4 w-32 shimmer-bg rounded mb-4" />
          <div className="h-16 w-64 shimmer-bg rounded" />
          <div className="h-32 w-full shimmer-bg rounded my-4" />
          <div className="h-12 w-32 shimmer-bg rounded" />
        </div>
        <div className="w-full md:w-1/2 aspect-square md:aspect-[3/4] shimmer-bg rounded" />
      </div>
    </section>
  );
}

export function GallerySkeleton() {
  return (
    <section className="py-32 bg-[#0D0D0D] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 gap-8">
          <div className="flex flex-col gap-4">
            <div className="h-4 w-32 shimmer-bg rounded" />
            <div className="h-10 w-48 shimmer-bg rounded" />
          </div>
          <div className="h-4 w-32 shimmer-bg rounded" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square shimmer-bg rounded" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="py-32 md:py-48 bg-[#0D0D0D] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <div className="h-4 w-32 shimmer-bg rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-6">
              <div className="h-6 w-32 shimmer-bg rounded" />
              <div className="h-24 w-full shimmer-bg rounded" />
              <div className="h-4 w-24 shimmer-bg rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReservationSkeleton() {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="h-4 w-32 shimmer-bg rounded mb-6" />
        <div className="h-16 w-80 shimmer-bg rounded mb-6" />
        <div className="h-10 w-96 shimmer-bg rounded mb-16" />
        
        <div className="w-full bg-[#16161A] p-8 md:p-12 border border-[#26262E] rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="h-12 w-full shimmer-bg rounded" />
            <div className="h-12 w-full shimmer-bg rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="h-12 w-full shimmer-bg rounded" />
            <div className="h-12 w-full shimmer-bg rounded" />
            <div className="h-12 w-full shimmer-bg rounded" />
          </div>
          <div className="h-24 w-full shimmer-bg rounded mb-8" />
          <div className="h-14 w-full shimmer-bg rounded mb-6" />
          <div className="h-14 w-full shimmer-bg rounded" />
        </div>
      </div>
    </section>
  );
}

export function LocationSkeleton() {
  return (
    <section className="py-32 bg-[#0D0D0D] px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3 flex flex-col gap-10 justify-center">
          <div className="h-4 w-40 shimmer-bg rounded mb-4" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="w-6 h-6 shimmer-bg rounded-full" />
              <div className="flex flex-col gap-2 flex-grow">
                <div className="h-6 w-32 shimmer-bg rounded" />
                <div className="h-16 w-full shimmer-bg rounded" />
              </div>
            </div>
          ))}
          <div className="h-32 w-full shimmer-bg rounded mt-4" />
        </div>
        <div className="w-full lg:w-2/3 h-[500px] lg:h-[600px] shimmer-bg rounded" />
      </div>
    </section>
  );
}

export function PremiumCTASkeleton() {
  return (
    <section className="py-48 md:py-64 flex flex-col items-center justify-center bg-[#0D0D0D] px-6">
      <div className="h-24 w-[80%] max-w-4xl shimmer-bg rounded mb-12" />
      <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
        <div className="h-14 w-full sm:w-48 shimmer-bg rounded" />
        <div className="h-14 w-full sm:w-48 shimmer-bg rounded" />
      </div>
    </section>
  );
}

export function InstagramGallerySkeleton() {
  return (
    <section className="py-32 bg-[#0D0D0D] px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-8 h-8 shimmer-bg rounded-full mb-6" />
        <div className="h-10 w-64 shimmer-bg rounded mb-6" />
        <div className="h-4 w-96 shimmer-bg rounded mb-16" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`aspect-square shimmer-bg rounded ${i === 5 ? 'hidden md:block' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
