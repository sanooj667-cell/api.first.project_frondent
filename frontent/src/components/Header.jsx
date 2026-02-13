import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-400">
          MyWebsite
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 font-medium">
            <li>
                <Link to={"/"}>Home</Link>
            </li>

            <li>
                <Link to={"/about"}>About</Link>
            </li>
            
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;

