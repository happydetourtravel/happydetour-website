import { useState, useEffect } from "react";

const LOGO_URL = "https://static.websitebuilder-cdn.com/ff4558209215a440/media/img/logo.30fb1e8b14fa58c29568cadc94d36a72b9c0ae687633fcc7be077d2afe4d4a70.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" }
];

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero">
          <img src={LOGO_URL} alt="Happy Detour Travel" className="h-16" />
        </a>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-gray-700 hover:text-amber-600">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
