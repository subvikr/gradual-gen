export function Clients() {
  const clients = [
    {
      name: "KÜHL",
      logo: "/clients/kuhl.png",
      website: "https://www.kuhl.com/"
    },
    {
      name: "Colored Organics",
      logo: "/clients/colored-organics.svg",
      website: "https://coloredorganics.com/"
    },
    {
      name: "Cyrillus",
      logo: "/clients/cyrillus.png",
      website: "https://cyrillus.com/en"
    },
    {
      name: "Erika",
      logo: "/clients/erika.png",
      website: "https://www.shop-erika.com/"
    },
    {
      name: "Bellerose",
      logo: "/clients/bellerose.svg",
      website: "https://bellerose.com/"
    },
    {
      name: "Elwood Clothing",
      logo: "/clients/elwood.png",
      website: "https://elwoodclothing.com/"
    },
    {
      name: "Peacocks",
      logo: "/clients/peacocks.svg",
      website: "https://www.peacocks.co.uk/"
    },
    {
      name: "Dunnes Stores",
      logo: "/clients/dunnes.png",
      website: "https://www.dunnesstores.com/",
      placeholder: true
    },
    {
      name: "Quiksilver",
      logo: "/clients/quiksilver.png",
      website: "https://www.quiksilver.com/",
      placeholder: true
    },
    {
      name: "Sam's Club",
      logo: "/clients/samsclub.png",
      website: "https://www.samsclub.com/",
      placeholder: true
    }
  ];

  return (
    <section id="clients" className="min-h-screen bg-black py-20 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-secondary text-lg md:text-xl max-w-3xl mx-auto">
            We're proud to partner with renowned fashion and retail brands worldwide, delivering quality knitwear that meets their exacting standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-400/50 hover:bg-white/10 transition-all group"
            >
              {client.placeholder ? (
                <div className="text-white/60 text-center font-semibold text-sm">
                  {client.name}
                </div>
              ) : (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-auto max-h-16 object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-secondary text-base">
            And many more brands trust Capital Knit for their knitwear manufacturing needs
          </p>
        </div>
      </div>
    </section>
  );
}
