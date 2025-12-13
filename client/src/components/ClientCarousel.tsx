import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function ClientCarousel() {
  const clients = [
    { name: "TechCorp", color: "from-blue-500 to-cyan-500" },
    { name: "InnovateLabs", color: "from-purple-500 to-pink-500" },
    { name: "GlobalBrand", color: "from-orange-500 to-red-500" },
    { name: "StartupXYZ", color: "from-green-500 to-emerald-500" },
    { name: "EnterpriseHub", color: "from-indigo-500 to-blue-500" },
    { name: "DigitalFlow", color: "from-teal-500 to-cyan-500" },
    { name: "CloudNine", color: "from-violet-500 to-purple-500" },
    { name: "DataVision", color: "from-rose-500 to-pink-500" },
    { name: "SmartSolutions", color: "from-amber-500 to-orange-500" },
    { name: "FutureWorks", color: "from-lime-500 to-green-500" },
  ];

  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1600],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-testid={`client-logo-${client.name.toLowerCase()}`}
          >
            <div className="relative w-64 h-32 bg-card border-2 border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="absolute top-3 right-3 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center`}>
                  <Building2 className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="relative h-full flex flex-col items-start justify-center px-6">
                <div className={`text-sm font-medium bg-gradient-to-r ${client.color} bg-clip-text text-transparent mb-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300`}>
                  Partner
                </div>
                <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </div>
                <div className="mt-2 h-1 w-12 bg-gradient-to-r ${client.color} rounded-full opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
