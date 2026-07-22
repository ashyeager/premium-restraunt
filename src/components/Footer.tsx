export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 px-6 border-t border-[#F4F1EB]/10 text-[#F4F1EB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
        
        <div className="md:col-span-4">
          <h2 className="font-serif text-4xl mb-6">Maison Noir</h2>
          <p className="text-sm font-light opacity-60 leading-relaxed max-w-sm mb-8">
            Redefining luxury dining in the heart of the Middle East. A symphony of minimalist elegance and profound flavor.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest text-[10px]">Instagram</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest text-[10px]">Facebook</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest text-[10px]">LinkedIn</a>
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-6 flex flex-col gap-4 text-sm font-light">
          <h3 className="text-xs font-sans tracking-[0.2em] uppercase opacity-40 mb-4">Explore</h3>
          <a href="#philosophy" className="opacity-80 hover:opacity-100 transition-opacity">Philosophy</a>
          <a href="#menu" className="opacity-80 hover:opacity-100 transition-opacity">Menu</a>
          <a href="#reservations" className="opacity-80 hover:opacity-100 transition-opacity">Reservations</a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Private Events</a>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4 text-sm font-light">
          <h3 className="text-xs font-sans tracking-[0.2em] uppercase opacity-40 mb-4">Contact</h3>
          <p className="opacity-80">14 Al Shatti St.</p>
          <p className="opacity-80 mb-4">Muscat, Oman</p>
          <a href="mailto:info@maisonnoir.om" className="opacity-80 hover:opacity-100 transition-opacity">info@maisonnoir.om</a>
          <p className="opacity-80">+968 24 123 456</p>
        </div>

        <div className="md:col-span-3 md:col-start-10">
          <h3 className="text-xs font-sans tracking-[0.2em] uppercase opacity-40 mb-4">Newsletter</h3>
          <p className="text-sm font-light opacity-60 mb-6 leading-relaxed">
            Subscribe for exclusive culinary invitations and seasonal menu updates.
          </p>
          <form className="flex border-b border-[#F4F1EB]/30 pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent w-full text-sm font-light focus:outline-none placeholder:text-[#F4F1EB]/30"
            />
            <button type="button" className="text-xs tracking-[0.2em] uppercase opacity-80 hover:opacity-100 transition-opacity pl-4">
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest font-light opacity-40 pt-8 border-t border-[#F4F1EB]/10 uppercase">
        <p>&copy; {new Date().getFullYear()} Maison Noir. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
