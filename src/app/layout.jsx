import { Noto_Sans } from 'next/font/google'

import { cn } from "@/src/lib/utils";

import "./globals.css";
import GlobalToastRegion from '../components/Toast/Toast';

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Video Game Screenshots",
  description: "A gallery for Video Game Screenshots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(notoSans.variable, 'bg-background')}>
        {children}
        <GlobalToastRegion />
      </body>
    </html>
  );
}
