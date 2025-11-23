import Container from "@/components/container";

export function TeamGovernance() {
  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">Our Team & Governance</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none text-center">
            <p className="text-lg text-muted-foreground">
              Led by our dedicated Chairperson, <strong>Ayanda Xalabile</strong>, our organization is composed of 90% women and 10% men.
            </p>
            <p className="text-muted-foreground">
              We are a registered NPO (184-776) and PBO, with a tax clearance certificate and BBBEE certification. Our operations are fully audited, ensuring transparency and accountability. Our volunteers are registered with the Department of Labour for UIF and COIDA, and we are also registered with National Treasury.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
