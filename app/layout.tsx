import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"], // Semibold
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "Drive For Sight",
  description: "DFSxCNIB",
    openGraph: {
    title: "Drive For Sight",
    description: "DFSxCNIB",
    images: ["/background.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
