import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Roboto, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "../components/Marquee";

const images = [
  "/carousel/NIC05318.jpg",
  "/carousel/NIC05343.jpg",
  "/carousel/NIC05378.jpg",
  "/carousel/NIC05394.jpg",
  "/carousel/NIC05422.jpg",
  "/carousel/NIC05472.jpg",
];

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

const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: ["400"]
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
        <div className="min-h-screen relative">
          {/* ...your main content here... */}

          <div className="fixed inset-0 -z-10 pointer-events-none opacity-75">
            <Marquee images={images} rate={1} />
            <Marquee images={images} rate={-1} />
            <Marquee images={images} rate={1} />
            <Marquee images={images} rate={-1} />
            <Marquee images={images} rate={1} />
            <Marquee images={images} rate={-1} />
            {/* Add more marquees as needed */}
          </div>

          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
