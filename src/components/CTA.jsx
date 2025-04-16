import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // adjust margin for earlier trigger

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1 }}
      className="py-20 px-6 bg-green-600 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">
        Ready to Launch Your First Gig?
      </h2>
      <p className="mb-6 text-lg">
        Sign up now and kickstart your creative journey with GigFloww.
      </p>
      <button className="bg-white text-green-700 font-semibold py-3 px-8 rounded-full hover:bg-lime-200 transition duration-300">
        Join Now
      </button>
    </motion.section>
  );
}
