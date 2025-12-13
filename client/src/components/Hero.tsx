import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  title: string;
  highlightText?: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showCta?: boolean;
  variant?: "default" | "services" | "about" | "contact" | "blog" | "minimal";
}

export default function Hero({
  title,
  highlightText,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
  showCta = true,
  variant = "default",
}: HeroProps) {
  const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  const getBackgroundAnimation = () => {
    if (variant === "services") {
      return (
        <>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-transparent to-purple-500/10"
            animate={{ opacity: [0.2, 0.4, 0.2], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`service-circle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-blue-400/40"
              style={{ left: `${i * 5}%`, top: `${(i % 4) * 25}%` }}
              animate={{ scale: [0, 1.5, 0], opacity: [0, 0.8, 0], y: [-20, 20] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.15, ease: "easeOut" }}
            />
          ))}
        </>
      );
    }

    if (variant === "about") {
      return (
        <>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-pink-500/10"
            animate={{ opacity: [0.2, 0.5, 0.2], x: ['-10%', '10%', '-10%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-l from-red-500/5 via-transparent to-yellow-500/5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`about-wave-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"
              style={{ width: '100%', top: `${i * 8}%` }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
            />
          ))}
        </>
      );
    }

    if (variant === "contact") {
      return (
        <>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-teal-500/10"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tl from-emerald-500/5 via-transparent to-lime-500/5"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`contact-pulse-${i}`}
              className="absolute border-2 border-green-400/30 rounded-full"
              style={{ width: 100 + i * 80, height: 100 + i * 80, left: '50%', top: '50%', marginLeft: -(50 + i * 40), marginTop: -(50 + i * 40) }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
            />
          ))}
        </>
      );
    }

    if (variant === "blog") {
      return (
        <>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-fuchsia-500/10"
            animate={{ opacity: [0.2, 0.4, 0.2], rotate: [0, -5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 via-transparent to-pink-500/5"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`blog-star-${i}`}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 3, ease: "easeInOut" }}
            />
          ))}
        </>
      );
    }

    if (variant === "minimal") {
      return (
        <>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_60%)]"></div>
        </>
      );
    }

    return (
      <>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-chart-3/10"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-chart-3/5 via-transparent to-secondary/5"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(74,222,128,0.15),transparent_50%)]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_50%)]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      {getBackgroundAnimation()}
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(74,222,128,0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
            <path d="M50 0 L93.3 25 L93.3 62 L50 87 L6.7 62 L6.7 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="scanline" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(74,222,128,0)" />
            <stop offset="50%" stopColor="rgba(74,222,128,0.3)" />
            <stop offset="100%" stopColor="rgba(74,222,128,0)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      <motion.div
        className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"
        animate={{
          y: ['0%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-chart-3 to-transparent opacity-20"
        animate={{
          y: ['0%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
      />

      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`energy-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-secondary to-transparent"
          style={{
            left: `${i * 7}%`,
            height: '100%',
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-2 h-2 rounded-full bg-secondary shadow-lg shadow-secondary/50"
          style={{
            left: `${10 + i * 9}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent"
          style={{
            width: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-secondary/30 blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`circuit-${i}`}
          className="absolute w-1 h-1 bg-secondary rounded-full shadow-lg shadow-secondary/50"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute top-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-chart-3/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute border border-secondary/30 rounded-full"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              left: '50%',
              top: '50%',
              marginLeft: -(100 + i * 75),
              marginTop: -(100 + i * 75),
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute w-2 h-2 bg-secondary rounded-full shadow-lg shadow-secondary/50"
              style={{ top: 0, left: '50%' }}
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute top-20 left-20 w-64 h-64 border-2 border-secondary/20 rounded-lg"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 border-2 border-chart-3/20"
        style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
        animate={{
          rotate: [360, 270, 180, 90, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`corner-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <motion.div
            className="w-8 h-8 border-l-2 border-t-2 border-secondary/40"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute border-2 border-secondary/20 rounded-full"
            style={{
              width: 300,
              height: 300,
              left: '50%',
              top: '50%',
              marginLeft: -150,
              marginTop: -150,
            }}
            animate={{
              scale: [0, 3],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-1 h-1 bg-secondary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 1, 0],
            y: [0, -50],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30"
        >
          <Sparkles className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">Digital Excellence Awaits</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]"
          data-testid="text-hero-title"
        >
          {title}
          {highlightText && (
            <>
              <br />
              <span className="bg-gradient-to-r from-secondary via-secondary/90 to-chart-3 bg-clip-text text-transparent inline-block mt-2">
                {highlightText}
              </span>
            </>
          )}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg lg:text-xl mb-10 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light"
          data-testid="text-hero-subtitle"
        >
          {subtitle}
        </motion.p>

        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={ctaLink}>
              <Button 
                size="lg" 
                className="font-semibold text-base group bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8" 
                data-testid="button-hero-cta"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-semibold text-base border-primary-foreground/40 bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/15 text-primary-foreground px-8 transition-all duration-300" 
                  data-testid="button-hero-secondary-cta"
                >
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "1200+", label: "Projects Done" },
            { value: "98%", label: "Success Rate" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-primary-foreground/70 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
          <motion.div
            className="w-1.5 h-2 bg-primary-foreground/50 rounded-full mx-auto"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
