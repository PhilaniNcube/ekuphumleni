import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="py-16 bg-brand-dark-green text-brand-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-brand-white">Ready to Make a Difference?</h2>
          <p className="text-xl opacity-90 text-brand-white">
            Contact us today to learn more about how you can contribute to fighting poverty, crime, and community upliftment in Joe Slovo.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="mailto:ayandaxalabile44@gmail.com">
              Get in Touch Now
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
