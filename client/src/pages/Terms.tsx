import Hero from "@/components/Hero";

export default function Terms() {
  return (
    <div>
      <Hero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
        showCta={false}
        backgroundGradient="from-chart-3 via-primary/80 to-orange"
      />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none" data-testid="terms-content">
            <p className="text-muted-foreground mb-8">
              <strong>Last updated:</strong> March 15, 2024
            </p>

            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              By accessing and using the services provided by ADITS Digital, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you should not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              ADITS Digital provides digital marketing services including but not limited to SEO, social media marketing, PPC advertising, email marketing, SMS marketing, WhatsApp marketing, and branding services. The specific services provided to you will be outlined in our service agreement or statement of work.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You are responsible for providing accurate information, timely feedback, and necessary access to systems and accounts required for service delivery. You must also ensure that all content and materials you provide comply with applicable laws and do not infringe on third-party rights. Failure to meet these responsibilities may affect service delivery and results.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Payment terms will be specified in your service agreement. Unless otherwise stated, invoices are due within 30 days of receipt. Late payments may be subject to interest charges and may result in suspension of services. All fees are non-refundable unless otherwise specified in your service agreement.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              All materials, content, and deliverables created by ADITS Digital remain our intellectual property until full payment is received. Upon full payment, you will receive a license to use the deliverables for their intended purpose. You retain ownership of any content, trademarks, or materials you provide to us.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our engagement. This obligation survives termination of our services and continues for a period of three years thereafter.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Service Guarantees and Limitations</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              While we strive to deliver excellent results, digital marketing outcomes depend on many factors beyond our control. We do not guarantee specific results, rankings, or ROI. Our services are provided "as is" and we disclaim all warranties, express or implied, to the fullest extent permitted by law.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              To the maximum extent permitted by law, ADITS Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for services in the three months preceding the claim.
            </p>

            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Either party may terminate services with 30 days' written notice, unless otherwise specified in your service agreement. Immediate termination may occur in cases of material breach, non-payment, or violation of these terms. Upon termination, you must pay for all services rendered through the termination date.
            </p>

            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of New York.
            </p>

            <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at:
              <br />
              <br />
              <strong>ADITS Digital</strong>
              <br />
              123 Business Avenue, Suite 100
              <br />
              New York, NY 10001
              <br />
              Email: legal@aditsdigital.com
              <br />
              Phone: +1 (234) 567-8900
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
