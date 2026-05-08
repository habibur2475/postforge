import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          SocialForge
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/public/features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="/public/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/public/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/public/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Link href="/auth/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/auth/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
