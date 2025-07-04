import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// import {
  // ClerkProvider,
// } from '@clerk/nextjs'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ApolloWrapper } from './apollo-wrapper';

const client = new ApolloClient({
  uri: '/api/graphql', // My local GraphQL API endpoint
  cache: new InMemoryCache(),
});

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ApolloProvider client={client}>
        // <ClerkProvider
        //   appearance={{
        //     cssLayerName: 'clerk',
        //   }}
        //   publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        // >

        <html lang="en" className="w-[100vw] no-scrollbar scrollbar-hidden overflow-x-hidden ">
          <body
            className={`${poppins.className} max-w-[100vw] overflow-x-hidden `}
          >
            <Header />
            <div className="md:px-4 px-2">
              <ApolloWrapper>
              {children}
              </ApolloWrapper>
            </div>
          </body>
        </html>
    // </ClerkProvider>
      // </ApolloProvider>
  );
}
