export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
          <p className="text-xl text-gray-600">Powerful tools to supercharge your social media presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Content Generation</h3>
            <p className="text-gray-600">Generate posts, captions, and scripts using advanced AI models.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Multi-Platform Support</h3>
            <p className="text-gray-600">Optimized content for Facebook, Instagram, TikTok, YouTube, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Brand Consistency</h3>
            <p className="text-gray-600">Maintain your brand voice and style across all content.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Analytics Integration</h3>
            <p className="text-gray-600">Track performance and optimize your content strategy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Custom Templates</h3>
            <p className="text-gray-600">Use pre-built templates or create your own for consistent results.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Secure API Management</h3>
            <p className="text-gray-600">Your AI API keys are encrypted and stored securely.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
