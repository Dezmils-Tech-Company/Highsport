import React from "react";

// Core values / strengths of your platform (icons/cards can be customized):
const systemCoreCards = [
  {
    icon: "🏆",
    title: "Legacy",
    desc: "Every match and record is preserved for generations to come.",
    color: "bg-blue-500",
  },
  {
    icon: "🌍",
    title: "Visibility",
    desc: "Local talent and achievements seen by the world.",
    color: "bg-blue-600 text-white",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "Built by teachers, athletes, coaches—owned by all.",
    color: "bg-blue-700 text-white",
  },
  {
    icon: "💡",
    title: "Discovery",
    desc: "Turning grassroots pride into opportunity and national attention.",
    color: "bg-blue-900 text-white",
  },
  {
    icon: "🚀",
    title: "Opportunity",
    desc: "Scholarships, direct sponsorship, and real scouting networks.",
    color: "bg-blue-800 text-white",
  },
  {
    icon: "🔗",
    title: "Connections",
    desc: "Families, alumni, diaspora—follow and support their teams.",
    color: "bg-blue-700 text-white",
  },
  {
    icon: "📝",
    title: "Empowerment",
    desc: "Crowdsourced journalism—anyone can be a contributor.",
    color: "bg-blue-600 text-white",
  },
];

// Sleek, small, horizontally scrolling cards:
const CoreValuesCarousel = () => (
  <section className="py-4 px-4 bg-gradient-to-b from-green-100 to-white text-white">
    <h2 className="text-3xl text-red-500 font-extrabold mb-6 text-center">Our Core Values</h2>
    <div className="overflow-x-auto pb-2">
      <ul className="flex gap-5 flex-nowrap">
        {systemCoreCards.map((card, idx) => (
          <li
            key={card.title}
            className={`min-w-[220px] max-w-xs px-5 py-6 rounded-xl shadow-md flex flex-col items-center justify-center
            ${card.color} transition hover:scale-105 hover:shadow-xl cursor-pointer`}
            style={{ flex: "0 0 220px" }}
          >
            <div className="text-3xl mb-2">{card.icon}</div>
            <div className="font-bold font-impact text-base mb-1">{card.title}</div>
            <div className="text-sm text-center opacity-90">{card.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CoreValuesCarousel;