import { AppProvider } from "@/data/context/AppContext";
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royale Deck Wallet",
  description: "Store your favorite clash royale deck to use later.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <body>
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
