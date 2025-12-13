import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating?: number;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  position,
  company,
  rating = 5,
  delay = 0,
}: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
  ];
  const gradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
    >
      <Card 
        className="group relative p-8 h-full transition-all duration-500 hover:shadow-2xl border-2 overflow-hidden bg-card"
        data-testid={`card-testimonial-${author.toLowerCase().replace(/\s/g, '-')}`}
      >
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        
        <motion.div 
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative flex flex-col h-full">
          <div className="flex items-start justify-between mb-6">
            <motion.div
              className="relative"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                <Quote className="h-8 w-8 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-4 w-4 text-secondary fill-secondary" />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.3 }}
            >
              {[...Array(rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.1 * i }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.p 
            className="text-foreground/90 mb-8 flex-grow leading-relaxed text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
            data-testid={`text-testimonial-quote-${author.toLowerCase().replace(/\s/g, '-')}`}
          >
            "{quote}"
          </motion.p>
          
          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            <motion.div
              className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg shadow-md`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {getInitials(author)}
            </motion.div>
            
            <div className="flex-grow">
              <p className="font-semibold text-lg mb-0.5 group-hover:text-primary transition-colors duration-300" data-testid={`text-testimonial-author-${author.toLowerCase().replace(/\s/g, '-')}`}>
                {author}
              </p>
              <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-position-${author.toLowerCase().replace(/\s/g, '-')}`}>
                {position}
              </p>
              <p className={`text-xs font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {company}
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Card>
    </motion.div>
  );
}
