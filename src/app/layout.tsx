import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { JsonLd } from './components/JsonLd';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.levy-daniel.fr'),
  title: {
    default: 'Daniel Levy — Développeur Full Stack',
    template: '%s | Daniel Levy',
  },
  description:
    'Développeur full stack spécialisé React, Next.js et Flutter. Je conçois des applications web et mobile modernes, performantes et accessibles. Basé en France, je transforme vos idées en produits digitaux aboutis.',
  keywords: [
    'développeur full stack',
    'React',
    'Next.js',
    'Flutter',
    'freelance',
    'France',
    'portfolio',
    'TypeScript',
    'Node.js',
    'développeur mobile',
    'application web',
  ],
  authors: [{ name: 'Daniel Levy' }],
  creator: 'Daniel Levy',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: 'https://www.levy-daniel.fr',
    siteName: 'Daniel Levy',
    title: 'Daniel Levy — Développeur Full Stack',
    description:
      'Développeur full stack spécialisé React, Next.js et Flutter. Je conçois des applications web et mobile modernes, performantes et accessibles. Basé en France.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Daniel Levy — Développeur Full Stack Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Levy — Développeur Full Stack',
    description:
      'Développeur full stack spécialisé React, Next.js et Flutter. Applications web et mobile modernes, performantes et accessibles.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.levy-daniel.fr',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.className} bg-theme text-theme transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            <JsonLd />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
