import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import RecoilProvider from "./RecoilProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"], });


export const metadata: Metadata = {
  title: "AlgoArena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <RecoilProvider>
            {children}
          </RecoilProvider>
      </body>
    </html>
  );
}
