import Hero from "@/components/Hero";
import StatCounter from "@/components/StatCounter";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative digital marketing strategies that drive measurable growth and create lasting impact in the digital world.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the most trusted digital marketing partner for businesses worldwide, setting industry standards for excellence and innovation.",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, innovation, results-driven approach, and client success are at the core of everything we do at ADITS Digital.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse team of digital marketing experts, strategists, and creatives passionate about helping businesses succeed online.",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
  ];

  return (
    <div>
      <Hero
        title="About ADITS Digital"
        subtitle="Your trusted partner in digital transformation, helping businesses thrive in the ever-evolving digital landscape."
        showCta={false}
        variant="about"
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-who-we-are">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ADITS Digital is a full-service digital marketing agency dedicated to helping businesses achieve extraordinary results online. With over a decade of experience, we've helped hundreds of companies transform their digital presence and achieve sustainable growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of certified experts specializes in SEO, social media marketing, PPC advertising, email marketing, and branding. We combine data-driven strategies with creative excellence to deliver campaigns that not only look great but drive real business results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-8"
            >
              <StatCounter end={10} suffix="+" label="Years of Excellence" />
              <StatCounter end={50} suffix="+" label="Team Members" />
              <StatCounter end={500} suffix="+" label="Satisfied Clients" />
              <StatCounter end={15} suffix="+" label="Industry Awards" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Animated background elements */}
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
              <span className="text-sm font-medium text-primary">What Drives Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-values-heading">
              Our Foundation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built on strong principles and driven by a passion for excellence, we're committed to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group"
              >
                <Card 
                  className="relative p-8 h-full text-center transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-transparent"
                  data-testid={`card-value-${value.title.toLowerCase().replace(/\s/g, '-')}`}
                  style={{
                    transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredCard === index 
                      ? `0 20px 60px -15px ${value.glowColor}, 0 0 0 1px ${value.glowColor}`
                      : '0 0 0 0 transparent',
                  }}
                >
                  {/* Animated gradient border on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${value.glowColor}, transparent)`,
                    }}
                  />
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    <motion.div
                      className={`inline-flex p-4 bg-gradient-to-br ${value.gradient} rounded-2xl mb-6 relative`}
                      animate={{
                        rotate: hoveredCard === index ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Icon glow effect */}
                      <div 
                        className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${value.glowColor}, transparent)`,
                        }}
                      />
                      <value.icon className="h-8 w-8 text-white relative z-10" />
                      
                      {/* Sparkle effect on hover */}
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
                    
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom gradient line on hover */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative background elements */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-why-choose-heading">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We deliver results that matter through proven strategies and unwavering commitment to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <motion.div 
                  className="text-6xl font-bold bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent"
                  data-testid="text-expertise"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  10+
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Years of Expertise</h3>
              <p className="text-muted-foreground">
                Over a decade of experience delivering exceptional digital marketing results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <motion.div 
                  className="text-6xl font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent"
                  data-testid="text-certified"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  100%
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-rose-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Certified Experts</h3>
              <p className="text-muted-foreground">
                Team of Google, Facebook, and HubSpot certified professionals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <motion.div 
                  className="text-6xl font-bold bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent"
                  data-testid="text-satisfaction"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  98%
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Client Satisfaction</h3>
              <p className="text-muted-foreground">
                Consistently high satisfaction rates from our valued clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-chart-3 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-cta-heading">
            Let's Grow Together
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed">
            Partner with ADITS Digital and experience the difference that expertise and dedication can make.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold text-base" data-testid="button-start-journey">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
