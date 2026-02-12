import Container from "@/components/container";
import { Mail, MapPin, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <section className="py-16 bg-brand-cream">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-brand-light-green">
            <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-brand-light-cream text-brand-orange-yellow">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-brand-white">Chairperson</h3>
                <p className="text-brand-white">Ayanda Xalabile</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-brand-light-green">
            <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-brand-light-cream text-brand-orange-yellow">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-brand-white">Email</h3>
                <a href="mailto:ayandaxalabile44@gmail.com" className="text-brand-white hover:text-brand-light-green transition-colors">
                  ayandaxalabile44@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-brand-light-green">
            <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-brand-light-cream text-brand-orange-yellow  ">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1 text-brand-white">Location</h3>
                  <p className="text-brand-white text-sm">
                    Gqeberha / Port 
                  </p>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
