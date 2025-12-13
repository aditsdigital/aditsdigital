import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Sparkles, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (234) 567-8900",
      href: "tel:+1234567890",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@aditsdigital.com",
      href: "mailto:info@aditsdigital.com",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Business Avenue, Suite 100, New York, NY 10001",
      href: "#",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      href: "#",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
  ];

  return (
    <div>
      <Hero
        title="Get In Touch"
        subtitle="Ready to transform your digital presence? Let's discuss how we can help your business grow."
        showCta={false}
        variant="contact"
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
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Let's Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-heading">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <Card className="p-8 relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-3/5 opacity-50" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                
                <div className="relative z-10">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                data-testid="input-name"
                                className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-colors"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your.email@example.com" 
                                {...field} 
                                data-testid="input-email"
                                className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-colors"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Phone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (234) 567-8900" 
                                {...field} 
                                data-testid="input-phone"
                                className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-colors"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project or requirements..."
                                rows={6}
                                {...field}
                                data-testid="input-message"
                                className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-colors resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full font-semibold text-base bg-gradient-to-r from-primary via-primary to-chart-3 hover:opacity-90 transition-opacity" 
                        disabled={contactMutation.isPending}
                        data-testid="button-submit"
                      >
                        {contactMutation.isPending ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6" data-testid="text-contact-info-heading">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onHoverStart={() => setHoveredCard(index)}
                      onHoverEnd={() => setHoveredCard(null)}
                      className="group"
                    >
                      <Card 
                        className="relative p-6 h-full transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-transparent"
                        data-testid={`card-contact-${info.title.toLowerCase()}`}
                        style={{
                          transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                          boxShadow: hoveredCard === index 
                            ? `0 20px 60px -15px ${info.glowColor}, 0 0 0 1px ${info.glowColor}`
                            : '0 0 0 0 transparent',
                        }}
                      >
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                          style={{
                            background: `linear-gradient(135deg, ${info.glowColor}, transparent)`,
                          }}
                        />
                        
                        <div className="relative z-10 flex items-start space-x-4">
                          <motion.div
                            className={`p-3 bg-gradient-to-br ${info.gradient} rounded-xl relative`}
                            animate={{
                              rotate: hoveredCard === index ? [0, -5, 5, 0] : 0,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: "easeInOut",
                            }}
                          >
                            <div 
                              className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-xl"
                              style={{
                                background: `linear-gradient(135deg, ${info.glowColor}, transparent)`,
                              }}
                            />
                            <info.icon className="h-6 w-6 text-white relative z-10" />
                            
                            {hoveredCard === index && (
                              <>
                                <motion.div
                                  className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full"
                                  initial={{ scale: 0, opacity: 1 }}
                                  animate={{ scale: 1.5, opacity: 0 }}
                                  transition={{ duration: 0.6, repeat: Infinity }}
                                />
                                <motion.div
                                  className="absolute bottom-0.5 left-0.5 w-1 h-1 bg-white rounded-full"
                                  initial={{ scale: 0, opacity: 1 }}
                                  animate={{ scale: 1.5, opacity: 0 }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                />
                              </>
                            )}
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{info.title}</h4>
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-foreground transition-colors text-sm break-words"
                              data-testid={`text-${info.title.toLowerCase()}`}
                            >
                              {info.content}
                            </a>
                          </div>
                        </div>

                        <div 
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6" data-testid="text-location-heading">
                  Our Location
                </h3>
                <Card className="overflow-hidden relative group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10" />
                  <div className="h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682577107878!2d-73.98823492346698!3d40.74844097138801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ADITS Digital Location"
                      data-testid="map-embed"
                    />
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
