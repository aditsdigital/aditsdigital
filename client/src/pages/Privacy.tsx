import Hero from "@/components/Hero";

export default function Privacy() {
  return (
    <div>
      <Hero
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
        showCta={false}
        backgroundGradient="from-primary/80 via-chart-3 to-primary"
      />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none" data-testid="privacy-content">
            <p className="text-muted-foreground mb-8">
              <strong>Last updated:</strong> March 15, 2024
            </p>

            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We collect information that you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when you contact us or use our services. We also automatically collect certain information about your device when you visit our website, including your IP address, browser type, and operating system.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you about our services, to send you marketing communications (with your consent), and to protect the security and integrity of our website and services. We may also use your information to comply with legal obligations and to enforce our terms and policies.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf, such as hosting providers, analytics providers, and marketing platforms. We may also disclose your information if required by law or to protect our rights, property, or safety.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to collect information about your browsing activities on our website. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have the right to access, update, or delete your personal information. You can also opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails. If you have any questions or concerns about your privacy, please contact us at privacy@aditsdigital.com.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our services are not directed to children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <br />
              <strong>ADITS Digital</strong>
              <br />
              123 Business Avenue, Suite 100
              <br />
              New York, NY 10001
              <br />
              Email: privacy@aditsdigital.com
              <br />
              Phone: +1 (234) 567-8900
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
