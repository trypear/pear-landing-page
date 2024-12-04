"use client";

import { motion } from "framer-motion";
import { Github, ShieldCheck, Handshake, Server } from "lucide-react";

export default function OpenSource() {
  const transparencyFeatures = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "Public Repositories",
      description: "See every line of our code on our public repos.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Code Privacy",
      description: "We never store your code, ensuring complete privacy.",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Zero Data Retention",
      description: "ZDR policy with Anthropic for enhanced security.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Self-Hosting Option",
      description: "Self-host server available for Enterprise users.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-2 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 p-8 md:p-12"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-emerald-900 md:text-4xl">
            Open source is{" "}
            <span className="text-emrald-700 animate-pulse">transparency.</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {transparencyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-white/20 rounded-full p-2 text-emerald-900">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-emerald-900">
                    {feature.title}
                  </h3>
                  <p className="text-md text-emerald-800">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
