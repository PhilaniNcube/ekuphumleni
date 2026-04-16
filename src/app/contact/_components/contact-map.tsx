import Container from "@/components/container";

export function ContactMap() {
  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5936773785384!2d25.5006895!3d-33.8227973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7b29c30b7cc679%3A0x85631dbb73f7ce3d!2sEKUPHUMLENI%20JOE%20SLOVO%20COMMUNITY%20PROJECTS!5e0!3m2!1sen!2sza!4v1776360535367!5m2!1sen!2sza"
          className="w-full aspect-video rounded-lg border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ekuphumleni Joe Slovo Community Projects Location"
        />
      </Container>
    </section>
  );
}
