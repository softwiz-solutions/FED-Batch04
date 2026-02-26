import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="hover:text-gray-400">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-400">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
