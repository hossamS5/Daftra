"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/organisms/nav/sidebar";
import { Navbar } from "@/components/organisms/nav/navbar";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useGlobalStore } from "@/utils/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const { isMobileSideNavOpened } = useGlobalStore();

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
              <div className="hidden xl:block">
                <Sidebar />
              </div>
              <main className="flex-1 overflow-auto bg-main-grey px-5 py-[26px] md:p-8">
                {children}
              </main>
            </div>

            {/*Mobile  SideNav*/}
            {isMobileSideNavOpened && (
              <div
                className={`absolute top-0 left-0 w-screen h-screen bg-white z-50 xl:hidden transition-transform ${
                  isMobileSideNavOpened ? "animate-slideIn" : "animate-slideOut"
                }`}
              >
                <Sidebar />
              </div>
            )}
          </div>

          <Toaster
            position="bottom-center"
            toastOptions={{
              className: "text-lg",
            }}
          />
        </body>
      </html>
    </QueryClientProvider>
  );
}
