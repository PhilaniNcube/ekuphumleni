import Container from "@/components/container";

const partners = [
  "SAPS",
  "Local Clinic",
  "Social Development",
  "Department of Labour",
  "National Treasury",
  "Love Story",
  "ABC Trust",
  "Hollywood Bets",
  "Food Forward SA",
  "Do4SA",
  "Ezethu Trust",
  "IDT Head office"
];

export function Partners() {
  return (
    <section className="py-16 bg-brand-cream">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark-green">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="px-6 py-3 bg-brand-light-green rounded-full font-medium text-brand-cream hover:bg-brand-orange-yellow hover:text-brand-dark-green transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
