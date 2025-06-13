import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/iete_logo.png";

function Navbar() {
  return (
    <header className="shadow sticky top-0 z-50">
      <nav className="bg-black p-1" style={{ height: 100 }}>
        <div className="grid gap-1 sm:grid-cols-12">

          {/* Left Side Navigation Links */}
          <div className="h-20 sm:col-span-4 sm:col-start-2 hidden sm:flex justify-around items-center">
            <Link
              to="/event"
              className="text-white text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              Events
            </Link>
            <Link
              to="/project"
              className="text-white text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-white text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              About
            </Link>
          </div>

          {/* Logo */}
          <div className="bg-black sm:col-span-2 flex justify-center items-center">
            <img
              src={logo}
              alt="IETE Logo"
              style={{ height: 80, width: 80 }}
              className="rounded-full"
            />
          </div>

          {/* Right Side Navigation Links */}
          <div className="h-20 sm:col-span-4 hidden sm:flex justify-around items-center">
            <Link
              to="/department"
              className="text-white text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              Departments
            </Link>
            <Link
              to="/team"
              className="text-white text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              Team
            </Link>
            <Link
              to="/gallery"
              className="text-white text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              Gallery
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
