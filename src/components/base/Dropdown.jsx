import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ label, placeholder, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [openUp, setOpenUp] = useState(false);

  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  /* Detect available space */
  useEffect(() => {
    if (open && triggerRef.current && dropdownRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;

      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      setOpenUp(spaceBelow < dropdownHeight && spaceAbove > spaceBelow);
    }
  }, [open, search, options.length]);

  return (
    <div className="relative" ref={triggerRef}>
      {label && (
        <label className="text-sm font-medium mb-1 block text-gray-700">
          {label}
        </label>
      )}

      {/* TRIGGER */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`
          w-full px-3 py-2 text-left rounded-lg bg-white
          border border-lime-300
          text-gray-800 text-sm
          outline-none
          transition
          focus:border-lime-400 focus:ring-2 focus:ring-lime-200
          hover:border-lime-400
        `}
      >
        {value || (
          <span className="text-gray-400">{placeholder}</span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: openUp ? -8 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: openUp ? -8 : 8 }}
            className={`
              absolute z-30 w-full rounded-xl
              bg-white border border-lime-200
              shadow-lg
              ${openUp ? "bottom-full mb-2" : "top-full mt-2"}
            `}
          >
            {/* SEARCH */}
            <input
              className="
                w-full px-3 py-2 text-sm
                border-b border-lime-200
                outline-none
                focus:border-lime-400
                placeholder:text-gray-400
              "
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* OPTIONS */}
            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length ? (
                filteredOptions.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                      setSearch("");
                    }}
                    className={`
                      px-3 py-2 text-sm cursor-pointer
                      transition
                      hover:bg-lime-50
                      ${opt === value ? "bg-lime-100 text-lime-800 font-medium" : "text-gray-700"}
                    `}
                  >
                    {opt}
                  </div>
                ))
              ) : (
                <p className="px-3 py-2 text-sm text-gray-400">
                  No results
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
