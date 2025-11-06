export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Corner glow - top left */}
      <div className="fixed top-0 left-0 w-1/4 h-1/4 pointer-events-none z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-start/10 via-gold-end/5 to-transparent blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-4 flex flex-col items-center pt-20 md:pt-0">
        {/* Centered Favicon - Mobile/Tablet only */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="md:hidden mb-2 cursor-pointer"
        >
          <img src="/logo.png" alt="Capital Knit Logo" className="w-[225px] h-[225px]" />
        </a>

        <h1 className="font-heading tracking-tight uppercase leading-[2.625] scale-y-125">
          <span className="text-[2.5rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[6.75rem] lg:text-[9rem] xl:text-[10.125rem] text-white whitespace-nowrap">CAPITAL</span>
          <span className="text-[2.5rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[6.75rem] lg:text-[9rem] xl:text-[10.125rem] text-secondary whitespace-nowrap">KNIT</span>
        </h1>

        {/* Tagline - Mobile/Tablet only */}
        <p className="md:hidden mt-4 text-gray-400 text-sm sm:text-base italic">
          A Legacy of Resilience and Trust
        </p>
      </div>
    </section>
  );
}
