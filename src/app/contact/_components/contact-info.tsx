import Container from "@/components/container";
import { Mail, MapPin, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Chairperson</h3>
                <p className="text-muted-foreground">Ayanda Xalabile</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:ayandaxalabile44@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  ayandaxalabile44@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Physical Address</h3>
                  <p className="text-muted-foreground text-sm">
                    9956 Sthweti Street<br />
                    Joe Slovo<br />
                    Despatch<br />
                    6220
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Postal Address</h3>
                  <p className="text-muted-foreground text-sm">
                    25 Rulwa Street<br />
                    Joe Slovo<br />
                    Despatch<br />
                    6220
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
