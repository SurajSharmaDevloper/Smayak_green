import banner from "../../assets/Foods/about.jpg";
const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
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

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Title */}
          <h2 className="text-white font-[Pacifico] text-2xl sm:text-3xl font-semibold tracking-wide">
            Samyak <span className="text-primary">Green</span>
          </h2>

          {/* Right Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Call CTA */}
            <a
              href="tel:+91-9881210956="
              className="group flex items-center gap-3
                         bg-white/10 text-white
                         px-5 py-3 rounded-xl text-sm font-medium
                         hover:bg-white/20 transition backdrop-blur-sm"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15
                               group-hover:scale-105 transition"
              >
                <i class="fa-solid fa-phone"></i>
              </span>
              Call Us : +91-9881210956
            </a>

            {/* Email CTA */}
            <a
              href="mailto:support@samyakgreen.co.in"
              className="group flex items-center gap-3
                         bg-white/10 text-white
                         px-5 py-3 rounded-xl text-sm font-medium
                         hover:bg-white/20 transition backdrop-blur-sm"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35B357]
                               group-hover:scale-105 transition"
              >
                <i class="fa-regular fa-envelope"></i>
              </span>
              Mail Us : support@samyakgreen.co.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
