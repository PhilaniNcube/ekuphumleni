import Container from "@/components/container";

export function DonateHero() {
  return (
    <section className="py-16 bg-brand-cream">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-brand-dark-green">
            Make a Difference Today
          </h1>
          <p className="text-xl text-muted-foreground">
            Your generous donation helps us continue providing essential services to the Joe Slovo community.
            Together, we can create lasting change.
          </p>
        </div>
      </Container>
    </section>
  );
}
