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
import { PiCompassRoseFill } from "react-icons/pi";
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
    <nav id="appBottom" className="bg-skin-inverted border-skin-secondary fixed bottom-0 z-40 flex justify-center w-full overflow-auto border-t pb-8 transition-all ease-linear md:hidden">
      <NavItem
        href="/dashboard/home"
        icon={<BiSolidHome className="text-2xl md:text-3xl" />}
        activeIcon={<BiSolidHome className="text-2xl md:text-3xl" />}
        title="Home"
        isActive={pathname === "/dashboard/home"}
        colorActive="text-skin-icon-inverted bg-skin-overlay"
        colorBase="text-skin-icon-muted"
        fullWidth={true}
      />
      <NavItem
        href="/dashboard/explore"
        icon={<PiCompassRoseFill className="text-2xl md:text-3xl" />}
        activeIcon={<PiCompassRoseFill className="text-2xl md:text-3xl" />}
        title="Home"
        isActive={pathname === "/dashboard/explore"}
        colorActive="text-skin-icon-inverted bg-skin-overlay"
        colorBase="text-skin-icon-muted"
        fullWidth={true}
      />
      <ComposeButton rounded={false} fullWidth={true}/>
      <NavItem
        href="/dashboard/notifications"
        icon={<FaBell className="text-2xl md:text-3xl" />}
        activeIcon={<FaBell className="text-2xl md:text-3xl" />}
        title="Notifications"
        isActive={pathname.includes("notifications")}
        colorActive="text-skin-icon-inverted bg-skin-overlay"
        colorBase="text-skin-icon-muted"
        badge={notificationsCount ?? 0}
        fullWidth={true}
      />
      <NavItem
        href={`/dashboard/user/${handle}`}
        icon={<FaUserAlt className="text-2xl md:text-3xl" />}
        activeIcon={<FaUserAlt className="text-2xl md:text-3xl" />}
        title="Profile"
        isActive={pathname.includes("user")}
        colorActive="text-skin-icon-inverted bg-skin-overlay"
        colorBase="text-skin-icon-muted"
        fullWidth={true}
      />
    </nav>
  );
}
