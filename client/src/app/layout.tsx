import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import TopBar from "@/components/shared/TopBar";
import NavBar from "@/components/shared/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PetSet -Complete Pet Care Platform",
  description: "PetSet is your all-in-one solution for seamless pet care — from managing health records to connecting with vets and exploring pet services, all in one place.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <TopBar />
          <NavBar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
