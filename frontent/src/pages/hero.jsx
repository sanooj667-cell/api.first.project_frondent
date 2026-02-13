import React from "react";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your <span className="text-green-400">Dream Website</span>  
            With Us
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            We create modern, fast, and responsive websites using the
            latest technologies to grow your business online.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition">
              Get Started
            </button>

            <button className="border border-green-400 px-6 py-3 rounded-lg hover:bg-green-400 hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="hero"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

