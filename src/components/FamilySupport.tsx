"use client";

import { motion } from "framer-motion";

export default function FamilySupport() {
  return (
    <section className="py-20 md:py-32 bg-[#5F7A8C]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-white/80 text-lg font-semibold uppercase tracking-wider">
            Family Support
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Your Family&apos;s Journey Too
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Recovery isn&apos;t just your journey—it&apos;s your family&apos;s too. At New
            Beginnings Detox & Recovery, we offer dedicated family programs and
            therapy sessions to help loved ones heal alongside you.
          </p>
          <p className="text-xl text-white/90 leading-relaxed">
            Through education, open communication, and guided support, we help
            families understand addiction and mental health while rebuilding
            trust and connection. Together, we create a strong support system
            for lasting recovery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="bg-white rounded-full p-4 w-fit mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[#5F7A8C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Family Education
            </h3>
            <p className="text-white/80">
              Learn about addiction, recovery, and how to support your loved one
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="bg-white rounded-full p-4 w-fit mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[#5F7A8C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Open Communication
            </h3>
            <p className="text-white/80">
              Build healthy communication patterns and rebuild trust
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="bg-white rounded-full p-4 w-fit mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[#5F7A8C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Guided Support
            </h3>
            <p className="text-white/80">
              Professional guidance for the whole family throughout recovery
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
