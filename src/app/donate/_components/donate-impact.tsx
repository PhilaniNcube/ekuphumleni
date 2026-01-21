import Container from "@/components/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const impactStories = [
  {
    amount: "R500",
    impact: "Provides nutritious meals for 10 children for a week at our creche",
  },
  {
    amount: "R1,000",
    impact: "Supplies educational materials and toys for a month",
  },
  {
    amount: "R2,500",
    impact: "Maintains the community garden for a month, feeding 50+ families",
  },
  {
    amount: "R5,000",
    impact: "Funds a skills development workshop for 20 community members",
  },
];

export function DonateImpact() {
  return (
    <section className="py-16 bg-brand-cream">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-brand-dark-green">
            Your Impact in Action
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every contribution makes a real difference. Here&apos;s how your donation can help:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactStories.map((story, index) => (
              <Card key={index} className="border-2 border-brand-olive-green bg-brand-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-dark-green">
                    {story.amount}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-brand-grey">
                    {story.impact}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-brand-orange-yellow/10 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-4 text-brand-dark-green">
              Other Ways to Give
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div>
                <h4 className="font-bold mb-2 text-brand-dark-green">Bank Transfer</h4>
                <p className="text-brand-grey">
                  Contact us for our banking details to make a direct deposit.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-brand-dark-green">In-Kind Donations</h4>
                <p className="text-brand-grey">
                  We also accept donations of food, educational materials, garden supplies, and other resources.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-brand-dark-green">Corporate Partnerships</h4>
                <p className="text-brand-grey">
                  Interested in a long-term partnership? We&apos;d love to discuss how your organization can support our mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
