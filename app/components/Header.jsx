// app/components/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode was previously set in localStorage
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center text-xl font-bold text-green-700 dark:text-green-300"
        >
          <i className="ri-leaf-line mr-2"></i> NatureNest
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="#home" className="hover:text-green-600">
            Home
          </Link>
          <Link href="#about" className="hover:text-green-600">
            About
          </Link>
          <Link href="#products" className="hover:text-green-600">
            Products
          </Link>
          <Link href="#faqs" className="hover:text-green-600">
            FAQs
          </Link>
          <Link href="#contact" className="hover:text-green-600">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? (
              <i className="ri-sun-line"></i>
            ) : (
              <i className="ri-moon-line"></i>
            )}
          </button>
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow p-4">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-2xl">
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="mt-4 flex flex-col space-y-4">
            <Link href="#home" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#about" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#products" onClick={toggleMenu}>
              Products
            </Link>
            <Link href="#faqs" onClick={toggleMenu}>
              FAQs
            </Link>
            <Link href="#contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
