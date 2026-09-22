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
    default: 'Daniel Levy — Développeur web et mobile freelance',
    template: '%s | Daniel Levy',
  },
  description:
    'Développeur web et mobile freelance. Je construis des SaaS, apps et MVP de l’idée à la production : cadrage, architecture, développement, tracking, paiement et IA.',
  keywords: [
    'développeur web et mobile',
    'développeur web et mobile freelance',
    'développeur freelance',
    'développeur web mobile IA',
    'product builder',
    'MVP',
    'SaaS',
    'application mobile',
    'outil métier',
    'intégration IA',
    'React',
    'Next.js',
    'Swift',
    'RevenueCat',
    'Stripe',
    'Amplitude',
    'freelance',
    'France',
    'portfolio',
    'TypeScript',
    'Node.js',
  ],
  authors: [{ name: 'Daniel Levy' }],
  creator: 'Daniel Levy',
  verification: {
    google: 'Xh1HMBgVTVpg6tDiafpLpXQ83kLj9RZZhhcSjPZu4Xo',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: 'https://www.levy-daniel.fr',
    siteName: 'Daniel Levy',
    title: 'Daniel Levy — Développeur web et mobile freelance',
    description:
      'Développeur web et mobile freelance. Je construis des SaaS, apps et MVP de l’idée à la production : cadrage, architecture, développement, tracking, paiement et IA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Daniel Levy — Développeur web et mobile freelance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Levy — Développeur web et mobile freelance',
    description:
      'SaaS, apps et MVP de l’idée à la production : cadrage, architecture, développement, tracking, paiement et IA.',
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
        <JsonLd />
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
