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
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="px-6 py-3 bg-muted rounded-full font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
