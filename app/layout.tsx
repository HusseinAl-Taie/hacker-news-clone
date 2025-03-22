import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hacker News Clone',
  description: 'A modern Hacker News clone built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}