import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Daniel Levy – Développeur',
  description: 'Portfolio développeur fullstack et mobile',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' }
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
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
