export default function DishAvailabilityCard({ image, title, store, price }) {
  return (
    <div
      className="bg-background rounded-2xl overflow-hidden
                 border border-[#E1E6E0]
                 h-80 flex flex-col"
    >
      {/* Image */}
      <div className="bg-[#E9EEE8]">
        <img
          src={image}
          alt={title}
          className="w-full h-50 object-cover
                     saturate-90 contrast-95 brightness-95"
        />
      </div>

      {/* Content */}
      <div className="p-4 h-30 flex-1 flex flex-col justify-between overflow-hidden">
        <h3
          className="text-base font-semibold text-[#1E2F26]
                     line-clamp-1"
        >
          {title}
        </h3>

        <p
          className="text-sm text-[#5F6F65] mt-1
                     line-clamp-1"
        >
          {store}
        </p>

        {/* Spacer pushes price to bottom */}

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#3F6E52]">₹{price}</span>

          <span
            className="text-xs px-2 py-1 rounded-full
                       bg-green-400/40 text-[#3F6E52]"
          >
            Available
          </span>
        </div>
      </div>
    </div>
  );
}
