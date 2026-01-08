import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const eventTypes = ["All", "Upcoming", "Ongoing", "Featured", "Past Glory"];

const EventWall = () => {
  const [activeType, setActiveType] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from public/events.json
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load events:", err);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      });
  }, []);

  const filteredEvents =
    activeType === "All"
      ? events
      : events.filter((event) => event.type === activeType);



  if (loading) {
    return (
      <div className="bg-white py-24 px-4 text-center min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-xl">Loading events...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-24 px-4 text-center min-h-screen flex items-center justify-center">
        <div className="text-red-400 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-white py-12 md:py-24 px-4 sm:px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         
          <h1 className="text-3xl sm:text-5xl md:text-3xl lg:text-5xl font-extrabold text-black mt-0 mb-2 font-serif">
            <span className="text-red-600">Regional high school</span> Games and Sports center
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 md:mb-8"></div>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm sm:text-md md:text-xl text-black max-w-2xl mx-auto text-center leading-relaxed italic"
          >
            Immerse yourself in the most exclusive High School Games and sports events
          </motion.p>
        </motion.div>
      </div>

      {/* Filter Tabs */}
      <motion.div
        className="flex justify-center mb-8 md:mb-16 bg-gray-200 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className=" flex flex-nowrap gap-2 sm:gap-4 overflow-x-auto px-3 py-2 scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-transparent">
          {eventTypes.map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveType(type)}
              className={`px-4 sm:px-6 py-1 sm:py-2 border lg:border-none border-gray-700 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeType === type
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-black hover:text-white"
              }`}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No events found for this category
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Event Card */}
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all shadow-lg hover:shadow-2xl flex flex-col h-96">
                  {/* Image */}
                  <div className="h-48 w-full relative overflow-hidden bg-gray-800 flex-shrink-0">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredCard === event.id ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center gap-2">
                        <span className="text-yellow-400 text-xf font-bold tracking-wider">
                          {event.type.toUpperCase()}
                        </span>
                        <span className="text-gray-400 text-xf flex items-center">  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                          {event.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>

                      <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12 md:mt-20"
      >
        
      </motion.div>
    </div>
  );
};

export default EventWall;
