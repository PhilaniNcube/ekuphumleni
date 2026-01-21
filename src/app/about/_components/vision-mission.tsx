import Container from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function VisionMission() {
  return (
    <section className="py-16 bg-brand-cream">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-brand-dark-green border-brand-olive-green">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-cream">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-cream">
                To create a self-sufficient, empowered, and healthy community where every individual has the opportunity to thrive, free from the grips of poverty, crime, and social disadvantage.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-brand-dark-green border-brand-olive-green">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-cream">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-cream">
                To uplift the Ekuphumleni Joe Slovo community by providing sustainable solutions for food security, skill development, early childhood education, health awareness, and social support, fostering an environment of moral values, growth, and long-term success.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
