import Container from "@/components/container";
import { MapPin, Mail } from "lucide-react";

export function ContactMap() {
  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="p-3 rounded-full bg-brand-light-green text-brand-white h-fit">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Physical Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  9956 Sthweti Street<br />
                  Joe Slovo<br />
                  Despatch<br />
                  6220
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-full bg-brand-light-green text-brand-white h-fit">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Postal Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  25 Rulwa Street<br />
                  Joe Slovo<br />
                  Despatch<br />
                  6220
                </p>
              </div>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5936773785384!2d25.5006895!3d-33.8227973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7b29c30b7cc679%3A0x85631dbb73f7ce3d!2sEKUPHUMLENI%20JOE%20SLOVO%20COMMUNITY%20PROJECTS!5e0!3m2!1sen!2sza!4v1776360535367!5m2!1sen!2sza"
            className="w-full aspect-video rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ekuphumleni Joe Slovo Community Projects Location"
          />
        </div>
      </Container>
    </section>
  );
}
