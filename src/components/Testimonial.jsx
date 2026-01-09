import { motion } from "framer-motion";
import chefImg from "../../assets/Foods/chef.jpg";
import TestimonialSlider from "./TestimonialSlider";

const testimonialsData = [
  {
    message:
      "Sansiddhi helped us connect with experienced professionals who delivered value from day one.",
    name: "Amit Verma",
    role: "HR Manager, Private Firm",
  },
  {
    message:
      "After retirement, I found meaningful work through Sansiddhi without stress or long commitments.",
    name: "R. K. Sharma",
    role: "Retired Banking Professional",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
];

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
  },
};

const Testimonial = () => {
  return (
    <section className="w-full bg-linear-to-r from-green-900/70 to-black/80 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            variants={leftVariants}
            initial="hidden" // reload animation
            whileInView="visible" // scroll animation
            viewport={{ once: false, amount: 0.4 }}
            className="relative h-80 rounded-3xl overflow-hidden"
          >
            <img
              src={chefImg}
              alt="Chef preparing food"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent"></div>

            {/* Play Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center cursor-pointer transition">
                <span className="text-white text-2xl ml-1">▶</span>
              </div>
            </motion.div>

            {/* Decorative Border */}
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-20 h-40 border-r-4 border-orange-500 rounded-full"></span>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="text-center lg:text-left"
          >
            <p className="text-green-500 font-semibold tracking-wide uppercase mb-2">
              Testimonials
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What Our Clients Say
            </h2>

            <TestimonialSlider testimonials={testimonialsData} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
