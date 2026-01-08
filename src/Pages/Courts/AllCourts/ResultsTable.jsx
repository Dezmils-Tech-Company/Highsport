import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft, FaHockeyPuck } from "react-icons/fa";
import { MdSportsSoccer, MdSportsRugby, MdSportsBasketball } from "react-icons/md";
import { GiRunningShoe, GiTennisRacket } from "react-icons/gi";
import { gameResultsData } from "./gameResultsData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ResultsTable = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  const recentResults = [
    {
      id: 1,
      homeTeam: "Kisumu High",
      awayTeam: "Nyanza Girls",
      homeScore: 2,
      awayScore: 1,
      date: "Jan 4, 2026",
      sport: "Football",
      status: "Completed",
    },
    {
      id: 2,
      homeTeam: "Maseno School",
      awayTeam: "Moi Girls Kisumu",
      homeScore: 15,
      awayScore: 12,
      date: "Jan 3, 2026",
      sport: "Rugby",
      status: "Completed",
    },
    {
      id: 3,
      homeTeam: "Kisumu High",
      awayTeam: "Maseno School",
      homeScore: 3,
      awayScore: 0,
      date: "Jan 2, 2026",
      sport: "Hockey",
      status: "Completed",
    },
    {
      id: 4,
      homeTeam: "Nyanza Girls",
      awayTeam: "Moi Girls Kisumu",
      homeScore: 18,
      awayScore: 15,
      date: "Jan 1, 2026",
      sport: "Netball",
      status: "Completed",
    },
    {
      id: 5,
      homeTeam: "Kisumu High",
      awayTeam: "Maseno School",
      homeScore: 52,
      awayScore: 48,
      date: "Dec 30, 2025",
      sport: "Athletics",
      status: "Completed",
    },
    {
      id: 6,
      homeTeam: "Nyanza Girls",
      awayTeam: "Kisumu High",
      homeScore: 0,
      awayScore: 0,
      date: "Feb 29, 2026",
      sport: "Tennis",
      status: "upcoming",
    },
  ];

  const currentGame = gameResultsData[currentGameIndex];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500/5 text-green-600";
      case "ongoing":
        return "bg-red-500/5 text-red-600";
      case "upcoming":
        return "bg-blue-500/5 text-blue-600";
      default:
        return "bg-gray-500/5 text-gray-600";
    }
  };

  const getSportIcon = (sport) => {
    const iconProps = { size: 20, className: "mr-2" };
    const icons = {
      Football: <MdSportsSoccer {...iconProps} />,
      Rugby: <MdSportsRugby {...iconProps} />,
      Hockey: <FaHockeyPuck {...iconProps} />,
      Netball: <MdSportsBasketball {...iconProps} />,
      Athletics: <GiRunningShoe {...iconProps} />,
      Tennis: <GiTennisRacket {...iconProps} />,
    };
    return icons[sport] || "🏆";
  };

  return (
    <section className="bg-white  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 font-inter">
            Latest <span className="text-green-600">Game highlights</span>
          </h2>
          <p className="text-black text-xm max-w-2xl mx-auto">
            Live standings and results from inter-school championships across Kisumu county
          </p>
        </motion.div>{/* Results Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: ".results-button-next",
                prevEl: ".results-button-prev",
              }}
              className="w-full"
            >
              {recentResults.map((result) => (
                <SwiperSlide key={result.id}>
                  <div className="bg-cyan-900/10 border  border-green-500/30 rounded-xl p-8 h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    {/* Sport Badge & Status */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full flex items-center">
                        { getSportIcon(result.sport) && getSportIcon(result.sport)} {result.sport}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-semibold  uppercase">
                          {getStatusColor(result.status) && (
                            <span className={`${getStatusColor(result.status)} px-2 py-1 rounded-full`}>
                              {result.status}
                            </span>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Score Display */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between gap-4">
                        {/* Home Team */}
                        <div className="flex-1 text-center">
                          <div className="text-sm font-semibold text-black mb-3 line-clamp-2">
                            {result.homeTeam}
                          </div>
                          <div className="text-5xl font-black text-red-600 drop-shadow-lg">
                            {result.homeScore}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                            vs
                          </div>
                          <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
                        </div>

                        {/* Away Team */}
                        <div className="flex-1 text-center">
                          <div className="text-sm font-semibold text-black mb-3 line-clamp-2">
                            {result.awayTeam}
                          </div>
                          <div className="text-5xl font-black text-red-600 drop-shadow-lg">
                            {result.awayScore}
                          </div>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="flex items-center justify-center gap-2 pt-6 border-t border-gray-700">
                        <div className="w-1 h-1 rounded-full bg-green-600"></div>
                        <span className="text-xs text-black font-medium">
                          {result.date}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-green-600"></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation */}
            <button className="results-button-prev hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] -ml-6 opacity-0 group-hover:opacity-100 duration-300">
              <FaArrowLeft className="w-5 h-5" />
            </button>
            <button className="results-button-next hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] -mr-6 opacity-0 group-hover:opacity-100 duration-300">
              <FaArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

        {/* Game Selection Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 mb-12"
        >
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            {/* Previous Button */}
            <button
              onClick={() =>
                setCurrentGameIndex(
                  (prev) => (prev - 1 + gameResultsData.length) % gameResultsData.length
                )
              }
              className="hidden sm:flex px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition items-center gap-2"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Game Slider */}
            <div className="flex gap-2 overflow-x-auto pb-2 flex-1">
              {gameResultsData.map((game, idx) => (
                <button
                  key={game.id}
                  onClick={() => setCurrentGameIndex(idx)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all flex-shrink-0 flex items-center gap-2 ${
                    currentGameIndex === idx
                      ? " bg-red-600  text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {getSportIcon(game.sport)}
                  {game.sport}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentGameIndex((prev) => (prev + 1) % gameResultsData.length)
              }
              className="hidden sm:flex px-4 py-2  bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition items-center gap-2"
            >
              <span className="hidden sm:inline">Next</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          
        </motion.div>

        {/* Results Table */}
<motion.div
  key={currentGame.id}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative"
>
  {/* Table Container  */}
  <div className="bg-blue-50 rounded-xl overflow-hidden border border-blue-200 shadow-xl">
    {/* Table Title Section */}
    <div className="bg-blue-100 px-6 sm:px-8 py-5 border-b border-blue-200">
      <div className="flex items-center gap-3">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1737]">
            {currentGame.sport} <span className="text-red-600">Standings</span>
          </h3>
          <p className="text-[#0a1737] text-sm mt-1 opacity-70">Amadi Tounament table</p>
        </div>
      </div>
    </div>
    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-100 border-b border-blue-200">
            <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a1737]">
              Rank
            </th>
            <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a1737]">
              School
            </th>
            <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a1737] hidden sm:table-cell">
              W
            </th>
            <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a1737] hidden sm:table-cell">
              D
            </th>
            <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a1737] hidden sm:table-cell">
              L
            </th>
            <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a1737] hidden lg:table-cell">
              GF
            </th>
            <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a1737] hidden lg:table-cell">
              GA
            </th>
            <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a1737]">
              Points
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-100">
          {currentGame.results.map((result, idx) => (
            <tr
              key={idx}
              className={`transition-all duration-200 hover:bg-blue-100`}
            >
              {/* Position Badge */}
              <td className="px-4 sm:px-6 py-4">
                <div className="flex items-center justify-center">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded font-bold text-xs bg-red-600 text-white`}
                  >
                    {idx + 1}
                  </span>
                </div>
              </td>
              {/* School Name */}
              <td className="px-1 sm:px-5 py-1">
                <p className="text-[#0a1737] font-semibold text-sm sm:text-base">
                  {result.school}
                </p>
                <p className="text-[#0a1737] text-xs mt-1 hidden sm:block opacity-60">
                  {result.wins + result.draws + result.losses} matches
                </p>
              </td>
              {/* Stats - Wins */}
              <td className="px-4 sm:px-6 py-4 text-center hidden sm:table-cell">
                <span className="text-[#0a1737] font-semibold">{result.wins}</span>
              </td>
              {/* Stats - Draws */}
              <td className="px-4 sm:px-6 py-4 text-center hidden sm:table-cell">
                <span className="text-[#0a1737] font-semibold">{result.draws}</span>
              </td>
              {/* Stats - Losses */}
              <td className="px-4 sm:px-6 py-4 text-center hidden sm:table-cell">
                <span className="text-[#0a1737] font-semibold">{result.losses}</span>
              </td>
              {/* Goals For */}
              <td className="px-4 sm:px-6 py-4 text-center hidden lg:table-cell">
                <span className="text-[#0a1737] font-semibold">{result.gf}</span>
              </td>
              {/* Goals Against */}
              <td className="px-4 sm:px-6 py-4 text-center hidden lg:table-cell">
                <span className="text-[#0a1737] font-semibold">{result.ga}</span>
              </td>
              {/* Points */}
              <td className="px-4 sm:px-6 py-4 text-center">
                <span className="font-bold text-red-600 text-lg">
                  {result.points}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* Table Footer with Legend */}
    <div className="bg-blue-100 px-6 sm:px-8 py-4 border-t border-blue-200">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-[#0a1737] opacity-70">
        <div className="flex items-center gap-2">
          <span className="font-semibold">W</span> - Wins
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">D</span> - Draws
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">L</span> - Losses
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="font-semibold">GF</span> - Goals For
        </div>
      </div>
    </div>
  </div>
</motion.div>

        
      </div>

      {/* Custom Swiper styles */}
      <style>{`
        .swiper-pagination-bullet {
          background: #06b6d4;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #06b6d4;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default ResultsTable;
