export default function Navbar() {
  return (
    <nav className="bg-blue-400 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="/contact-us" className="hover:text-gray-400">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
