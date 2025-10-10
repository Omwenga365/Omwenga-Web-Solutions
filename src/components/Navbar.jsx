import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-lg flex flex-col">
          <a href="#home" className="px-6 py-2 border-b hover:bg-blue-50">Home</a>
          <a href="#services" className="px-6 py-2 border-b hover:bg-blue-50">Services</a>
          <a href="#testimonials" className="px-6 py-2 border-b hover:bg-blue-50">Testimonials</a>
          <a href="#contact" className="px-6 py-2 hover:bg-blue-50">Contact</a>
        </div>
      )}
    </nav>
  );
}
