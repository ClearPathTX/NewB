"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Detox Services",
    description:
      "We carefully manage withdrawal symptoms with medical supervision and compassion, creating personalized plans that address substance use and any co-occurring mental health concerns.",
    image: "/detox.webp",
  },
  {
    title: "Residential Treatment",
    description:
      "Our Residential Treatment program provides a safe, structured, and healing environment for individuals ready to take the next step after detox.",
    image: "/residential.webp",
  },
  {
    title: "Dual Diagnosis Treatment",
    description:
      "Because mental health and substance use often go hand in hand, we treat both simultaneously with personalized, integrated care plans.",
    image: "/dual-diagnosis.webp",
  },
  {
    title: "Mental Health Services",
    description:
      "We offer compassionate support for anxiety, depression, trauma, and other emotional challenges—helping you regain balance and clarity.",
    image: "/mental-health.webp",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#F7F3EA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#5F7A8C] text-lg font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6">
            Why Choose New Beginnings?
          </h2>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto">
            We offer medically supervised detox and comprehensive recovery
            programs tailored to your needs. Our experienced staff brings
            compassion, respect, and understanding to every interaction—ensuring
            you feel supported throughout your journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden border border-[#E6E1D6] hover:shadow-lg transition-shadow"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-[#374151] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
