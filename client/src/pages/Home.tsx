import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCounter from "@/components/StatCounter";
import ClientCarousel from "@/components/ClientCarousel";
import { Search, Share2, MousePointerClick, Mail, MessageSquare, MessageCircle, Palette, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Boost your search rankings and drive organic traffic with our proven SEO strategies and technical optimization.",
      link: "/services/seo",
      iconColor: "text-emerald-500",
      iconBgColor: "bg-emerald-500/10",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage audiences across all major social platforms with data-driven campaigns.",
      link: "/services/social-media",
      iconColor: "text-blue-500",
      iconBgColor: "bg-blue-500/10",
    },
    {
      icon: MousePointerClick,
      title: "PPC / Google Ads",
      description: "Maximize ROI with targeted paid advertising campaigns that convert clicks into customers efficiently.",
      link: "/services/ppc",
      iconColor: "text-orange-500",
      iconBgColor: "bg-orange-500/10",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and drive sales with personalized email campaigns that deliver measurable results.",
      link: "/services/email-marketing",
      iconColor: "text-red-500",
      iconBgColor: "bg-red-500/10",
    },
    {
      icon: MessageSquare,
      title: "SMS Marketing",
      description: "Reach customers instantly with targeted SMS campaigns that drive engagement and conversions.",
      link: "/services/sms-marketing",
      iconColor: "text-purple-500",
      iconBgColor: "bg-purple-500/10",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing",
      description: "Connect with your audience on their preferred platform with strategic WhatsApp business messaging.",
      link: "/services/whatsapp-marketing",
      iconColor: "text-green-500",
      iconBgColor: "bg-green-500/10",
    },
  ];

  const testimonials = [
    {
      quote: "ADITS Digital transformed our online presence completely. Our organic traffic increased by 300% in just 6 months!",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp Inc",
    },
    {
      quote: "The team's expertise in PPC advertising helped us achieve a 250% ROI. Highly recommended for any business!",
      author: "Michael Chen",
      position: "CEO",
      company: "InnovateLabs",
    },
    {
      quote: "Professional, results-driven, and always ahead of the curve. ADITS Digital is our trusted digital partner.",
      author: "Emily Rodriguez",
      position: "Founder",
      company: "StartupXYZ",
    },
  ];

  return (
    <div>
      <Hero
        title="Innovate. Scale. Succeed."
        highlightText="Your Digital Growth Partner"
        subtitle="Transform your business with cutting-edge digital marketing solutions that drive real results, boost ROI, and accelerate growth across all channels."
        ctaText="Get Free Consultation"
        ctaLink="/contact"
        secondaryCtaText="Explore Services"
        secondaryCtaLink="/services"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-heading">
              Why Choose ADITS Digital?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're not just another marketing agency. We're your growth partner, combining cutting-edge strategies with proven results to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <StatCounter end={10} suffix="+" label="Years Experience" />
            <StatCounter end={500} suffix="+" label="Happy Clients" />
            <StatCounter end={1200} suffix="+" label="Projects Completed" />
            <StatCounter end={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-services-heading">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions tailored to your business goals and designed to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={index * 0.1}
                iconColor={service.iconColor}
                iconBgColor={service.iconBgColor}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="font-semibold group shadow-md hover:shadow-lg transition-all duration-300" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-clients-heading">
              Trusted By Leading Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful businesses that trust ADITS Digital for their digital marketing needs.
            </p>
          </div>

          <ClientCarousel />
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-testimonials-heading">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button size="lg" variant="outline" className="font-semibold shadow-sm hover:shadow-md transition-all duration-300" data-testid="button-view-all-testimonials">
                View All Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-chart-3 text-primary-foreground overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Circles */}
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-primary-foreground/5 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: '10%', left: '5%' }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ bottom: '10%', right: '5%' }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-chart-3/20 blur-2xl"
            animate={{
              x: [0, -60, 0],
              y: [0, 80, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: '30%', right: '15%' }}
          />

          {/* Animated Dots/Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary-foreground/30"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              style={{
                left: `${(i * 6.5) % 100}%`,
                top: `${20 + (i * 5) % 60}%`,
              }}
            />
          ))}

          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-chart-3/20 to-primary-foreground/10 blur-2xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />

          {/* Pulsing Rings */}
          <motion.div
            className="absolute w-96 h-96 rounded-full border-2 border-primary-foreground/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full border-2 border-primary-foreground/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2,
            }}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            data-testid="text-cta-heading"
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-10 text-primary-foreground/90 leading-relaxed"
          >
            Get a free digital marketing audit and discover how we can help you achieve your business goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-cta-contact">
                Get Your Free Audit Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
