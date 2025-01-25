import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";

import Provider from "@/app/components/Theme/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
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
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          inter.variable,
          playfair.variable,
        )}
      >
        <Provider>
          <Header />
          <main className="m-auto grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
