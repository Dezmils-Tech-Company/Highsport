import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const HighsportAbout = () => (
  <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray text-white px-4 py-24 md:px-20 space-y-24">
    {/* Our Story */}
    <motion.div
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-5xl mx-auto text-center"
    >
      <motion.h2
        variants={fadeUpVariant}
        className="text-4xl md:text-5xl font-bold mb-6 font-serif text-yellow-400 drop-shadow-sm"
      >
        Our Story
      </motion.h2>
      <motion.p
        variants={fadeUpVariant}
        className="text-lg md:text-xl text-white leading-relaxed"
      >
        In the heart of Western Kenya, where school sports overflow with ambition and talent, a paradox endures—legendary athletes emerge from invisible games, their achievements lost to time. Our journey began with a simple conviction: <span className="text-yellow-400 font-semibold">no great moment should fade, and no young athlete's story should go untold</span>.
      </motion.p>
      <motion.p
        variants={fadeUpVariant}
        className="text-lg md:text-xl text-white mt-6"
      >
        We built this platform to transform how Siaya and Kisumu communities connect, remember, and grow—moving from scattered, analog records to a living digital legacy. What began as a mission for record-keeping has become a catalyst for <span className="text-yellow-400 font-semibold">pride, opportunity, and unity</span> for families, schools, and the region as a whole.
      </motion.p>
    </motion.div>

    {/* Why We Stand Out */}
    <motion.div
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
    >
      <motion.img
        variants={fadeUpVariant}
        src="https://res.cloudinary.com/daecietav/image/upload/v1767865239/localTalent.jpg"
        alt="Kids celebrating school sports victory"
        className="rounded-xl shadow-2xl w-full h-auto object-cover"
      />
      <motion.div variants={fadeUpVariant}>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          What Makes Us Unique
        </h3>
        <ul className="space-y-4 text-blue-100 text-lg list-disc list-inside">
          <li>📖 Every match, every player, every stat—digitally preserved for generations</li>
          <li>🌍 Diaspora, alumni, and families can follow and celebrate team journeys, anywhere in the world</li>
          <li>📈 Authentic, community-powered journalism: stories and results from teachers, students, and coaches</li>
          <li>🤝 Direct pathways for brands and scouts to make a real impact—no more generic ads, but true sponsorship and opportunity</li>
          <li>🏆 Building legacy: turning community pride into real-world value—scholarships, recognition, and economic growth</li>
        </ul>
      </motion.div>
    </motion.div>

    {/* Vision & Mission */}
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-black-500/80 p-10 md:p-14 rounded-xl shadow-inner max-w-6xl mx-auto text-center space-y-6 border border-blue-800"
    >
      <h3 className="text-3xl md:text-4xl font-bold font-serif text-yellow-400">
        Our Vision & Mission
      </h3>
      <p className="text-blue-100 text-lg md:text-xl max-w-4xl mx-auto">
        To ensure every moment of athletic excellence—across every school, every game, every county—is seen, remembered, and transformed into opportunity for the next generation.
      </p>
      <p className="text-blue-200 text-base md:text-lg max-w-3xl mx-auto">
        Our mission is to build a vibrant, digital ecosystem that documents, celebrates, and nurtures talent—creating visible pathways from community pride to national achievement, and connecting every athlete’s story to the world.
      </p>
    </motion.div>
  </section>
);

export default HighsportAbout;