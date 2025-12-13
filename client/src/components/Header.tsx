import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoUrl from "@assets/Adits Digital Services Logo_1760635708215.avif";

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/clients", label: "Clients" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ];

  const serviceCategories = [
    {
      category: "Digital Marketing",
      services: [
        { href: "/services/seo", label: "SEO Services" },
        { href: "/services/social-media", label: "Social Media Marketing" },
        { href: "/services/ppc", label: "PPC / Google Ads" },
      ]
    },
    {
      category: "Communication Marketing",
      services: [
        { href: "/services/email-marketing", label: "Email Marketing" },
        { href: "/services/sms-marketing", label: "SMS Marketing" },
        { href: "/services/whatsapp-marketing", label: "WhatsApp Marketing" },
      ]
    },
    {
      category: "Brand & Business",
      services: [
        { href: "/services/branding", label: "Branding Services" },
        { href: "/services/gmb-phone-fix", label: "GMB Phone Fix" },
      ]
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        isScrolled
          ? "shadow-md"
          : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover-elevate active-elevate-2 rounded-md p-2 -ml-2" 
            data-testid="link-home"
          >
            <img src={logoUrl} alt="ADITS Digital" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {/* Home and About */}
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="relative group px-4 py-2"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                <span className={`relative text-sm font-medium transition-all duration-300 ${
                  location === link.href
                    ? "text-primary"
                    : "text-foreground group-hover:text-primary/80"
                }`}>
                  {link.label}
                  {/* Active indicator - animated underline */}
                  {location === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-chart-3 to-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover indicator */}
                  {location !== link.href && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-primary/30 rounded-full transition-all duration-300" />
                  )}
                </span>
                {/* Active background pill */}
                {location === link.href && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="relative group px-4 py-2 flex items-center gap-1"
                data-testid="button-services"
              >
                <span className={`relative text-sm font-medium transition-all duration-300 ${
                  location.startsWith('/services')
                    ? "text-primary"
                    : "text-foreground group-hover:text-primary/80"
                }`}>
                  Services
                  <ChevronDown className={`inline-block ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  {/* Active indicator - animated underline */}
                  {location.startsWith('/services') && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-chart-3 to-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover indicator */}
                  {!location.startsWith('/services') && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-primary/30 rounded-full transition-all duration-300" />
                  )}
                </span>
                {/* Active background pill */}
                {location.startsWith('/services') && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[600px] bg-background border border-border rounded-lg shadow-xl overflow-hidden"
                  >
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {serviceCategories.map((category) => (
                        <div key={category.category}>
                          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            {category.category}
                          </h3>
                          <ul className="space-y-2">
                            {category.services.map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  className={`block px-3 py-2 rounded-md text-sm hover-elevate active-elevate-2 transition-colors ${
                                    location === service.href
                                      ? "bg-primary/10 text-primary"
                                      : "text-foreground hover:text-primary"
                                  }`}
                                  data-testid={`dropdown-${service.label.toLowerCase().replace(/\s/g, '-')}`}
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/30 px-6 py-4 border-t border-border">
                      <Link 
                        href="/services"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        data-testid="link-view-all-services"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Remaining links: Clients, Testimonials, Blog, Contact */}
            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="relative group px-4 py-2"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                <span className={`relative text-sm font-medium transition-all duration-300 ${
                  location === link.href
                    ? "text-primary"
                    : "text-foreground group-hover:text-primary/80"
                }`}>
                  {link.label}
                  {/* Active indicator - animated underline */}
                  {location === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-chart-3 to-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover indicator */}
                  {location !== link.href && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-primary/30 rounded-full transition-all duration-300" />
                  )}
                </span>
                {/* Active background pill */}
                {location === link.href && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <Button size="default" className="font-semibold" data-testid="button-get-free-audit">
                Get Free Audit
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.slice(0, 2).map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className={`relative block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                      location === link.href
                        ? "bg-gradient-to-r from-primary/10 to-chart-3/10 text-primary shadow-sm border-l-4 border-primary"
                        : "text-foreground hover-elevate active-elevate-2"
                    }`}
                    data-testid={`mobile-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                    {location === link.href && (
                      <span className="ml-2 inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    )}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                    location.startsWith('/services')
                      ? "bg-gradient-to-r from-primary/10 to-chart-3/10 text-primary shadow-sm border-l-4 border-primary"
                      : "text-foreground hover-elevate active-elevate-2"
                  }`}
                  data-testid="mobile-button-services"
                >
                  <span className="flex items-center">
                    Services
                    {location.startsWith('/services') && (
                      <span className="ml-2 inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    )}
                  </span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 space-y-1 pl-4"
                    >
                      {serviceCategories.map((category) => (
                        <div key={category.category} className="mb-3">
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4">
                            {category.category}
                          </h4>
                          {category.services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`block px-4 py-2 rounded-md text-sm hover-elevate active-elevate-2 ${
                                location === service.href
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground"
                              }`}
                              data-testid={`mobile-dropdown-${service.label.toLowerCase().replace(/\s/g, '-')}`}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link 
                        href="/services"
                        className="block px-4 py-2 text-sm font-medium text-primary hover:text-primary/80"
                        data-testid="mobile-link-view-all-services"
                      >
                        View All Services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.slice(2).map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 3) * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className={`relative block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                      location === link.href
                        ? "bg-gradient-to-r from-primary/10 to-chart-3/10 text-primary shadow-sm border-l-4 border-primary"
                        : "text-foreground hover-elevate active-elevate-2"
                    }`}
                    data-testid={`mobile-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                    {location === link.href && (
                      <span className="ml-2 inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link href="/contact">
                  <Button
                    className="w-full font-semibold"
                    data-testid="button-mobile-get-free-audit"
                  >
                    Get Free Audit
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
