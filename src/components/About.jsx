import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // adjust margin for earlier trigger

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1 }}
      className="py-16 px-6 text-center bg-white"
    >
      <motion.h2 className="text-3xl md:text-4xl font-semibold text-green-700 mb-6">
        About GigFloww
      </motion.h2>
      <motion.p className="text-gray-700 max-w-3xl mx-auto text-lg">
        GigFloww empowers creators, freelancers, and dreamers to transform ideas
        into income. From music to marketing, showcase your skills and connect
        with clients effortlessly.
      </motion.p>
    </motion.section>
  );
}
