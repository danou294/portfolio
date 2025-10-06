import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from './contexts/ThemeContext';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Daniel Levy – Développeur',
  description: 'Portfolio développeur fullstack et mobile',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.className} bg-theme text-theme transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
