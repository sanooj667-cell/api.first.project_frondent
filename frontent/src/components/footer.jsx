import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Company */}
        <div>
          <h2 className="text-xl font-bold text-green-400 mb-4">
            MyWebsite
          </h2>
          <p className="text-gray-400">
            We provide the best services and products for our customers.
            Quality and trust is our priority.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">About</a></li>
            <li><a href="#" className="hover:text-green-400">Services</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@mywebsite.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Kerala, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © 2026 MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}

