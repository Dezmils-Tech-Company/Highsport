import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const eventTypes = ["All", "Upcoming", "Ongoing", "Featured", "Past Glory"];

const EventWall = () => {
  const [activeType, setActiveType] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  // Mobile breakpoint threshold (matches Tailwind 'sm' = 640px)
  const MOBILE_BREAKPOINT = 640;
  // approximate mobile visible area for ~3 average cards (used as container maxHeight)
  // we avoid forcing card heights; this value is only to limit container height and enable vertical scrolling
  const APPROX_MOBILE_VISIBLE_HEIGHT = 3 * 220 + 2 * 12; // approx 3 cards ~220px each + gaps

  useEffect(() => {
    let mounted = true;
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          setEvents(Array.isArray(data) ? data : []);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Failed to load events:", err);
        if (mounted) {
          setError("Failed to load events. Please try again later.");
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      }
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const filteredEvents =
    activeType === "All"
      ? events
      : events.filter((event) => event.type === activeType);

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-gray-950 via-gray-700 to-gray-600 py-24 px-4 text-center min-h-screen flex items-center justify-center">
        <div className="text-yellow-400 text-xl">Loading events...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-b from-gray-950 via-gray-700 to-gray-600 py-24 px-4 text-center min-h-screen flex items-center justify-center">
        <div className="text-red-400 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-700 to-gray-600 py-12 md:py-24 px-4 sm:px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-serif">
            <span className="text-yellow-400">Regional high school</span> Games and Sports center
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 md:mb-8"></div>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm sm:text-md md:text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed italic"
          >
            Immerse yourself in the most exclusive High School Games and sports events
          </motion.p>
        </motion.div>
      </div>

      {/* Filter Tabs */}
      <motion.div
        className="flex justify-center mb-8 md:mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 bg-gray-900/50 p-1 rounded-full border border-gray-800">
          {eventTypes.map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveType(type)}
              className={`px-3 sm:px-5 py-1 border lg:border-none border-gray-700 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeType === type
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Events: mobile vertical scroll with dynamic card heights OR desktop Swiper */}
      <div className="max-w-7xl mx-auto relative">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No events found for this category</div>
        ) : isMobile ? (
          // Mobile: vertical stack with dynamic card heights, container limited to approximate height showing ~3 cards and scrollable
          <div
            className="space-y-4 overflow-y-auto px-2"
            style={{
              maxHeight: `${APPROX_MOBILE_VISIBLE_HEIGHT}px`,
            }}
            aria-label="Events list (mobile)"
          >
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card: no fixed height, reduced padding to allow dynamic sizing */}
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all shadow-lg">
                  {/* Image: constrained by maxHeight but not fixed; preserves aspect and reduces space usage */}
                  {event.image && (
                    <div className="w-full relative overflow-hidden bg-gray-800">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto object-cover"
                        style={{ maxHeight: 220 }}
                        animate={{ scale: hoveredCard === event.id ? 1.02 : 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Content: reduced padding, allow content to expand naturally */}
                  <div className="p-3 sm:p-4">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-yellow-400 text-xs font-semibold tracking-wider">
                        {event.type?.toUpperCase?.() ?? ""}
                      </span>
                      <span className="text-gray-400 text-xs flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs">{event.date}</span>
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-white mt-2">{event.title}</h3>

                    {/* allow full description on mobile (no line clamp) */}
                    <p className="text-gray-300 text-sm leading-relaxed mt-2 whitespace-normal">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Desktop / tablet: Swiper horizontal (no modules import to avoid bundler export issues)
          <>
            {/* Custom desktop navigation buttons (hidden on small screens) */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex">
              <button
                aria-label="Previous"
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 16L6 10l6-6" />
                </svg>
              </button>
            </div>

            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex">
              <button
                aria-label="Next"
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 4l6 6-6 6" />
                </svg>
              </button>
            </div>

            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              allowTouchMove={true}
              className="py-6"
            >
              {filteredEvents.map((event) => (
                <SwiperSlide key={event.id} className="h-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    onMouseEnter={() => setHoveredCard(event.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Card: allow dynamic height, reduced padding so longer descriptions can expand */}
                    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all shadow-lg">
                      {event.image && (
                        <div className="w-full relative overflow-hidden">
                          <motion.img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-auto object-cover"
                            style={{ maxHeight: 280 }}
                            animate={{ scale: hoveredCard === event.id ? 1.03 : 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                      )}

                      <div className="p-4">
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-yellow-400 text-xs sm:text-sm font-semibold tracking-wider">
                            {event.type?.toUpperCase?.() ?? ""}
                          </span>
                          <span className="text-gray-400 text-xs flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs">{event.date}</span>
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-white mt-2">{event.title}</h3>

                        {/* allow description to expand (no line clamp) */}
                        <p className="text-gray-300 text-sm leading-relaxed mt-2">{event.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12 md:mt-20"
      />
    </div>
  );
};

export default EventWall;