import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Digital Legacy for Local Legends",
    subtitle: "From Hidden Talent to National Discovery",
    description:
      "Transforming under-documented school sports in Siaya and Kisumu into an online legacy—archiving every match, athlete, and story for families, schools, and fans worldwide.",
    image: "/BannerImg/slide1.jpg", // Use the most celebratory, communal image available
    cta: "Tour the Platform",
    link: "/about",
  },
  {
    id: 2,
    title: "Your Community Trophy Case",
    subtitle: "Real Results. Real Stories.",
    description:
      "No more forgotten scores or lost moments: crowd-powered match results, player profiles, and memories made permanent—celebrate and share your school’s journey.",
    image: "/BannerImg/slide 2.jpg",
    cta: "See Today's Highlights",
    link: "/events",
  },
  {
    id: 3,
    title: "Kenya's Next Talent Pipeline",
    subtitle: "Data-Driven Discovery",
    description:
      "Turning pride into opportunity: the region's first-ever structured digital database for scouts, scholarships, and sponsors. We make every achievement count.",
    image: "/BannerImg/slide3.jpg",
    cta: "View Talent",
    link: "/players",
  },
  {
    id: 4,
    title: "Diaspora & Alumni—Stay Connected",
    subtitle: "Follow, Cheer, Belong",
    description:
      "Whether you’re a parent, fan, or alumnus at home or abroad, never miss a match or story again. Connect with your team, relive rivalries, and support the next generation.",
    image: "/BannerImg/slide4.jpg",
    cta: "Find Your School",
    link: "/schools",
  },
  {
    id: 5,
    title: "Community Powered. Community Owned.",
    subtitle: "Every Player, Every School, Every Achievement",
    description:
      "Our ecosystem is made by teachers, coaches, and students across Siaya & Kisumu—crowdsourced journalism that ensures lasting recognition, real-world value, and local pride.",
    image: "/BannerImg/slide5.jpg",
    cta: "Become a Contributor",
    link: "/contribute",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
    }),
  };

  return (
    <section className="relative bg-gray-900 h-[70vh] md:h-[80vh] lg:h-[90vh] mt-1 max-h-[900px] overflow-hidden pt-20">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate={currentSlide === index ? "center" : "exit"}
          className="absolute inset-0 flex items-center"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/100 via-black/50 to-transparent"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover absolute"
            loading="eager"
          />

          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.span
                className="text-yellow-500 font-medium mb-2 block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {slide.subtitle}
              </motion.span>
              <h2 className="text-3xl md:text-6xl font-bold text-white  mb-4 font-serif tracking-tight leading-tight">
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#fbfafd] mb-8 max-w-xl sm:max-w-lg">
                {slide.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  to={slide.link}
                  className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-colors gap-2"
                >
                  {slide.cta}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-yellow-400 w-6"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
};

export default Banner;
