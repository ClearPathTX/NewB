import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "New Beginnings Detox & Recovery | Sylmar, California",
  description: "Your journey to recovery starts here. Safe, professional treatment for substance use and mental health challenges in Sylmar, California.",
  keywords: "detox, recovery, rehabilitation, substance abuse, mental health, Sylmar, California, addiction treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonText.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
