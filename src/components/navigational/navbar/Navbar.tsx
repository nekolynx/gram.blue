"use client";

import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

import {
  BiHome,
  BiSolidHome,
  BiPlanet,
  BiSolidPlanet,
  BiCog,
  BiSolidCog,
} from "react-icons/bi";
import { PiMagnifyingGlassBold, PiMagnifyingGlassFill } from "react-icons/pi";
import { HiClipboardList, HiOutlineClipboardList } from "react-icons/hi";
import { FaBell, FaRegBell } from "react-icons/fa6";
import { getUnreadNotificationsCount } from "@/lib/api/bsky/notification";
import { useQuery } from "@tanstack/react-query";
import { useAgent } from "@/app/providers/agent";

export default function Navbar() {
  const agent = useAgent();
  const pathname = usePathname();

  const classActive = "text-skin-icon-inverted bg-skin-overlay p-2";
  const classBase = "text-skin-icon-muted p-2 hover:text-skin-icon-inverted";

  const {
    data: notificationsCount,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["notificationsCount"],
    queryFn: async () => {
      return getUnreadNotificationsCount(agent);
    },
    refetchInterval: 10000,
  });

  return (
    <nav id="appBottom" className="inline-flex flex-col rounded-md bg-skin-inverted">
      <NavItem
        href="/dashboard/home"
        icon={<BiHome className="text-xl md:text-2xl" />}
        activeIcon={<BiSolidHome className="text-xl md:text-2xl" />}
        title="Home"
        isActive={pathname === "/dashboard/home"}
        colorActive={classActive+" rounded-t-md"}
        colorBase={classBase+" rounded-t-md"}
      />
      <NavItem
        href="/dashboard/search"
        icon={<PiMagnifyingGlassBold className="text-xl md:text-xl" />}
        activeIcon={<PiMagnifyingGlassFill className="text-xl md:text-xl" />}
        title="Search"
        isActive={pathname.includes("search")}
        colorActive={classActive}
        colorBase={classBase}
      />
      <NavItem
        href="/dashboard/feeds"
        icon={<BiPlanet className="text-xl md:text-2xl" />}
        activeIcon={<BiSolidPlanet className="text-xl md:text-2xl" />}
        title="Feeds"
        isActive={pathname === "/dashboard/feeds"}
        colorActive={classActive}
        colorBase={classBase}
      />
      <NavItem
        href="/dashboard/lists"
        icon={<HiOutlineClipboardList className="text-xl md:text-2xl" />}
        activeIcon={<HiClipboardList className="text-xl md:text-2xl" />}
        title="Lists"
        isActive={pathname === "/dashboard/lists"}
        colorActive={classActive}
        colorBase={classBase}
      />
      <NavItem
        href="/dashboard/notifications"
        icon={<FaRegBell className="text-xl md:text-2xl" />}
        activeIcon={<FaBell className="text-xl md:text-2xl" />}
        title="Notifications"
        isActive={pathname.includes("notifications")}
        badge={notificationsCount ?? 0}
        colorActive={classActive}
        colorBase={classBase}
      />
      <NavItem
        href="/dashboard/settings"
        icon={<BiCog className="text-xl md:text-2xl" />}
        activeIcon={<BiSolidCog className="text-xl md:text-2xl" />}
        title="Settings"
        isActive={pathname.includes("settings")}
        colorActive={classActive+" rounded-b-md"}
        colorBase={classBase+" rounded-b-md"}
      />
    </nav>
  );
}
