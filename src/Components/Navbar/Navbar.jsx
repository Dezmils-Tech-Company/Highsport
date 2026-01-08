import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import Logo from "../Shared/Logo";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import api from "../../api/axiosInstance";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (user?.email) {
      api
        .get(`/users/${user.email}`)
        .then((res) => setUserData(res.data))
        .catch((err) => console.error("User fetch failed:", err));
    }
  }, [user]);

  const handleLogout = () => {
    Swal.fire({
      text: "Log out of your account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Logged out",
              timer: 1200,
              showConfirmButton: false,
            });
            navigate("/");
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Logout Failed",
              text: error.message,
            });
          });
      }
    });
  };

  const navLinksLoggedOut = [
    { name: "Home", path: "/" },
    { name: "Results Table", path: "/courts" },
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about" },
  ];

  const navLinksLoggedIn = [
    { name: "Home", path: "/" },
    { name: "Courts", path: "/courts" },
    { name: "Events", path: "/events" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const navLinks = user ? navLinksLoggedIn : navLinksLoggedOut;

  // --- Responsive "scrollable" nav bar for mobile ---
  // The main nav changes to horizontal scrollable below the logo/header for small screens.

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300
        ${isScrolled ? "bg-red-800 shadow-md" : "bg-red-700/90 backdrop-blur"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14 md:h-16">
        {/* LEFT SIDE - LOGO */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {/* CENTER: Desktop Menu */}
        <div className="hidden lg:flex gap-6 font-serif">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-2 py-1 rounded transition 
                ${
                  isActive
                    ? "bg-green-600 text-white shadow"
                    : "hover:bg-black/20 hover:text-yellow-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* RIGHT SIDE - NOTIFICATIONS/AVATAR */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            aria-label="Notifications"
            className="rounded-full text-lg hover:bg-green-600/20 hover:text-white transition p-2"
            onClick={() => navigate("/announcements")}
          >
            <FiBell />
          </button>
          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-9 h-9 rounded-full overflow-hidden border-2 border-green-700 cursor-pointer"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <img
                  src={
                    userData?.image ||
                    "https://ui-avatars.com/api/?name=" +
                      encodeURIComponent(user.displayName || "User") +
                      "&background=d32f2f&color=fff&size=64"
                  }
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </button>
              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-blue-900 border border-red-700 rounded shadow-md z-50">
                  <div className="px-4 py-2 border-b border-gray-200 text-sm font-semibold select-none">
                    {userData?.name || user.displayName || "User"}
                  </div>
                  <NavLink
                    to="/dashboard"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-800"
                  >
                    Dashboard
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-red-100 hover:text-red-900"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE SCROLLABLE NAV BAR */}
      <div className="lg:hidden border-t border-white/30 bg-gradient-to-r from-green-700/20 via-red-700 to-black/30">
        <div className="flex gap-1 overflow-x-auto px-2 py-2 scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-transparent">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex-shrink-0 px-2 py-0.5 rounded-full font-semibold text-sm focus:outline-none transition-all whitespace-nowrap
                ${
                  isActive
                    ? "bg-green-500 text-black border-2 border-green-100 shadow-inner"
                    : "bg-white text-red-800 border border-red-700 hover:bg-yellow-300 hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-green-700 via-white to-black"></div>
      </div>
    </nav>
  );
};

export default Navbar;