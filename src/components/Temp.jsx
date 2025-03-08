import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left section: Logo + Navigation */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="src/assets/images/logo.png"
              alt="Company Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Nav Menu */}
          <nav className="hidden md:flex space-x-4">
            {[
              { label: "Work", href: "#" },
              { label: "Services", href: "#" },
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Blog", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  relative 
                  py-1 
                  hover:text-lime-300 
                  transition-colors 
                  duration-200
                "
              >
                {item.label}
                {/* Highlight underline on hover */}
                <span
                  className="
                    absolute 
                    left-0 
                    bottom-0 
                    h-0.5 
                    w-0 
                    bg-lime-300 
                    transition-all 
                    duration-200 
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>
        </div>

        {/* Right section: Search + Sign In */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="
                bg-gray-800
                rounded-full
                py-1
                px-3
                pr-9
                text-sm
                placeholder-gray-400
                text-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-lime-300
              "
            />
            <button
              type="submit"
              className="
                absolute 
                right-1 
                top-1/2 
                -translate-y-1/2 
                text-gray-400 
                hover:text-gray-200
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.94 4.94a7.5 7.5 0 0011.8 9.8z"
                />
              </svg>
            </button>
          </div>

          {/* Cart Icon (optional; hidden if you don’t need it) */}
          <button className="hidden sm:flex items-center text-gray-400 hover:text-gray-200">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13L5.4 5M10 21a1 1 0 11-2 0 1 1 0 012 0zm9 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>

          {/* Sign In */}
          <button
            type="button"
            className="
              bg-gray-100
              text-gray-900
              hover:bg-gray-200
              rounded-full
              px-4
              py-1
              transition-colors
              duration-200
            "
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
