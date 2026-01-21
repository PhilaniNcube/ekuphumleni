import Container from "@/components/container";
import { CheckCircle2 } from "lucide-react";

const objectives = [
  {
    title: "Regenerate Moral Values",
    description: "Educate youth on life values, and the dangers of drug and alcohol abuse."
  },
  {
    title: "Address Health Crises",
    description: "Combat STDs/HIV & AIDS and other communicable diseases."
  },
  {
    title: "Food Security",
    description: "Provide nutritious soup kitchens and establish vegetable gardens."
  },
  {
    title: "Community Collaboration",
    description: "Partner with organizations sharing similar objectives."
  },
  {
    title: "Land Compliance",
    description: "Cooperate with the government on land use and compliance."
  },
  {
    title: "Educational Services",
    description: "Offer essential educational services to children, including primary school preparation and aftercare."
  },
  {
    title: "Safe Environment",
    description: "Ensure a safe and nurturing learning and play environment."
  },
  {
    title: "Promote Children's Rights",
    description: "Advocate for and protect the rights of children."
  },
  {
    title: "Skill Development",
    description: "Implement programs in sewing, general work, and recycling to foster entrepreneurship."
  },
  {
    title: "Health Promotions",
    description: "Train community caregivers to assist with health tracing and promotions."
  }
];

export function Objectives() {
  return (
    <section className="py-16 bg-brand-cream">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark-green">Our Objectives</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {objectives.map((obj, index) => (
            <div key={index} className="flex gap-4 p-4 rounded-lg bg-brand-light-green shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-brand-cream shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-brand-cream">{obj.title}</h3>
                <p className="text-sm text-brand-cream">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
