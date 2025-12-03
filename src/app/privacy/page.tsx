import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - YouTube Thumbnail Grabber",
  description: "Learn about how we handle your privacy and data when using our YouTube thumbnail downloader tool.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 dark:from-zinc-900 dark:to-zinc-800 py-12 px-4">
      <main className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we handle your information.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
              Last updated: December 3, 2025
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                YouTube Thumbnail Grabber ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you 
                use our website and services. By using our service, you agree to the collection and use 
                of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Information You Provide
              </h3>
              <ul className="text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-2 mb-6">
                <li>• <strong>YouTube URLs:</strong> The YouTube video URLs you input to generate thumbnails</li>
                <li>• <strong>Contact Information:</strong> Name and email address when you contact us through our contact form</li>
                <li>• <strong>Feedback:</strong> Any feedback, suggestions, or bug reports you provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Information Automatically Collected
              </h3>
              <ul className="text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-2">
                <li>• <strong>Usage Data:</strong> How you interact with our website (pages visited, features used)</li>
                <li>• <strong>Device Information:</strong> Browser type, operating system, screen resolution</li>
                <li>• <strong>Log Data:</strong> IP address, access times, referring websites</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                3. How We Use Your Information
              </h2>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  ✅ What We DO Use Your Information For:
                </h3>
                <ul className="text-green-700 dark:text-green-300 space-y-1 text-sm">
                  <li>• Providing thumbnail generation services</li>
                  <li>• Responding to your support requests</li>
                  <li>• Improving our website and services</li>
                  <li>• Analyzing usage patterns to enhance user experience</li>
                  <li>• Preventing fraud and abuse</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  ❌ What We DON'T Use Your Information For:
                </h3>
                <ul className="text-red-700 dark:text-red-300 space-y-1 text-sm">
                  <li>• Selling or renting your data to third parties</li>
                  <li>• Creating user profiles for advertising</li>
                  <li>• Tracking you across other websites</li>
                  <li>• Storing your YouTube URLs permanently</li>
                  <li>• Spam or unsolicited marketing</li>
                </ul>
              </div>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                4. Data Storage and Security
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                    🔒 Data Security
                  </h3>
                  <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
                    <li>• HTTPS encryption for all data transmission</li>
                    <li>• Secure server infrastructure</li>
                    <li>• Regular security updates and monitoring</li>
                    <li>• Limited access to personal data</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                    💾 Data Retention
                  </h3>
                  <ul className="text-purple-700 dark:text-purple-300 space-y-1 text-sm">
                    <li>• YouTube URLs: Not stored permanently</li>
                    <li>• Contact form data: 2 years maximum</li>
                    <li>• Usage logs: 30 days maximum</li>
                    <li>• No unnecessary data retention</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                Our service interacts with the following third-party services:
              </p>
              
              <div className="space-y-4">
                <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    YouTube Data API v3
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Used to fetch video thumbnail information. Subject to Google's Privacy Policy and Terms of Service.
                  </p>
                </div>
                
                <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    Web Hosting Services
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Our website is hosted on secure servers. Hosting providers may collect basic log data.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Right to Access</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Request a copy of the personal data we hold about you
                  </p>
                </div>
                
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Right to Correction</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Request correction of any inaccurate personal data
                  </p>
                </div>
                
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Right to Deletion</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Request deletion of your personal data
                  </p>
                </div>
                
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Right to Portability</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Request your data in a portable format
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                7. Cookies and Tracking
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                We use minimal tracking technologies:
              </p>
              
              <ul className="text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-2">
                <li>• <strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li>• <strong>No Third-Party Tracking:</strong> We don't use Google Analytics, Facebook Pixel, or similar tracking</li>
                <li>• <strong>Local Storage:</strong> May store preferences locally in your browser</li>
                <li>• <strong>No Cross-Site Tracking:</strong> We don't track you across other websites</li>
              </ul>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
                Policy are effective when they are posted on this page.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                9. Contact Us
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              
              <div className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <p><strong>Email:</strong> privacy@ythumbnailgrabber.com</p>
                <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
                <p><strong>Response Time:</strong> We typically respond within 48 hours</p>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  <strong>Quick Summary:</strong> We respect your privacy, don't sell your data, use minimal tracking, 
                  and are committed to keeping your information secure. Most importantly, we don't store your YouTube URLs permanently.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}