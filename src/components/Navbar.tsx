"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" }
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      return false;
    }
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-6 h-6 rounded overflow-hidden border border-zinc-800 flex items-center justify-center transition-colors group-hover:border-zinc-700 relative">
                <Image src="/rk-logo.png" alt="RK Dev Studios Logo" width={24} height={24} className="object-cover" />
              </div>
              <span className="font-bold text-xs sm:text-sm tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                RK Dev Studios
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-150 ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:beatbounce80@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 rounded border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-[10px] font-bold uppercase tracking-wider text-white transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-zinc-400 hover:text-white focus:outline-none p-1.5"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-900 bg-[#000000] px-6 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="mailto:beatbounce80@gmail.com"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center py-2.5 rounded border border-zinc-800 bg-zinc-950 text-xs font-bold uppercase tracking-wider text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
