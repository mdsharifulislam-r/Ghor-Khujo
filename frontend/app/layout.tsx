import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AOSInit } from "./aos";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export const metadata: Metadata = {
  title: "Ghor Khujo",
  description: "Search your dream house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <StoreProvider>
        <Navbar/>
        {children}
        <Footer/>
        </StoreProvider>
        <AOSInit/>
        
        <Toaster
        position="top-center"
        />
      </body>
    </html>
  );
}
