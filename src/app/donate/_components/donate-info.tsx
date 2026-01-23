import Container from "@/components/container";
import { Heart, Users, Sprout, Baby } from "lucide-react";

const impactAreas = [
  {
    icon: Baby,
    title: "Creche & Early Learning",
    description: "Support early childhood education and care for vulnerable children",
  },
  {
    icon: Sprout,
    title: "Community Garden",
    description: "Help us grow fresh, nutritious food for families in need",
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Enable skill development and empowerment initiatives",
  },
  {
    icon: Heart,
    title: "General Support",
    description: "Contribute to our overall mission and operations",
  },
];

export function DonateInfo() {
  return (
    <section className="py-16 bg-brand-cream">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark-green">
            Where Your Donation Goes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-orange-yellow/20 flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-brand-dark-green" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-brand-dark-green">{area.title}</h3>
                  <p className="text-brand-grey">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
