"use client";

import { useSession } from "next-auth/react";
import TabItem from "../tabs/TabItem";
import Tabs from "../tabs/Tabs";
import { usePathname } from "next/navigation";
import { RiLayoutGridLine, RiLayoutRowLine, RiListCheck, RiPokerHeartsLine, RiQrScanLine } from "react-icons/ri";
import { BiUserPin } from "react-icons/bi";

interface Props {
  classicMode?: boolean;
}

export default function ProfileTabs(props: Props) {
  const { classicMode } = props;
  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, 4).join("/");
  const { data: session } = useSession();
  const iconClass = "text-3xl";

  if(classicMode) {
    return (
      <div className="overflow-x-hidden hover:overflow-x-auto w-full justify-between border border-x-0">
        <Tabs className="justify-around">
          <TabItem
            label={<RiLayoutGridLine className={iconClass} />}
            path={`${basePath}/media`}
            isActive={pathname === `${basePath}/media`}
          />
          <TabItem
            label={<RiLayoutRowLine className={iconClass} />}
            path={`${basePath}`}
            isActive={pathname === `${basePath}`}
          />
          <TabItem
            label={<BiUserPin className={iconClass} />}
            path={`${basePath}/replies`}
            isActive={pathname === `${basePath}/replies`}
          />
          {session?.user?.handle === pathname.split("/")[3] && (
            <TabItem
              label={<RiPokerHeartsLine className={iconClass} />}
              path={`${basePath}/likes`}
              isActive={pathname === `${basePath}/likes`}
            />
          )}
          <TabItem
            label={<RiListCheck className={iconClass} />}
            path={`${basePath}/lists`}
            isActive={pathname === `${basePath}/lists`}
          />
        </Tabs>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden hover:overflow-x-auto">
      <Tabs>
        <TabItem
          label="Posts"
          path={`${basePath}`}
          isActive={pathname === `${basePath}`}
        />
        <TabItem
          label="Replies"
          path={`${basePath}/replies`}
          isActive={pathname === `${basePath}/replies`}
        />
        <TabItem
          label="Media"
          path={`${basePath}/media`}
          isActive={pathname === `${basePath}/media`}
        />
        {session?.user?.handle === pathname.split("/")[3] && (
          <TabItem
            label="Likes"
            path={`${basePath}/likes`}
            isActive={pathname === `${basePath}/likes`}
          />
        )}
        <TabItem
          label="Lists"
          path={`${basePath}/lists`}
          isActive={pathname === `${basePath}/lists`}
        />
        <TabItem
          label="Atmosphere"
          path={`${basePath}/atmosphere`}
          isActive={pathname === `${basePath}/atmosphere`}
        />
      </Tabs>
    </div>
  );
}
