import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import "./tailwind.css";

const poppins = Poppins({weight: ["400"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "U-Tube",
  description: "Video streaming platform for developers.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
