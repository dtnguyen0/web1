import { ThemeProvider } from '@/components/theme-provider';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import NavBar from '@/components/navbar/NavBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
