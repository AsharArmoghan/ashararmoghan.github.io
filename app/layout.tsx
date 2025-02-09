import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "react-hot-toast";
import Provider from "@/app/components/Theme/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-serif",
// });
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Hi! I'am Ashar,This is My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          "flex min-h-screen flex-col antialiased",
        )}
      >
        <Provider>
          <Toaster position="bottom-center" />
          <main className="grow">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
