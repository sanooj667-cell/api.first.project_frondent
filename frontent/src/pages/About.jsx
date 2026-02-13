import React from "react";

export default function About() {
  return (
    <section className="bg-black text-white py-20">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="about"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-green-400">Us</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            We are a passionate team dedicated to building modern,
            responsive, and high-performance websites. Our goal is to
            help businesses grow online with innovative design and
            cutting-edge technology.
          </p>

          <p className="text-gray-400 mt-4 text-lg leading-relaxed">
            From startups to enterprises, we deliver solutions that
            combine creativity and functionality to create the best
            digital experience.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-green-400">5+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-400">100+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-400">50+</h3>
              <p className="text-gray-400 text-sm">Clients</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
