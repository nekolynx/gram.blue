"use client";

import Button from "@/components/actions/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex h-[100svh] flex-col items-center justify-center p-3" style={{backgroundImage: "linear-gradient(rgb(var(--color-primary)),cadetblue)"}}>
      <div className="flex items-center justify-center gap-3 mb-4">
          <Image src="/icon.png" alt="gram.blue icon" width={48} height={48}/>
          <Image
            src="/gramblueText.svg"
            alt="gram.blue"
            width={150}
            height={28}
          />
        </div>
      <div className="p-6 rounded-xl bg-skin-secondary justify-center">
        
        <h1 className="mt-2 text-center text-skin-secondary font-medium">
          The page you are looking for could not be found
        </h1>
        <div className="mt-6 flex justify-center">
          <Button onClick={() => router.push("/dashboard/home")}>Go Home</Button>
        </div>
      </div>
    </main>
  );
}
