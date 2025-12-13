import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Share2, Users, TrendingUp, BarChart, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SocialMedia() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    "Increased brand awareness and visibility",
    "Higher engagement with your target audience",
    "Improved customer loyalty and retention",
    "More website traffic and conversions",
    "Better understanding of customer preferences",
    "Cost-effective marketing with measurable ROI",
  ];

  const features = [
    {
      icon: Share2,
      title: "Content Strategy",
      description: "Data-driven content planning and creation that resonates with your audience and drives engagement.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Active engagement with your audience, responding to comments, and building meaningful relationships.",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      icon: TrendingUp,
      title: "Social Advertising",
      description: "Targeted paid campaigns across platforms to reach your ideal customers and maximize ROI.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Comprehensive performance tracking and insights to optimize your social media strategy.",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
  ];

  return (
    <div>
      <Hero
        title="Social Media Marketing"
        subtitle="Build a powerful social presence and engage your audience across all major platforms."
        ctaText="Get Started"
        ctaLink="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-social-media-heading">
                Social Media Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Social media marketing is essential for building brand awareness, engaging customers, and driving business growth. Our strategic approach helps you create meaningful connections with your audience across Facebook, Instagram, LinkedIn, Twitter, and more.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We create compelling content, manage your communities, and run targeted campaigns that deliver measurable results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-features-heading">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive social media solutions to grow your brand presence and engage your audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group"
              >
                <Card 
                  className="relative p-8 h-full transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-transparent"
                  data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s/g, '-')}`}
                  style={{
                    transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredCard === index 
                      ? `0 20px 60px -15px ${feature.glowColor}, 0 0 0 1px ${feature.glowColor}`
                      : '0 0 0 0 transparent',
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${feature.glowColor}, transparent)`,
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 relative`}
                      animate={{
                        rotate: hoveredCard === index ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      <div 
                        className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${feature.glowColor}, transparent)`,
                        }}
                      />
                      <feature.icon className="h-8 w-8 text-white relative z-10" />
                      
                      {hoveredCard === index && (
                        <>
                          <motion.div
                            className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white rounded-full"
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                        </>
                      )}
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-chart-3 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Grow Your Social Presence
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed">
            Let's create a social media strategy that drives real results for your business.
          </p>
          <a href="/contact">
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-md font-semibold text-lg hover-elevate active-elevate-2 transition-all" data-testid="button-cta">
              Start Your Campaign
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
