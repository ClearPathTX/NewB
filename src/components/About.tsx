"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#5F7A8C] text-lg font-semibold uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6">
              Your Path to Healing and Hope
            </h2>
            <p className="text-xl text-[#374151] leading-relaxed mb-6">
              Every person&apos;s journey to recovery is unique, and at New
              Beginnings Detox & Recovery, we honor your individual story. Our
              peaceful Sylmar location provides the perfect backdrop for
              transformation—nestled in a quiet neighborhood away from the
              stresses of everyday life.
            </p>
            <p className="text-xl text-[#374151] leading-relaxed mb-8">
              We believe in treating the whole person, not just the addiction.
              Our integrated approach combines proven medical care with
              emotional support and practical life skills. From the moment you
              walk through our doors, you&apos;ll feel the difference that
              personalized, compassionate care can make.
            </p>
            <Link
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 border-2 border-[#5F7A8C] text-[#5F7A8C] hover:bg-[#5F7A8C] hover:text-white px-8 py-4 rounded-full transition-colors text-xl font-semibold"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Today
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about.webp"
                alt="Compassionate care and support"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-[#E6E1D6] max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-[#5F7A8C] rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1F2937]">100%</div>
                  <div className="text-[#374151]">Personalized Care</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
