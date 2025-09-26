import { AppProvider } from "@/data/context/AppContext";
import "../styles/globals.css";
import type { Metadata } from "next";
import { CardsProvider } from "@/data/context/CardsContext";

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
        <CardsProvider>
          <body>
            {children}
          </body>
        </CardsProvider>
      </AppProvider>
    </html>
  );
}
