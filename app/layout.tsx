import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { ApolloWrapper } from './apollo-wrapper';
import Footer from "@/components/Footer";



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', "800", "900"]
})


export const metadata: Metadata = {
  title: "TinyWags",
  description: "Work in progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{ cssLayerName: 'clerk' }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" className="scroll-smooth">
        <body className={`${poppins.className} antialiased bg-white text-gray-900 overflow-x-hidden`}>
          <Header />
          <ApolloWrapper>
            {/* Removed the extra padding container here to allow full-width sections */}
            {children}
          </ApolloWrapper>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}