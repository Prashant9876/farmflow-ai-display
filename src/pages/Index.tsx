import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf, Zap } from "lucide-react";
import { mainPackages, additionalPackages, modularProducts } from "@/data/products";
import PackageCard from "@/components/PackageCard";
import ModularCard from "@/components/ModularCard";
import heroImg from "@/assets/hero-farm.jpg";
import baseImg from "@/assets/base-aiot.jpg";
import proImg from "@/assets/pro-iot.jpg";

const packageImages = [baseImg, proImg];

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-heading text-xl font-bold text-foreground">
              INNOFarms<span className="text-accent">.AI</span>
            </span>
          </div>
          <a
            href="https://www.innofarms.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-accent rounded-lg px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Smart Farm" className="h-full w-full object-cover" />
          <div className="gradient-hero absolute inset-0" />
        </div>
        <div className="container relative z-10 py-24 text-center md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5" />
              INNOSENSE — Farm Automation Products
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
              AI-Powered Farm
              <br />
              Intelligence & Automation
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Save input & operation cost and improve yield — "Grow More in Less"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Automation Packages
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Choose the right automation tier for your farming operation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {mainPackages.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              image={packageImages[i]}
              index={i}
              variant={i === 1 ? "accent" : "primary"}
            />
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-card px-8 py-3 font-heading text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            {showMore ? "Show Less" : "Show More Packages"}
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
            />
          </button>
        </motion.div>

        {/* Additional Packages */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {additionalPackages.map((pkg, i) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    image={packageImages[i % 2]}
                    index={i}
                    variant={i === 1 ? "accent" : "primary"}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Modular Products */}
      <section className="border-t border-border bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our Single Units
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Modular IoT sensors and controllers — mix and match to build your perfect farm automation stack.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {modularProducts.map((product, i) => (
              <ModularCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-10">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-heading text-lg font-bold text-foreground">
              INNOFarms<span className="text-accent">.AI</span>
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            DLF Forum, DLF Cybercity, Gurugram, India &nbsp;|&nbsp; Business@INNOFarms.AI
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} INNOFarms.AI — All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
