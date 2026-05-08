import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            SocialForge
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered social media content generator for creators and brands.
            Generate engaging posts, captions, and strategies for all platforms.
          </p>
          <div className="space-x-4">
            <Link href="/auth/register">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link href="/public/features">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Multi-Platform</h3>
            <p className="text-gray-600">Generate content for Facebook, Instagram, TikTok, YouTube, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
            <p className="text-gray-600">Use OpenAI, Gemini, Claude, or OpenRouter for high-quality output.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Brand Identity</h3>
            <p className="text-gray-600">Maintain consistent tone and style across all your content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
