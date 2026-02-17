import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/data/products";
import sensorImg from "@/assets/sensor-generic.jpg";

interface ModularCardProps {
  product: Product;
  index: number;
}

const ModularCard = ({ product, index }: ModularCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <motion.div
        className={`overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg ${
          expanded ? "card-glow ring-2 ring-primary/20" : ""
        }`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Image + Title */}
        <div className="relative h-36 overflow-hidden bg-secondary">
          <img
            src={product.image || sensorImg}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground">{product.name}</h4>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {product.tagline}
              </p>
            </div>
            <ChevronDown
              className={`mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Expandable details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mt-3 space-y-3 border-t border-border pt-3">
                  <p className="text-xs leading-relaxed text-foreground">{product.description}</p>

                  {/* Specs table */}
                  <div className="space-y-1.5">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-2 text-xs">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="text-right font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="gradient-accent w-full rounded-lg px-4 py-2.5 text-xs font-bold text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request for Quotation
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ModularCard;
