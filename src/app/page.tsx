'use client';

import { useState } from 'react';
import AdBanner from './components/AdBanner';

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  [key: string]: Thumbnail;
}

export default function Home() {
  const [url, setUrl] = useState<string>('');
  const [thumbnails, setThumbnails] = useState<Thumbnails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const downloadImage = async (imageUrl: string, quality: string): Promise<void> => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `youtube-thumbnail-${quality}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    setError('');
    setThumbnails(null);
    setLoading(true);

    const videoId = extractVideoId(url);
    
    if (!videoId) {
      setError('Invalid YouTube URL. Please enter a valid URL.');
      setLoading(false);
      return;
    }

    try {
      const apiKey = 'AIzaSyDfq0MgZmwIKJ91fa2lVUxUNnFWe3YYQ7Q';
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
      );
      
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        setThumbnails(data.items[0].snippet.thumbnails);
      } else {
        setError('Video not found. Please check the URL.');
      }
    } catch (err) {
      setError('Failed to fetch thumbnail. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 dark:from-zinc-900 dark:to-zinc-800 py-12 px-4">
      <main className="max-w-2xl mx-auto">
        {/* Website Description Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Download YouTube Thumbnails Instantly
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
            Get high-quality YouTube video thumbnails in multiple resolutions. 
            Perfect for content creators, designers, and anyone who needs YouTube thumbnails 
            for presentations, blogs, or social media.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-zinc-800/50 rounded-lg p-4">
              <div className="text-red-600 dark:text-red-400 font-semibold mb-2">🚀 Fast & Free</div>
              <div className="text-zinc-600 dark:text-zinc-400">No registration required, instant downloads</div>
            </div>
            <div className="bg-white/50 dark:bg-zinc-800/50 rounded-lg p-4">
              <div className="text-red-600 dark:text-red-400 font-semibold mb-2">📐 Multiple Sizes</div>
              <div className="text-zinc-600 dark:text-zinc-400">Get thumbnails in all available resolutions</div>
            </div>
            <div className="bg-white/50 dark:bg-zinc-800/50 rounded-lg p-4">
              <div className="text-red-600 dark:text-red-400 font-semibold mb-2">💻 Easy to Use</div>
              <div className="text-zinc-600 dark:text-zinc-400">Simply paste URL and download</div>
            </div>
          </div>
        </div>

        {/* Ad Banner */}
        <div className="mb-8">
          <AdBanner 
            dataAdSlot="5292815547"
            className="max-w-2xl mx-auto"
          />
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Get Thumbnail Youtube Video
            </h1>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                YouTube Video URL
              </label>
              <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-700 dark:text-white outline-none transition"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Loading...' : 'Get Thumbnail'}
            </button>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}

          {thumbnails && (
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                Available Thumbnails
              </h2>
              
              {Object.entries(thumbnails).map(([quality, data]) => (
                <div key={quality} className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-zinc-900 dark:text-white capitalize">
                        {quality}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {data.width} × {data.height}
                      </p>
                    </div>
                    <button
                      onClick={() => downloadImage(data.url, quality)}
                      className="px-4 py-2 bg-zinc-900 dark:bg-zinc-700 text-white text-sm rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-600 transition"
                    >
                      Download
                    </button>
                  </div>
                  <img
                    src={data.url}
                    alt={`${quality} thumbnail`}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}