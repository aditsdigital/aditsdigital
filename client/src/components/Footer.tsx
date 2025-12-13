import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import logoUrl from "@assets/Adits Digital Services Logo_1760635708215.avif";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
  ];

  const services = [
    { href: "/services/seo", label: "SEO Services" },
    { href: "/services/social-media", label: "Social Media Marketing" },
    { href: "/services/ppc", label: "PPC / Google Ads" },
    { href: "/services/email-marketing", label: "Email Marketing" },
  ];

  const legal = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-background/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '-10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-background/5 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '-10%', right: '10%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-16 border-b border-background/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Stay Updated with Marketing Insights</h3>
            <p className="text-background/80 mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest digital marketing tips, trends, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background/10 border-background/30 text-background placeholder:text-background/50 focus-visible:ring-background/50"
                data-testid="input-newsletter-email"
              />
              <Button variant="secondary" className="font-semibold" data-testid="button-newsletter-subscribe">
                <Send className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content with Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Left Section - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <img src={logoUrl} alt="ADITS Digital" className="h-16 w-auto brightness-0 invert" />
            <p className="text-background/80 text-sm leading-relaxed">
              Transform your digital presence with expert marketing solutions. We help businesses grow through innovative SEO, social media, and branding strategies.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-3 rounded-md bg-background/10" data-testid="link-facebook" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-3 rounded-md bg-background/10" data-testid="link-twitter" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-3 rounded-md bg-background/10" data-testid="link-instagram" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-3 rounded-md bg-background/10" data-testid="link-linkedin" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Middle Section - Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-background/50"></span>
              </h3>
              <ul className="space-y-3 mt-8">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-background/80 hover:text-background transition-colors hover-elevate active-elevate-2 inline-block p-1 rounded" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-background/50"></span>
              </h3>
              <ul className="space-y-3 mt-8">
                {services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-background/80 hover:text-background transition-colors hover-elevate active-elevate-2 inline-block p-1 rounded" data-testid={`footer-service-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Section - Map & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Visit Us
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-background/50"></span>
              </h3>
              <div className="mt-8 rounded-lg overflow-hidden shadow-2xl h-56 border-2 border-background/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682577107878!2d-73.98823492346698!3d40.74844097138801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ADITS Digital Location"
                  data-testid="footer-map-embed"
                ></iframe>
              </div>
            </div> */}

            <div className="space-y-4 bg-background/5 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold text-base mb-4">Contact Information</h4>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-background/80" />
                <span className="text-background/80 text-sm" data-testid="text-address">123 Business Avenue, Suite 100, New York, NY 10001</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-background/80" />
                <a href="tel:+1234567890" className="text-background/80 hover:text-background transition-colors text-sm" data-testid="link-phone">+1 (234) 567-8900</a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-background/80" />
                <a href="mailto:info@aditsdigital.com" className="text-background/80 hover:text-background transition-colors text-sm" data-testid="link-email">info@aditsdigital.com</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-background/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm" data-testid="text-copyright">
              © {new Date().getFullYear()} ADITS Digital. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {legal.map((link) => (
                <Link key={link.href} href={link.href} className="text-background/70 hover:text-background text-sm transition-colors" data-testid={`footer-legal-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
