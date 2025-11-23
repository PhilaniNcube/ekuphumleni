import Container from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function VisionMission() {
  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create a self-sufficient, empowered, and healthy community where every individual has the opportunity to thrive, free from the grips of poverty, crime, and social disadvantage.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To uplift the Ekuphumleni Joe Slovo community by providing sustainable solutions for food security, skill development, early childhood education, health awareness, and social support, fostering an environment of moral values, growth, and long-term success.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
