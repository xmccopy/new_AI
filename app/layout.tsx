import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modal/LoginModal";


export const metadata: Metadata = {
  title: "Google AI",
  description: "Google AI ChatGPT",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModal/>
          <LoginModal/>
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
