import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-tr from-green-500 via-lime-400 to-yellow-300">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Your Creative Gig Journey Starts Here
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-white/90 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Unleash your talent with GigFloww — the ultimate platform for
        freelancers and creators.
      </motion.p>
    </header>
  );
}
