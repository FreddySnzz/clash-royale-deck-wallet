"use client";

import { backgroundUrls } from "@/data/constaints/backgroundsUrl";
import useAppData from "@/data/hooks/useAppData";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Background({ children, className }: BackgroundProps) {
  const { theme, toggleTheme } = useAppData();
  const [backgroundIndex, setBackgroundIndex] = useState<number>(0);

  useEffect(() => {
    setBackgroundIndex(Math.floor(Math.random() * backgroundUrls.length));
  }, []);

  return (
    <main className={`${theme} relative flex flex-col min-h-screen overflow-hidden bg-slate-400 dark:bg-slate-800`}>
      <Image
        src={backgroundUrls[backgroundIndex]}
        alt="background"
        className="fixed inset-0 h-screen object-cover opacity-5 dark:opacity-2"
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
