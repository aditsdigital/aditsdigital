import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Palette, Sparkles, Target, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Branding() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    "Unique and memorable brand identity",
    "Increased brand recognition and recall",
    "Competitive market differentiation",
    "Consistent visual communication",
    "Enhanced customer trust and loyalty",
    "Long-term business value creation",
  ];

  const features = [
    {
      icon: Palette,
      title: "Logo & Identity Design",
      description: "Distinctive logo design and complete brand identity system that represents your business.",
      gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      icon: Sparkles,
      title: "Brand Strategy",
      description: "Comprehensive brand positioning, messaging, and strategy to connect with your audience.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      icon: Target,
      title: "Visual Guidelines",
      description: "Detailed brand guidelines ensuring consistency across all marketing materials.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
    {
      icon: TrendingUp,
      title: "Brand Development",
      description: "Ongoing brand evolution and management to maintain relevance and impact.",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
  ];

  return (
    <div>
      <Hero
        title="Branding Services"
        subtitle="Create a powerful brand identity that resonates with your audience and sets you apart from competitors."
        ctaText="Build Your Brand"
        ctaLink="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-branding-heading">Build a Memorable Brand</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Your brand is more than just a logo—it's the complete experience customers have with your business. We create comprehensive brand identities that tell your story, connect with your audience, and drive business growth.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">From logo design to brand guidelines, we ensure every touchpoint reflects your unique value and resonates with your target market.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-chart-3/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-chart-3/10 to-primary/10 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-features-heading">Branding Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">Complete branding services to establish and grow your market presence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} onHoverStart={() => setHoveredCard(index)} onHoverEnd={() => setHoveredCard(null)} className="group">
                <Card className="relative p-8 h-full transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-transparent" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s/g, '-')}`} style={{ transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)', boxShadow: hoveredCard === index ? `0 20px 60px -15px ${feature.glowColor}, 0 0 0 1px ${feature.glowColor}` : '0 0 0 0 transparent' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" style={{ background: `linear-gradient(135deg, ${feature.glowColor}, transparent)` }} />
                  <div className="relative z-10">
                    <motion.div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 relative`} animate={{ rotate: hoveredCard === index ? [0, -5, 5, 0] : 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                      <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl" style={{ background: `linear-gradient(135deg, ${feature.glowColor}, transparent)` }} />
                      <feature.icon className="h-8 w-8 text-white relative z-10" />
                      {hoveredCard === index && (<><motion.div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" initial={{ scale: 0, opacity: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ duration: 0.6, repeat: Infinity }} /><motion.div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white rounded-full" initial={{ scale: 0, opacity: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} /></>)}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-chart-3 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Create Your Brand Identity</h2>
          <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed">Let's build a brand that stands out and drives business success.</p>
          <a href="/contact"><button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-md font-semibold text-lg hover-elevate active-elevate-2 transition-all" data-testid="button-cta">Start Your Brand Journey</button></a>
        </div>
      </section>
    </div>
  );
}
