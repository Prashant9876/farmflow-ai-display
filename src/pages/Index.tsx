import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { mainPackages, additionalPackages, modularProducts } from "@/data/products";
import PackageCard from "@/components/PackageCard";
import ModularCard from "@/components/ModularCard";
import heroImg from "@/assets/hero-farm.jpg";
import baseImg from "@/assets/base-aiot.jpg";
import proImg from "@/assets/pro-iot.jpg";

const packageImages = [baseImg, proImg];

const Index = () => {
  const [showMore, setShowMore] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-heading text-xl font-bold text-foreground">
              INNOFarms<span className="text-accent">.AI</span>
            </span>
          </motion.div>
          <motion.a
            href="https://www.innofarms.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-accent rounded-lg px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt="Smart Farm"
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="gradient-hero absolute inset-0" />
        </div>
        <div className="container relative z-10 py-24 text-center md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Zap className="h-3.5 w-3.5" />
              INNOSENSE — Farm Automation Products
            </motion.div>
            <motion.h1
              className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AI-Powered Farm
              <br />
              Intelligence & Automation
            </motion.h1>
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Save input & operation cost and improve yield — "Grow More in Less"
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* All Packages Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Automation Packages
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Choose the right automation tier for your farming operation.
          </p>
        </motion.div>

        {/* Main Packages */}
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

        {/* Expandable: Additional Packages + Single Units */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* Additional Packages */}
              <div className="mt-10">
                <motion.h3
                  className="mb-6 text-center font-heading text-xl font-bold text-foreground md:text-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  Specialized Packages
                </motion.h3>
                <div className="grid gap-8 md:grid-cols-3">
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
              </div>

              {/* Single Units — horizontal carousel */}
              <div className="mt-14">
                <motion.h3
                  className="mb-6 text-center font-heading text-xl font-bold text-foreground md:text-2xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Our Single Units
                </motion.h3>
                <p className="mx-auto mb-8 max-w-xl text-center text-sm text-muted-foreground">
                  Modular IoT sensors and controllers — mix and match to build your perfect farm automation stack.
                </p>

                {/* Carousel wrapper */}
                <div className="relative">
                  {/* Scroll buttons */}
                  <button
                    onClick={() => scrollCarousel("left")}
                    className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground shadow-lg transition-all hover:bg-primary hover:text-primary-foreground md:-left-5"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => scrollCarousel("right")}
                    className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground shadow-lg transition-all hover:bg-primary hover:text-primary-foreground md:-right-5"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Scrollable row */}
                  <div
                    ref={scrollRef}
                    className="scrollbar-hide flex gap-5 overflow-x-auto px-2 py-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {modularProducts.map((product, i) => (
                      <motion.div
                        key={product.id}
                        className="w-[250px] flex-shrink-0"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.15 + i * 0.08,
                          ease: "easeOut",
                        }}
                      >
                        <ModularCard product={product} index={i} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show More / Less Button — at the bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-card px-8 py-3 font-heading text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? "Show Less" : "Show More Packages"}
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
            />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
