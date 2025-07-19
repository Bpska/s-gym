import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FitnessHub - Transform Your Body & Mind | Premium Gym & Fitness Center',
  description: 'Join FitnessHub for world-class fitness facilities, expert trainers, and comprehensive wellness programs. Start your transformation journey today with our state-of-the-art gym.',
  keywords: 'gym, fitness, personal training, group classes, wellness, health, workout, strength training, cardio, yoga, pilates',
  authors: [{ name: 'FitnessHub Team' }],
  openGraph: {
    title: 'FitnessHub - Transform Your Body & Mind',
    description: 'Premium gym and fitness center with expert trainers, modern equipment, and comprehensive wellness programs.',
    url: 'https://fitnesshub.com',
    siteName: 'FitnessHub',
    images: [
      {
        url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'FitnessHub Gym Interior'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FitnessHub - Transform Your Body & Mind',
    description: 'Premium gym and fitness center with expert trainers and modern equipment.',
    images: ['https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF6B35" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Gym",
              "name": "FitnessHub",
              "description": "Premium gym and fitness center with expert trainers, modern equipment, and comprehensive wellness programs.",
              "url": "https://fitnesshub.com",
              "telephone": "+1-555-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Fitness Street",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "openingHours": [
                "Mo-Fr 05:00-23:00",
                "Sa-Su 06:00-22:00"
              ],
              "priceRange": "$29-$99",
              "image": "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "10000"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}