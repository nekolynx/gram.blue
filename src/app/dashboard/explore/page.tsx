import NavItem from "@/components/navigational/navbar/NavItem";
import { BiPlanet, BiSolidPlanet } from "react-icons/bi";
import { PiMagnifyingGlassBold, PiMagnifyingGlassFill } from "react-icons/pi";
import { HiClipboardList, HiOutlineClipboardList } from "react-icons/hi";

export default function Page() {
    return (
    <>
       
      <NavItem
        href="/dashboard/search"
        icon={<PiMagnifyingGlassBold className="text-2xl md:text-3xl" />}
        activeIcon={<PiMagnifyingGlassFill className="text-2xl md:text-3xl" />}
        title="Search"
      />
      <NavItem
        href="/dashboard/feeds"
        icon={<BiPlanet className="text-2xl md:text-3xl" />}
        activeIcon={<BiSolidPlanet className="text-2xl md:text-3xl" />}
        title="Feeds"
      />
      <NavItem
        href="/dashboard/lists"
        icon={<HiOutlineClipboardList className="text-2xl md:text-3xl" />}
        activeIcon={<HiClipboardList className="text-2xl md:text-3xl" />}
        title="Lists"
      />
    </> 
  );
}