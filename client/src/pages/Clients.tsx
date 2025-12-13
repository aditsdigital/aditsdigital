import Hero from "@/components/Hero";
import ClientCarousel from "@/components/ClientCarousel";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Target, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Clients() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const caseStudies = [
    {
      client: "TechCorp Inc",
      industry: "Technology",
      industryColor: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
      challenge: "Low organic traffic and poor search rankings",
      solution: "Comprehensive SEO strategy with technical optimization and content marketing",
      results: [
        "300% increase in organic traffic",
        "First page rankings for 50+ keywords",
        "5x improvement in lead generation",
      ],
      metrics: {
        traffic: "+300%",
        rankings: "50+",
        leads: "5x",
      },
    },
    {
      client: "InnovateLabs",
      industry: "Healthcare",
      industryColor: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
      challenge: "Limited brand awareness and social media presence",
      solution: "Multi-platform social media campaign with influencer partnerships",
      results: [
        "200% growth in social following",
        "15% engagement rate achieved",
        "25% increase in brand mentions",
      ],
      metrics: {
        followers: "+200%",
        engagement: "15%",
        mentions: "+25%",
      },
    },
    {
      client: "StartupXYZ",
      industry: "E-commerce",
      industryColor: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
      challenge: "High customer acquisition cost with low ROI",
      solution: "Strategic PPC campaigns with advanced targeting and optimization",
      results: [
        "250% ROI on ad spend",
        "40% reduction in CPA",
        "3x increase in conversions",
      ],
      metrics: {
        roi: "250%",
        cpa: "-40%",
        conversions: "3x",
      },
    },
  ];

  return (
    <div>
      <Hero
        title="Our Clients"
        subtitle="Trusted by leading brands worldwide to deliver exceptional digital marketing results and drive sustainable growth."
        showCta={false}
        variant="minimal"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-clients-heading">
              Brands That Trust Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful businesses that have transformed their digital presence with ADITS Digital.
            </p>
          </div>

          <ClientCarousel />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "500+", label: "Happy Clients", gradient: "from-blue-500 via-cyan-500 to-teal-500", glowColor: "rgba(6, 182, 212, 0.4)" },
              { icon: TrendingUp, value: "1200+", label: "Projects Completed", gradient: "from-purple-500 via-pink-500 to-rose-500", glowColor: "rgba(236, 72, 153, 0.4)" },
              { icon: Award, value: "15+", label: "Industry Awards", gradient: "from-amber-500 via-orange-500 to-red-500", glowColor: "rgba(249, 115, 22, 0.4)" },
              { icon: Target, value: "98%", label: "Success Rate", gradient: "from-emerald-500 via-green-500 to-lime-500", glowColor: "rgba(34, 197, 94, 0.4)" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="text-center group relative"
              >
                <motion.div
                  className={`inline-flex p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 relative`}
                  animate={{
                    rotate: hoveredStat === index ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* Icon glow */}
                  <div 
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${stat.glowColor}, transparent)`,
                    }}
                  />
                  <stat.icon className="h-8 w-8 text-white relative z-10" />
                  
                  {/* Sparkles on hover */}
                  {hoveredStat === index && (
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
                
                <motion.div 
                  className={`text-4xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground font-medium group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    boxShadow: hoveredStat === index ? `0 0 40px ${stat.glowColor}` : 'none',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Animated background */}
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
              <span className="text-sm font-medium text-primary">Client Success</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-case-studies-heading">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real results from real clients. See how we've helped businesses achieve their digital marketing goals.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCase(index)}
                onHoverEnd={() => setHoveredCase(null)}
                className="group"
              >
                <Card 
                  className="relative p-8 lg:p-12 transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-transparent"
                  data-testid={`card-case-study-${study.client.toLowerCase().replace(/\s/g, '-')}`}
                  style={{
                    transform: hoveredCase === index ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredCase === index 
                      ? `0 20px 60px -15px ${study.glowColor}, 0 0 0 1px ${study.glowColor}`
                      : '0 0 0 0 transparent',
                  }}
                >
                  {/* Animated gradient border on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${study.glowColor}, transparent)`,
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors">
                            {study.client}
                          </h3>
                          <motion.span 
                            className={`px-4 py-1.5 bg-gradient-to-r ${study.industryColor} text-white rounded-full text-sm font-medium shadow-lg`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {study.industry}
                          </motion.span>
                        </div>
                        
                        <div className="space-y-5">
                          <div>
                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              Challenge
                            </h4>
                            <p className="text-muted-foreground pl-3.5">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              Solution
                            </h4>
                            <p className="text-muted-foreground pl-3.5">{study.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              Results
                            </h4>
                            <ul className="space-y-2 pl-3.5">
                              {study.results.map((result, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-muted-foreground"
                                >
                                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{result}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex lg:flex-col justify-around lg:justify-center gap-6 lg:border-l lg:border-border lg:pl-8">
                        {Object.entries(study.metrics).map(([key, value], i) => (
                          <motion.div 
                            key={key} 
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <div className="relative inline-block mb-2">
                              <div 
                                className={`text-3xl lg:text-5xl font-bold bg-gradient-to-br ${study.industryColor} bg-clip-text text-transparent`}
                                data-testid={`metric-${study.client.toLowerCase().replace(/\s/g, '-')}-${key}`}
                              >
                                {value}
                              </div>
                              {hoveredCase === index && (
                                <div 
                                  className="absolute inset-0 blur-xl opacity-60 transition-opacity duration-500"
                                  style={{
                                    background: `linear-gradient(135deg, ${study.glowColor}, transparent)`,
                                  }}
                                />
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground capitalize font-medium">{key}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient line on hover */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${study.industryColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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
