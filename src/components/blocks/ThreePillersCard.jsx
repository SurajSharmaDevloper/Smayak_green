import { motion } from "framer-motion";
import Heading from "../base/Heading";
import img1 from "../../assets/HOME/1st.png";
import img2 from "../../assets/HOME/2nd.png";
import img3 from "../../assets/HOME/3rd.png";

export default function ThreePillarsCards() {
  /* ---------------------------
     VARIANTS
  --------------------------- */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.section
      className="bg-background py-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center flex flex-col items-center max-w-3xl mx-auto mb-10"
        >
          <Heading title="Our Three Pillars" center />
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Three interconnected pillars working together to preserve, revive,
            and deliver India’s traditional and healthy food systems.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* PILLAR 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.05,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="bg-white flex flex-col justify-between items-center
                       rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-50 h-50 mb-5 bg-amber-200 border border-amber-300 rounded-full p-3 flex items-center justify-center">
              <img className="w-35 h-35" src={img1} alt="Knowledge Bank" />
            </div>

            <h3 className="text-lg w-full font-semibold text-gray-900 mb-2">
              Traditional Dishes Knowledge Bank
            </h3>

            <p className="text-gray-600 w-full text-sm leading-relaxed">
              A living digital repository documenting India’s traditional dishes
              through structured research and community-contributed knowledge.
            </p>

            <ul className="mt-4 w-full text-start space-y-2 text-sm text-gray-700">
              <li>• Self-documented research</li>
              <li>• Crowd-sourced family wisdom</li>
            </ul>
          </motion.div>

          {/* PILLAR 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.05,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="bg-white flex flex-col justify-between items-center
                       rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-50 h-50 mb-5 bg-red-200 border border-red-300 rounded-full p-3 flex items-center justify-center">
              <img className="w-35 h-35" src={img2} alt="Outreach" />
            </div>

            <h3 className="text-lg w-full font-semibold text-gray-900 mb-2">
              Outreach & Capacity Building
            </h3>

            <p className="text-gray-600 w-full text-sm leading-relaxed">
              Turning documented knowledge into awareness, skills, and
              real-world adoption through community engagement.
            </p>

            <ul className="mt-4 w-full text-start space-y-2 text-sm text-gray-700">
              <li>• Education & storytelling</li>
              <li>• Revival of traditional practices</li>
            </ul>
          </motion.div>

          {/* PILLAR 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.05,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="bg-white flex flex-col justify-between items-center
                       rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-50 h-50 mb-5 bg-green-200 border border-green-300 rounded-full p-3 flex items-center justify-center">
              <img className="w-35 h-35" src={img3} alt="Supply Chain" />
            </div>

            <h3 className="text-lg w-full font-semibold text-gray-900 mb-2">
              Accessibility & Supply Chain
            </h3>

            <p className="text-gray-600 w-full text-sm leading-relaxed">
              Bridging the gap between knowledge and access by enabling
              ingredient sourcing and dish availability.
            </p>

            <ul className="mt-4 w-full text-start space-y-2 text-sm text-gray-700">
              <li>• Authentic ingredient sources</li>
              <li>• Traditional dishes in homes & restaurants</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
