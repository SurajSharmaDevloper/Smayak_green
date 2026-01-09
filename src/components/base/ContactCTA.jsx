import { motion } from "framer-motion";
import banner from "../../assets/Foods/about.jpg";

const ContactCTA = () => {
  return (
    <motion.section
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* BACKGROUND WITH GRADIENT */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.75),
              rgba(10, 40, 80, 0.6),
              rgba(99, 179, 67, 0.7)
            ),
            url(${banner})
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* LEFT TITLE */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white font-[Pacifico] text-2xl sm:text-3xl font-semibold tracking-wide"
          >
            Samyak <span className="text-primary">Green</span>
          </motion.h2>

          {/* RIGHT ACTIONS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* CALL CTA */}
            <motion.a
              href="tel:+91-98XXXX0956"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="group flex items-center gap-3
                         bg-white/10 text-white
                         px-5 py-3 rounded-xl text-sm font-medium
                         hover:bg-white/20 backdrop-blur-sm"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15
                           transition group-hover:scale-110"
              >
                <i className="fa-solid fa-phone"></i>
              </span>
              Call Us : +91-98XXXX0956
            </motion.a>

            {/* EMAIL CTA */}
            <motion.a
              href="mailto:support@samyakgreen.co.in"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="group flex items-center gap-3
                         bg-white/10 text-white
                         px-5 py-3 rounded-xl text-sm font-medium
                         hover:bg-white/20 backdrop-blur-sm"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35B357]
                           transition group-hover:scale-110"
              >
                <i className="fa-regular fa-envelope"></i>
              </span>
              Mail Us : support@samyakgreen.co.in
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactCTA;
