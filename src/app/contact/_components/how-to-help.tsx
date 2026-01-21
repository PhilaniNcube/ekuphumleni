import Container from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, HandHeart, Users, Share2 } from "lucide-react";

export function HowToHelp() {
  return (
    <section className="py-16 bg-brand-light-green">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark-green">How You Can Help</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-brand-cream">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-full bg-brand-light-green/20 text-brand-dark-green">
                <Heart className="h-6 w-6" />
              </div>
              <CardTitle>1. Donations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-brand-dark-green">Monetary Donations</h4>
                <p className="text-sm text-brand-grey">
                  As a registered NPO and PBO with a tax clearance certificate, your financial contributions are crucial and tax-deductible. We are currently experiencing a shortage of resources.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-brand-dark-green">In-Kind Donations</h4>
                <p className="text-sm text-brand-grey mb-2">We are in need of:</p>
                <ul className="list-disc list-inside text-sm text-brand-grey space-y-1">
                  <li>Food (for soup kitchen)</li>
                  <li>Chairs, tables, dishes, pots, plates, cutlery</li>
                  <li>Sewing machines and fabric</li>
                  <li>Netball kit, poles, balls</li>
                  <li>Instruments (for brass band)</li>
                  <li>Gardening tools and seeds</li>
                  <li>Refrigerators, pots, basins, brooms, mops, preschool desks and chairs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-brand-cream">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-full bg-brand-light-green/20 text-brand-dark-green">
                  <HandHeart className="h-6 w-6" />
                </div>
                <CardTitle className="text-brand-dark-green">2. Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-grey">
                  We welcome volunteers who are passionate about community upliftment. Get involved in our various projects, from gardening to assisting in the ECD centre.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-cream">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-full bg-brand-light-green/20 text-brand-dark-green">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-brand-dark-green">3. Partnerships & Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-grey">
                  We are always willing to work closely with other organizations that share our objectives. If your organization is interested in collaborating, please reach out.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-cream">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-full bg-brand-light-green/20 text-brand-dark-green">
                  <Share2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-brand-dark-green">4. Spread the Word</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-grey">
                  Share our mission and projects with your network. Follow us on social media and help us reach more supporters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
