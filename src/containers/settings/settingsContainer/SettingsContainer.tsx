import Link from "next/link";
import { FaSlidersH } from "react-icons/fa";
import { ImBubbles2 } from "react-icons/im";
import { BiHash } from "react-icons/bi";
import { MdRemoveRedEye } from "react-icons/md";
import { BiSolidBellOff } from "react-icons/bi";
import { BsPersonFillSlash } from "react-icons/bs";
import { getSessionFromServer } from "@/lib/api/auth/session";
import { getProfile } from "@/lib/api/bsky/actor";
import Avatar from "@/components/dataDisplay/avatar/Avatar";
import SignOut from "@/components/actions/signOut/SignOut";

export default async function SettingsContainer() {
  const session = await getSessionFromServer();
  const profile = await getProfile(session?.user.handle);

  return (
    <>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold mx-3 md:mx-0 mb-2">Settings</h2>
        {profile && (
          <section>
            <h3 className="text-xl font-semibold mx-3 md:mx-0 mb-2">Account</h3>
            <section className="flex flex-wrap gap-3 justify-between items-center mx-3 md:mx-0">
              <div className="flex gap-3">
                <Avatar profile={profile} size="md" />
                <div className="flex flex-col">
                  <span className="font-semibold break-all max-w-[90%] shrink-0 line-clamp-1 overflow-ellipsis text-neutral-700">
                    {profile.displayName ?? profile.handle}
                  </span>
                  <span className="text-neutral-400 font-medium line-clamp-1 break-all shrink min-w-[10%]">
                    @{profile.handle}
                  </span>
                </div>
              </div>
              <SignOut />
            </section>
          </section>
        )}
        <section>
          <h3 className="text-xl font-semibold mx-3 md:mx-0 mb-2">
            Feeds and Threads
          </h3>
          <section className="flex flex-col">
            <Link
              href="/dashboard/settings/home-feed"
              className="flex items-center gap-2 p-3 border border-x-0 md:border-x md:first:rounded-t-2xl md:last:rounded-b-2xl last:border-b even:[&:not(:last-child)]:border-b-0 odd:[&:not(:last-child)]:border-b-0 hover:bg-neutral-50"
            >
              <FaSlidersH className="text-neutral-600 text-xl" />
              Home Feed Preferences
            </Link>
            <Link
              href="/dashboard/settings/thread-preferences"
              className="flex items-center gap-2 p-3 border border-x-0 md:border-x md:first:rounded-t-2xl md:last:rounded-b-2xl last:border-b even:[&:not(:last-child)]:border-b-0 odd:[&:not(:last-child)]:border-b-0 hover:bg-neutral-50"
            >
              <ImBubbles2 className="text-neutral-600 text-xl" />
              Thread Preferences
            </Link>
            <Link
              href="/dashboard/settings/my-feeds"
              className="flex items-center gap-2 p-3 border border-x-0 md:border-x md:first:rounded-t-2xl md:last:rounded-b-2xl last:border-b even:[&:not(:last-child)]:border-b-0 odd:[&:not(:last-child)]:border-b-0 hover:bg-neutral-50"
            >
              <BiHash className="text-neutral-600 text-xl" />
              My Feeds
            </Link>
          </section>
        </section>
        <section>
          <h3 className="text-xl font-semibold mx-3 md:mx-0 mb-2">
            Moderation
          </h3>
          <section className="flex flex-col">
            <Link
              href="/dashboard/settings/content-filtering"
              className="flex items-center gap-2 p-3 border border-x-0 md:border-x md:first:rounded-t-2xl md:last:rounded-b-2xl last:border-b even:[&:not(:last-child)]:border-b-0 odd:[&:not(:last-child)]:border-b-0 hover:bg-neutral-50"
            >
              <MdRemoveRedEye className="text-neutral-600 text-xl" />
              Content Filtering
            </Link>
            <Link
              href="/dashboard/settings/muted-users"
              className="flex items-center gap-2 p-3 border border-x-0 md:border-x md:first:rounded-t-2xl md:last:rounded-b-2xl last:border-b even:[&:not(:last-child)]:border-b-0 odd:[&:not(:last-child)]:border-b-0 hover:bg-neutral-50"
            >
              <BiSolidBellOff className="text-neutral-600 text-xl" />
              Muted Users
            </Link>
            <Link
              href="/dashboard/settings/blocked-users"
              className="flex items-center gap-2 p-3 border border-x-0 md:border-x md:first:rounded-t-2xl md:last:rounded-b-2xl last:border-b even:[&:not(:last-child)]:border-b-0 odd:[&:not(:last-child)]:border-b-0 hover:bg-neutral-50"
            >
              <BsPersonFillSlash className="text-neutral-600 text-xl" />
              Blocked Users
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}
