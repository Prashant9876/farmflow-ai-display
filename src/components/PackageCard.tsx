import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { PackageProduct } from "@/data/products";

interface PackageCardProps {
  pkg: PackageProduct;
  image: string;
  index: number;
  variant?: "primary" | "accent";
}

const PackageCard = ({ pkg, image, index, variant = "primary" }: PackageCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card ${
          variant === "accent" ? "card-glow-accent" : "card-glow"
        } transition-all duration-300 hover:shadow-xl`}
        onClick={() => setOpen(true)}
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
          <span
            className={`mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              variant === "accent"
                ? "bg-accent text-accent-foreground hover:opacity-90"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            View Details
          </span>
        </div>
      </motion.div>

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
                className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto overflow-x-hidden rounded-2xl border border-border bg-card shadow-2xl"
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
                  <X className="h-5 w-5" />
                </button>

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={image}
                    alt={pkg.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="gradient-hero absolute inset-0" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-primary-foreground font-heading">{pkg.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 p-6">
                  <p className="text-muted-foreground leading-relaxed">{pkg.tagline}</p>
                  <p className="text-sm text-foreground leading-relaxed">{pkg.description}</p>

                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.04 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    className="gradient-accent w-full rounded-lg px-6 py-3 text-sm font-bold text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg"
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

export default PackageCard;
