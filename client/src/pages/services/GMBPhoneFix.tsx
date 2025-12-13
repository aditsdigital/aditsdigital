import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { MapPin, CheckCircle, Phone, AlertCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GMBPhoneFix() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const benefits = [
    "Quick resolution of verification issues",
    "Expert knowledge of GMB policies",
    "Complete documentation support",
    "Ongoing compliance monitoring",
    "Improved local search visibility",
    "Professional listing optimization",
  ];

  const steps = [
    {
      step: "01",
      title: "Assessment",
      description: "We analyze your GMB listing and identify the specific verification issues.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      step: "02",
      title: "Documentation",
      description: "Prepare all necessary documentation and evidence for verification.",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      step: "03",
      title: "Submission",
      description: "Submit verification request with proper documentation to Google.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
    {
      step: "04",
      title: "Follow-up",
      description: "Monitor status and handle any additional requirements from Google.",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
  ];

  return (
    <div>
      <Hero
        title="GMB Phone Number Fix"
        subtitle="Expert solutions to resolve Google My Business phone number verification issues and get your listing approved."
        ctaText="Get Help Now"
        ctaLink="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-gmb-heading">Fix GMB Verification Issues</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Struggling with Google My Business phone number verification? Our experts have helped hundreds of businesses resolve GMB verification issues and get their listings approved quickly.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">We understand Google's policies and requirements, ensuring your business listing is verified and optimized for maximum local visibility.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">What We Solve</h3>
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
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-process-heading">Our Resolution Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">A proven 4-step process to get your GMB listing verified and approved.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} onHoverStart={() => setHoveredStep(index)} onHoverEnd={() => setHoveredStep(null)} className="group">
                <Card className="relative p-6 h-full text-center transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-transparent" data-testid={`card-step-${item.step}`} style={{ transform: hoveredStep === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)', boxShadow: hoveredStep === index ? `0 20px 60px -15px ${item.glowColor}, 0 0 0 1px ${item.glowColor}` : '0 0 0 0 transparent' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" style={{ background: `linear-gradient(135deg, ${item.glowColor}, transparent)` }} />
                  <div className="relative z-10">
                    <motion.div className={`text-4xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent mb-4`} animate={{ scale: hoveredStep === index ? 1.1 : 1 }} transition={{ duration: 0.3, ease: "easeInOut" }}>{item.step}</motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-orange/5 border-orange/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Common GMB Phone Issues We Fix</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><Phone className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" /><span>Phone number not approved or verified</span></li>
                  <li className="flex items-start gap-2"><Phone className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" /><span>Unable to receive verification codes</span></li>
                  <li className="flex items-start gap-2"><Phone className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" /><span>Phone number already in use error</span></li>
                  <li className="flex items-start gap-2"><Phone className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" /><span>Suspended or disabled GMB listings</span></li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-chart-3 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Get Your GMB Listing Approved</h2>
          <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed">Let our experts resolve your verification issues and optimize your local presence.</p>
          <a href="/contact"><button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-md font-semibold text-lg hover-elevate active-elevate-2 transition-all" data-testid="button-cta">Get Help Now</button></a>
        </div>
      </section>
    </div>
  );
}
