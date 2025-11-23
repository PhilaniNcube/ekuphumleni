import Container from "@/components/container";

export function AboutHero() {
  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Story: Building a Stronger Ekuphumleni Joe Slovo
          </h1>
          <p className="text-xl text-muted-foreground">
            Together, we are cultivating hope, empowering lives, and nurturing our community's future.
          </p>
        </div>
      </Container>
    </section>
  );
}
