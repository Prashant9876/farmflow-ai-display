import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import type { PackageProduct } from "@/data/products";

interface PackageCardProps {
  pkg: PackageProduct;
  image: string;
  index: number;
  variant?: "primary" | "accent";
}

const PackageCard = ({ pkg, image, index, variant = "primary" }: PackageCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${
        variant === "accent" ? "card-glow-accent" : "card-glow"
      } transition-all duration-300 hover:shadow-xl`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={pkg.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="gradient-hero absolute inset-0" />
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="text-2xl font-bold text-primary-foreground font-heading">{pkg.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-muted-foreground leading-relaxed">{pkg.tagline}</p>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
            variant === "accent"
              ? "bg-accent text-accent-foreground hover:opacity-90"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {expanded ? "Hide Details" : "View Details"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4 border-t border-border pt-4">
                <p className="text-sm text-foreground leading-relaxed">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <button className="gradient-accent w-full rounded-lg px-6 py-3 text-sm font-bold text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg">
                  Request for Quotation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PackageCard;
