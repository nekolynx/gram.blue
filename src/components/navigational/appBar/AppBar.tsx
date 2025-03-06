"use client";

import { usePathname } from "next/navigation";
import NavItem from "../navbar/NavItem";
import { getUnreadNotificationsCount } from "@/lib/api/bsky/notification";
import { useQuery } from "@tanstack/react-query";
import { BiHome, BiPlanet, BiSolidHome, BiSolidPlanet } from "react-icons/bi";
import { PiMagnifyingGlassBold, PiMagnifyingGlassFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { HiClipboardList, HiOutlineClipboardList } from "react-icons/hi";
import { useAgent } from "@/app/providers/agent";
import ComposeButton from "@/components/actions/composeButton/ComposeButton";

interface Props {
  handle: string;
}

export default function AppBar(props: Props) {
  const {handle} = props;
  const pathname = usePathname();
  const agent = useAgent();

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
    <nav className="bg-skin-base border-skin-base fixed bottom-0 z-40 flex w-full justify-between gap-6 overflow-auto border-t px-6 pb-8 pt-1 transition-all ease-linear md:hidden">
      <NavItem
        href="/dashboard/home"
        icon={<BiHome className="text-2xl md:text-3xl" />}
        activeIcon={<BiSolidHome className="text-2xl md:text-3xl" />}
        title="Home"
        isActive={pathname === "/dashboard/home"}
      />
      <NavItem
        href="/dashboard/explore"
        icon={<BiHome className="text-2xl md:text-3xl" />}
        activeIcon={<BiSolidHome className="text-2xl md:text-3xl" />}
        title="Home"
        isActive={pathname === "/dashboard/explore"}
      />
      <ComposeButton/>
      <NavItem
        href="/dashboard/notifications"
        icon={<FaRegBell className="text-2xl md:text-3xl" />}
        activeIcon={<FaBell className="text-2xl md:text-3xl" />}
        title="Notifications"
        isActive={pathname.includes("notifications")}
        badge={notificationsCount ?? 0}
      />
      <NavItem
        href={`/dashboard/user/${handle}`}
        icon={<FaUserAlt className="text-2xl md:text-3xl" />}
        activeIcon={<FaUserAlt className="text-2xl md:text-3xl" />}
        title="Profile"
        isActive={pathname.includes("user")}
      />
    </nav>
  );
}
