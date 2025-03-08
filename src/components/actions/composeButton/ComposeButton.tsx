"use client";

import { useComposerControls } from "@/app/providers/composer";
import { useScrollContext } from "@/app/providers/scroll";
import { usePathname } from "next/navigation";
import { RiQuillPenFill } from "react-icons/ri";

interface Props {
  float?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
}

export default function ComposeButton(props: Props) {
  const { float, rounded=true, fullWidth } = props;
  const val = useScrollContext();
  const canUpdate = typeof window !== "undefined";
  const pathname = usePathname();
  const userHandle =
    pathname.includes("/user/") && !pathname.includes("/post/")
      ? pathname.split("/")[3]
      : "";
  const { openComposer } = useComposerControls();

  if (float) {
    return (
      <button
        onClick={() => openComposer({ mention: userHandle })}
        className={`${fullWidth && "w-full justify-center"} bg-primary text-skin-inverted hover:bg-primary-dark fixed bottom-24 right-3 z-40 ${rounded && "rounded-full"} p-3.5 outline-none transition-all ease-linear md:hidden`}
        style={{
          opacity: canUpdate ? `${100 - (val ?? 0)}%` : "100%",
          transform: canUpdate ? `translateY(${val ?? 0}%)` : "translateY(0%)",
        }}
      >
        <RiQuillPenFill className="text-skin-icon-inverted text-2xl" />
      </button>
    );
  }

  return (
    <button
      onClick={() => openComposer({ mention: userHandle })}
      className={`${fullWidth && "w-full justify-center"} bg-primary text-skin-inverted flex items-center gap-2 ${rounded && "rounded-full"} font-semibold hover:brightness-95 ${!fullWidth && "p-2 lg:px-3 lg:py-2"}`}
    >
      <RiQuillPenFill className="text-skin-icon-inverted text-2xl" />
      <span className="text-skin-icon-inverted hidden lg:inline">Post</span>
    </button>
  );
}
