import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Daniel Levy – Développeur',
  description: 'Portfolio développeur fullstack et mobile',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.className} bg-[#0F0F23] text-[#E2E8F0]`}>
        {children}
      </body>
    </html>
  );
}
