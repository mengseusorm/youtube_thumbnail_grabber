import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Get Thumbnail Youtube Video",
  description: "Learn about our free YouTube thumbnail downloader tool and how it helps content creators and designers.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 dark:from-zinc-900 dark:to-zinc-800 py-12 px-4">
      <main className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              About Get Thumbnail Youtube Video
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
              A simple, fast, and free tool to download YouTube video thumbnails in high quality.
            </p>
          </div>

          <div className="space-y-12">
            {/* What We Do */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                What We Do
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Get Thumbnail Youtube Video is a web-based tool that allows you to quickly and easily download 
                  YouTube video thumbnails in various resolutions. Whether you're a content creator, designer, 
                  blogger, or just someone who needs a YouTube thumbnail for a project, our tool makes it simple 
                  to get what you need without any hassle.
                </p>
              </div>
            </section>

            {/* Why We Built This */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Why We Built This
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                    🎨 For Content Creators
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Sometimes you need reference thumbnails for inspiration or to study what works 
                    in your niche. Our tool makes it easy to collect and analyze successful thumbnails.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                    📱 For Social Media
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Need to share video previews on social platforms? Get high-quality thumbnails 
                    to use in your posts and stories.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                    📊 For Presentations
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Including video references in presentations, reports, or educational materials 
                    becomes easier with quick thumbnail access.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                    🔍 For Research
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Academic researchers and analysts can quickly gather visual data for studies 
                    and trend analysis.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Key Features
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                  <div className="text-2xl mb-3">🚀</div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Lightning Fast</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Get your thumbnails instantly without any waiting time or processing delays.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                  <div className="text-2xl mb-3">🆓</div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Completely Free</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    No hidden costs, no subscriptions, no limits. Use it as much as you want.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <div className="text-2xl mb-3">🔒</div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Privacy First</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    We don't store your data or track your usage. Your privacy is our priority.
                  </p>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Paste URL</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Copy and paste any YouTube video URL into our search box.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Get Thumbnails</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    We instantly fetch all available thumbnail sizes for that video.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Download</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Choose your preferred resolution and download instantly.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Info */}
            <section className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Technical Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Supported Formats</h3>
                  <ul className="text-zinc-600 dark:text-zinc-300 text-sm space-y-1">
                    <li>• All YouTube URL formats</li>
                    <li>• Direct video IDs</li>
                    <li>• Mobile and desktop links</li>
                    <li>• Shortened youtu.be links</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Available Resolutions</h3>
                  <ul className="text-zinc-600 dark:text-zinc-300 text-sm space-y-1">
                    <li>• High Definition (1280x720)</li>
                    <li>• Standard Definition (640x480)</li>
                    <li>• Medium Quality (320x180)</li>
                    <li>• Thumbnail sizes (120x90)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}