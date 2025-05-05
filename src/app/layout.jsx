import { Noto_Sans } from 'next/font/google'

import { cn } from "@/lib/utils";

import "./globals.css";

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
      <body className={cn('bg-background h-screen flex flex-col', notoSans.variable)}>
        {children}
      </body>
    </html>
  );
}
