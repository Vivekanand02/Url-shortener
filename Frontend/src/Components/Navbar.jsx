import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b bg-white/50 backdrop-blur shadow-md">
      <p className="tracking-widest font-semibold text-gray-800 cursor-pointer">
        URL Shortener
      </p>

      <button
        className="tracking-widest text-gray-600 hover:text-black transition"
        onClick={() => setIsOpen(true)}
      >
        Feedback
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm min-h-screen">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Feedback</h3>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>

            <textarea
              placeholder="Tell us what you think..."
              className="border rounded-xl p-3 w-full h-32 resize-none outline-none focus:ring-2 focus:ring-amber-300 transition"
            />

            <button
              className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
