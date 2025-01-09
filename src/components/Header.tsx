import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-gray-600">
                Login/Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
