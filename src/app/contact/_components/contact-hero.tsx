import Container from "@/components/container";

export function ContactHero() {
  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get In Touch: Partner with Ekuphumleni Joe Slovo Community Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            Your support makes a real difference in the lives of our community members.
          </p>
        </div>
      </Container>
    </section>
  );
}
