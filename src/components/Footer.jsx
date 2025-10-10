export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Left side: Branding */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Omwenga Web Solutions</h2>
          <p className="text-gray-400 mt-2">
            Building digital experiences that drive results for businesses of all sizes.
          </p>
        </div>

        {/* Right side: Quick Links & Contact */}
        <div className="text-center md:text-right space-y-4">
          <div className="flex justify-center md:justify-end gap-6">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#services" className="hover:text-blue-500 transition">Services</a>
            <a href="#testimonials" className="hover:text-blue-500 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
          <div className="mt-2">
            <p>📍 Nairobi</p>
            <p>📞 +254 713765793</p>
            <p>✉️ victoromwenga365@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 Omwenga Web Solutions. All rights reserved.
      </div>
    </footer>
  );
}
