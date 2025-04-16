import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const features = [
  { title: "Seamless Gig Setup", desc: "Create and publish gigs in minutes." },
  {
    title: "Creative Profiles",
    desc: "Stand out with fully customizable profiles.",
  },
  { title: "Trusted Payments", desc: "Get paid securely and on time." },
  {
    title: "Engaged Community",
    desc: "Collaborate, share, and grow together.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // adjust margin for earlier trigger
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1 }}
      className="py-16 px-6 bg-gradient-to-br from-lime-100 to-yellow-100"
    >
      <motion.h2 className="text-3xl font-bold text-center text-green-800 mb-12">
        What You’ll Love
      </motion.h2>
      <motion.div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
