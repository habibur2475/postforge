import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-600">Choose the plan that fits your content creation needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Free</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <ul className="mb-6 space-y-2">
              <li>10 posts per day</li>
              <li>Basic AI providers</li>
              <li>Post history</li>
            </ul>
            <Link href="/auth/register">
              <Button className="w-full">Get Started</Button>
            </Link>
          </Card>
          <Card className="p-6 border-2 border-blue-500">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-4">$19</p>
            <ul className="mb-6 space-y-2">
              <li>500 posts per day</li>
              <li>All AI providers</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <Link href="/auth/register">
              <Button className="w-full">Upgrade to Pro</Button>
            </Link>
          </Card>
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-4">$49</p>
            <ul className="mb-6 space-y-2">
              <li>10,000 posts per day</li>
              <li>All features</li>
              <li>Custom templates</li>
              <li>White-label option</li>
            </ul>
            <Link href="/auth/register">
              <Button className="w-full">Go Premium</Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
