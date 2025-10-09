import { useState } from "react";
import { Menu, X } from "lucide-react"; // install icons below

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Omwenga<span className="text-gray-700">Web</span>
        </h1>

        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Mobile menu icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#home" className="block px-6 py-2 border-b hover:bg-blue-50">Home</a>
          <a href="#services" className="block px-6 py-2 border-b hover:bg-blue-50">Services</a>
          <a href="#testimonials" className="block px-6 py-2 border-b hover:bg-blue-50">Testimonials</a>
          <a href="#contact" className="block px-6 py-2 hover:bg-blue-50">Contact</a>
        </div>
      )}
    </nav>
  );
}
