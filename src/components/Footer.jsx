export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p>
        © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Omwenga Web Solutions</span>.  
        All rights reserved.
      </p>
      <p className="text-sm mt-2">Designed with ❤️ using React & TailwindCSS</p>
    </footer>
  );
}
