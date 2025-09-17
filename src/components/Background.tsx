"use client";

import { backgroundUrls } from "@/data/constaints/backgroundsUrl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Background({ children, className }: BackgroundProps) {
  const [backgroundIndex, setBackgroundIndex] = useState<number>(0);

  useEffect(() => {
    setBackgroundIndex(Math.floor(Math.random() * backgroundUrls.length));
  }, []);

  return (
    <main className={`relative flex flex-col min-h-screen overflow-hidden bg-slate-800`}>
      <Image
        src={backgroundUrls[backgroundIndex]}
        alt="background"
        className="fixed inset-0 h-screen object-cover opacity-2"
        width={1000}
        height={1000}
        priority
      />
      <div className="relative z-10 flex flex-col flex-1">
        {children}
      </div>
    </main>
  );
}
