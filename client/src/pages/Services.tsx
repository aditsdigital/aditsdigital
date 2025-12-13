import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Search, Share2, MousePointerClick, Mail, MessageSquare, MessageCircle, Palette, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Services() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Comprehensive search engine optimization to improve your rankings, increase organic traffic, and dominate search results in your industry.",
      link: "/services/seo",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns across all major platforms to build brand awareness, engage audiences, and drive conversions.",
      link: "/services/social-media",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      icon: MousePointerClick,
      title: "PPC / Google Ads",
      description: "Data-driven paid advertising campaigns that maximize ROI through targeted ads, strategic bidding, and continuous optimization.",
      link: "/services/ppc",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Personalized email campaigns that nurture leads, retain customers, and drive revenue through strategic automation and segmentation.",
      link: "/services/email-marketing",
      gradient: "from-red-500 via-rose-500 to-pink-500",
      glowColor: "rgba(244, 63, 94, 0.4)",
    },
    {
      icon: MessageSquare,
      title: "SMS Marketing",
      description: "Direct mobile messaging campaigns that reach customers instantly with time-sensitive offers and important updates.",
      link: "/services/sms-marketing",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      glowColor: "rgba(139, 92, 246, 0.4)",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing",
      description: "Engage customers on WhatsApp with personalized messages, automated responses, and rich media content for higher engagement.",
      link: "/services/whatsapp-marketing",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      icon: Palette,
      title: "Branding Services",
      description: "Complete branding solutions including logo design, brand identity, messaging, and visual guidelines to establish your unique market presence.",
      link: "/services/branding",
      gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      icon: MapPin,
      title: "GMB Phone Fix",
      description: "Expert solutions to fix Google My Business phone number verification issues and get your business listing approved quickly.",
      link: "/services/gmb-phone-fix",
      gradient: "from-rose-500 via-red-500 to-orange-500",
      glowColor: "rgba(239, 68, 68, 0.4)",
    },
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Discovery", 
      description: "Understanding your business, goals, and target audience",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    { 
      step: "02", 
      title: "Strategy", 
      description: "Developing a customized digital marketing roadmap",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    { 
      step: "03", 
      title: "Execution", 
      description: "Implementing campaigns with precision and excellence",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
    { 
      step: "04", 
      title: "Optimization", 
      description: "Continuous monitoring and improvement for maximum ROI",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
  ];

  return (
    <div>
      <Hero
        title="Our Digital Marketing Services"
        subtitle="Comprehensive solutions designed to accelerate your growth, boost your online presence, and deliver measurable results."
        ctaText="Get Started"
        ctaLink="/contact"
        variant="services"
      />

      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-chart-3/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-chart-3/10 to-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-services-heading">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From SEO to social media, we provide end-to-end digital marketing services tailored to your unique business needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={index * 0.1}
                gradient={service.gradient}
                glowColor={service.glowColor}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-chart-3/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-process-heading">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure your success at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                className="group"
              >
                <Card 
                  className="relative p-8 h-full text-center transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-transparent"
                  data-testid={`process-step-${item.step}`}
                  style={{
                    transform: hoveredStep === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredStep === index 
                      ? `0 20px 60px -15px ${item.glowColor}, 0 0 0 1px ${item.glowColor}`
                      : '0 0 0 0 transparent',
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${item.glowColor}, transparent)`,
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`text-5xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent mb-4`}
                      animate={{
                        scale: hoveredStep === index ? 1.1 : 1,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </div>

                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
