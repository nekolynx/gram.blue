"use client";

import { redirect } from "next/navigation";
import Button from "@/components/actions/button/Button";
import Avatar from "@/components/dataDisplay/avatar/Avatar";
import { ProfileViewDetailed } from "@atproto/api/dist/client/types/app/bsky/actor/defs";
import Image from "next/image";
import Link from "next/link";
import { HiCog } from "react-icons/hi";

interface Props {
  profile: ProfileViewDetailed;
}

export default function TopBar(props: Props) {
  const { profile } = props;

  return (
    <div className="appTop bg-primary border-primary sticky top-0 z-[60] flex items-center justify-between border-b px-3 py-2.5 transition-all ease-linear md:hidden max-h-[54px]">
      <Link
        href={`/dashboard/user/${profile?.handle}`}
        className="hover:brightness-90 invisible"
      >
        <Avatar
          src={profile.avatar?.replace("avatar", "avatar_thumbnail")}
          size="sm"
        />
      </Link>
      <Button
        onClick={() => (window.scrollY == 0 ? redirect("/") : window.scrollTo({ top: 0, behavior: "smooth" }))}
        className="inline"
      >
        <div className="flex items-center gap-2 group">
          <Image
            src="/gramblueText.svg"
            alt="gram.blue"
            width={90}
            height={28}
          />
        </div>{" "}
      </Button>
      <Link href="/dashboard/settings">
        <HiCog className="text-skin-icon-inverted hover:text-skin-icon-base text-2xl md:text-3xl" />
      </Link>
    </div>
  );
}
