"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Personalized Assessment",
    description:
      "We begin with a private, one-on-one assessment to understand your needs, challenges, and goals.",
  },
  {
    number: "02",
    title: "Customized Treatment Plan",
    description:
      "Using your assessment, we design a tailored plan that may include detox, therapy, wellness activities, and mental health support.",
  },
  {
    number: "03",
    title: "Ongoing Support & Recovery",
    description:
      "Our team supports you throughout your program, helping you build healthy habits and a strong foundation for long-term recovery.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#5F7A8C] text-lg font-semibold uppercase tracking-wider">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mt-4 mb-6">
              Your Path to Recovery
            </h2>
            <p className="text-xl text-[#374151] leading-relaxed">
              At New Beginnings Detox & Recovery, we make the journey to healing
              simple and supportive through three clear steps.
            </p>
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
                src="/path-to-recovery.webp"
                alt="Successful recovery journey"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Success badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#5F7A8C] text-white rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="text-3xl font-bold">Success</div>
              <div className="text-white/80">Starts Here</div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#E6E1D6] -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-[#F7F3EA] rounded-2xl p-8 border border-[#E6E1D6] h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#5F7A8C] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                    <div className="h-px bg-[#E6E1D6] flex-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#374151] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
