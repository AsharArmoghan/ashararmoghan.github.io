import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/app/components/Footer/footer";

import Provider from "@/app/components/Theme/providers";
import { Header } from "./components/Header/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-serif",
// });
export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my Portfolio",
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
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
