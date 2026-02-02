"use client";

const partners = [
  { name: "SoundWave", logo: "SOUNDWAVE" },
  { name: "BeatCloud", logo: "BEATCLOUD" },
  { name: "Melodix", logo: "MELODIX" },
  { name: "AudioPro", logo: "AUDIOPRO" },
  { name: "TuneHub", logo: "TUNEHUB" },
];

export function PartnersSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by leading music platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 stagger-children">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-all duration-300 cursor-default hover:scale-110 transform opacity-0 animate-fade-in-up"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
