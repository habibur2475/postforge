import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function RootPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-100">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-600 mb-4">AI Social Media Content Studio</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Build viral content for every platform with SocialForge
          </h1>
          <p className="text-lg leading-8 text-slate-700 mb-10">
            Generate captions, scripts, hooks, hashtags and brand-first posts for Facebook, Instagram, TikTok, YouTube, LinkedIn and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button size="lg">Start Free</Button>
            </Link>
            <Link href="/public/features">
              <Button variant="outline" size="lg">Explore Features</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
