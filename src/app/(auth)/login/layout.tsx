import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
  description: "Your Bluesky web client",
};

export default async function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="relative z-10 min-h-[100svh] flex items-center justify-center">
        <div className="fixed top-0 left-0 right-0 bg-primary homepageBanner" style={{height: "280px", zIndex: "-1"}}></div>
        {children}
      </main>
    </>
  );
}
