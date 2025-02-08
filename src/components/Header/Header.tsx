import Image from 'next/image';
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link  href="/Stores" className="text-gray-700 hover:underline">
            Find a Store
          </Link >
          <Link  href="/help" className="text-gray-700 hover:underline">
            Help
          </Link >
          <Link  href="/contactus" className="text-gray-700 hover:underline">
            Contact Us
          </Link >
          <Link  href="/SingIn" className="text-gray-700 hover:underline">
            Sign In
          </Link >
        </nav>
      </div>
    </header>
  );
}
