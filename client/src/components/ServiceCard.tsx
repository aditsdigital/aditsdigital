import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay?: number;
  gradient?: string;
  glowColor?: string;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  delay = 0,
  gradient = "from-blue-500 via-cyan-500 to-teal-500",
  glowColor = "rgba(6, 182, 212, 0.4)"
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card 
        className="relative p-8 h-full transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-transparent"
        data-testid={`card-service-${title.toLowerCase().replace(/\s/g, '-')}`}
        style={{
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? `0 20px 60px -15px ${glowColor}, 0 0 0 1px ${glowColor}`
            : '0 0 0 0 transparent',
        }}
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
          style={{
            background: `linear-gradient(135deg, ${glowColor}, transparent)`,
          }}
        />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <motion.div
              className={`inline-flex p-4 bg-gradient-to-br ${gradient} rounded-2xl relative`}
              animate={{
                rotate: isHovered ? [0, -5, 5, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div 
                className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${glowColor}, transparent)`,
                }}
              />
              <Icon className="h-8 w-8 text-white relative z-10" />
              
              {isHovered && (
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
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300" data-testid={`text-service-title-${title.toLowerCase().replace(/\s/g, '-')}`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-sm" data-testid={`text-service-description-${title.toLowerCase().replace(/\s/g, '-')}`}>
            {description}
          </p>
          
          <Link href={link} data-testid={`link-learn-more-${title.toLowerCase().replace(/\s/g, '-')}`}>
            <Button 
              className="group/btn font-semibold px-5 py-2 hover:shadow-md transition-all duration-300" 
              data-testid={`button-learn-more-${title.toLowerCase().replace(/\s/g, '-')}`}
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>

        <div 
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
      </Card>
    </motion.div>
  );
}
