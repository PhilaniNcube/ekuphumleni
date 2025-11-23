import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  impact: string;
  beneficiaries?: string;
}

const services: Service[] = [
  {
    title: "Vegetable Garden Project",
    description:
      "From transforming a dumping site into a thriving garden, we cultivate fresh, organic vegetables. This project not only ensures food security for our community but also provides practical skills in sustainable farming. Our beneficiaries include families, soup kitchens, and local markets.",
    impact:
      "Alleviates poverty, improves nutrition, and fosters a sense of community ownership. We have successfully implemented water irrigation systems and secured the garden thanks to donations.",
  },
  {
    title: "Soup Kitchen & Nutrition Program",
    description:
      "We prepare and distribute nutritious meals, primarily to the elderly, the sick, and school-going children. This initiative directly addresses hunger and ensures vulnerable members of our community receive essential nourishment. We aspire to develop this into a full community nutrition development center.",
    impact:
      "Provides vital food support and improves the health and well-being of beneficiaries. In 2021, Hollywood Bets donated refrigerators, pots, and other essentials for our soup kitchen.",
    beneficiaries:
      "29.6% Children (9 months-14 years), 37.9% Youth (15-35 years), 32.5% Adults (36 years+).",
  },
  {
    title: "Early Childhood Development (ECD) Centre",
    description:
      "Our ECD center provides a safe, stimulating, and nurturing environment for learning and play, especially for children from impoverished backgrounds. We focus on their development and future success, offering foundational education and care while parents/caregivers are at work.",
    impact:
      "Supports early childhood development, provides crucial aftercare, and ensures children are prepared for primary school.",
  },
  {
    title: "Skills Development Programs",
    description:
      "We empower community members with valuable skills to transition from unemployment to entrepreneurship. Our programs include training in sewing, general work, and recycling. We recently sent 10 young people to Raymond Mhlaba Skills Development Centre for training in baking and hospitality.",
    impact:
      "Creates economic opportunities, fosters self-reliance, and builds a skilled workforce within the community.",
  },
  {
    title: "Sports & Culture (Brass Band & Netball Team)",
    description:
      "To deter youth from social ills, we've formed a brass band and a netball team. These activities provide a positive outlet for energy, foster teamwork, discipline, and artistic expression.",
    impact:
      "Promotes physical activity, creativity, and keeps youth engaged in constructive community activities.",
  },
  {
    title: "Community Caregivers & Health Promotion",
    description:
      "Our community caregivers provide essential services, including tracing defaulters for clinics and assisting with health promotions. We aim to provide further training to improve their skills and service.",
    impact:
      "Improves community health outcomes and supports local healthcare initiatives.",
  },
  {
    title: "GBV (Gender-Based Violence) Awareness",
    description:
      "We host events and initiatives dedicated to raising awareness about gender-based violence. These events bring together community leaders, social development experts, and local organizations to educate and support our community.",
    impact:
      "Educates the community, provides resources, and fosters a safer environment for women and children.",
  },
];

export function ServicesList() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1 text-primary">Description</h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-1 text-primary">Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    {service.impact}
                  </p>
                </div>

                {service.beneficiaries && (
                  <div className="mt-auto pt-4 border-t">
                    <h4 className="font-semibold text-sm mb-1 text-primary">Beneficiaries</h4>
                    <p className="text-xs text-muted-foreground font-medium">
                      {service.beneficiaries}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
