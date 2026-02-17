import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Product } from "@/data/products";
import sensorImg from "@/assets/sensor-generic.jpg";

interface ModularCardProps {
  product: Product;
  index: number;
}

const ModularCard = ({ product, index }: ModularCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <motion.div
          className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative h-36 overflow-hidden bg-secondary">
            <img
              src={product.image || sensorImg}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
          </div>
          <div className="p-4">
            <h4 className="font-heading text-sm font-bold text-foreground">{product.name}</h4>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
              {product.tagline}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal overlay */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            >
              {/* Blurred backdrop */}
              <motion.div
                className="absolute inset-0 bg-background/60 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Card modal */}
              <motion.div
                className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
                initial={{ scale: 0.7, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.7, opacity: 0, y: 40 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-3 top-3 z-20 rounded-full bg-card/80 p-1.5 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-card hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img
                    src={product.image || sensorImg}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{product.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground">{product.description}</p>

                  {/* Specs */}
                  <div className="space-y-2 rounded-lg bg-secondary/50 p-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-2 text-sm">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="text-right font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="gradient-accent w-full rounded-lg px-4 py-3 text-sm font-bold text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request for Quotation
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ModularCard;
