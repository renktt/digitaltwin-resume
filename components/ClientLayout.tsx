'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import { Toaster } from 'react-hot-toast';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navigation />
      <main className="pt-16 min-h-screen">
        {children}
      </main>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}
