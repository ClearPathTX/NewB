"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facilityImages = [
  { src: "/facility-1.webp", alt: "Outdoor patio area" },
  { src: "/facility-2.webp", alt: "Cozy living room" },
  { src: "/facility-3.webp", alt: "Comfortable bedroom" },
  { src: "/facility-4.webp", alt: "Modern bathroom" },
  { src: "/facility-5.webp", alt: "Full kitchen" },
];

export default function Facility() {
  return (
    <section id="facility" className="py-20 md:py-32 bg-[#F7F3EA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#5F7A8C] text-lg font-semibold uppercase tracking-wider">
            Facility & Amenities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6">
            Our Facility
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto">
            New Beginnings Detox & Recovery offers a peaceful, home-like setting
            for just six residents, ensuring personalized care and a close-knit
            sense of community.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          {facilityImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden shadow-lg ${
                index === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-64 md:h-full" : "h-48 md:h-56"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-[#E6E1D6]"
          >
            <h3 className="text-2xl font-bold text-[#1F2937] mb-6">
              Our facility features:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-[#5F7A8C] rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-[#374151]">Cozy common areas</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#5F7A8C] rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-[#374151]">Spacious bedrooms</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#5F7A8C] rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-[#374151]">Modern bathrooms</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#5F7A8C] rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-[#374151]">Chef-prepared meals</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#5F7A8C] rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-[#374151]">Outdoor patio & seating</span>
              </li>
            </ul>
            <p className="mt-6 text-lg text-[#374151] leading-relaxed">
              Every detail is designed to help you feel safe, comfortable, and
              supported on your journey to recovery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#5F7A8C] to-[#516A7A] rounded-2xl p-8 md:p-12 text-white">
              <div className="text-center">
                <div className="text-7xl font-bold mb-4">6</div>
                <div className="text-2xl font-semibold mb-4">
                  Residents Maximum
                </div>
                <p className="text-white/90 text-lg">
                  Our intimate setting ensures you receive the individualized
                  attention and care you deserve, fostering deep connections and
                  meaningful recovery.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/80">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-white/80">Personalized Care</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
