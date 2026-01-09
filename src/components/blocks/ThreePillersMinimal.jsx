import { motion } from "framer-motion";
import Heading from "../base/Heading";

const pillars = [
  {
    title: "Traditional Knowledge Bank",
    icon: "📜",
    description:
      "Documenting and validating traditional recipes via research & crowd contributions.",
  },
  {
    title: "Outreach & Capacity",
    icon: "🌱",
    description:
      "Enabling community engagement, awareness, and revival of healthy dishes.",
  },
  {
    title: "Accessibility & Supply Chain",
    icon: "🔗",
    description:
      "Connecting ingredient sources and restaurants for real access to dishes.",
  },
];

export default function ThreePillarsCards() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Three Pillars
        </h2>
        <Heading title="Our Three Pillars" />
        <p className="text-gray-600 mb-10">
          How Samyak Green connects heritage, community, and accessibility.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.15 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
