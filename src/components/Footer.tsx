"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="New Beginnings Detox & Recovery"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="#about"
              className="text-white/70 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-white/70 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#facility"
              className="text-white/70 hover:text-white transition-colors"
            >
              Facility
            </Link>
            <Link
              href="#process"
              className="text-white/70 hover:text-white transition-colors"
            >
              Process
            </Link>
            <Link
              href="#contact"
              className="text-white/70 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="text-white/50 text-sm">
            © {new Date().getFullYear()} New Beginnings Detox & Recovery. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
