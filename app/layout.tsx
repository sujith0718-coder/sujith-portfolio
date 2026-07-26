import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sujith.dev'),
  title: {
    default: 'Sujith E — AI Systems Engineer & Software Developer',
    template: '%s | Sujith E',
  },
  description:
    'CS undergraduate at PSG College of Technology building full-stack and AI-powered applications with JavaScript, Python, and the Google Gemini API. 9+ shipped projects.',
  keywords: [
    'Sujith E',
    'Software Developer',
    'AI Engineer',
    'Full Stack Developer',
    'React Developer',
    'Python Developer',
    'Google Gemini API',
    'PSG College of Technology',
    'Coimbatore',
    'Portfolio',
  ],
  authors: [{ name: 'Sujith E', url: 'https://github.com/sujith' }],
  creator: 'Sujith E',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sujith E — AI Systems Engineer & Software Developer',
    description:
      'CS undergraduate building full-stack and AI-powered applications. 9+ shipped projects. Available for internships.',
    siteName: 'Sujith E Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Sujith E Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sujith E — AI Systems Engineer & Software Developer',
    description: 'CS undergraduate building full-stack and AI-powered applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
