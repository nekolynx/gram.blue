import { abbreviateNumber } from "@/lib/utils/number";
import Link from "next/link";

interface Props {
  handle: string;
  followCount: number;
  followerCount: number;
  postsCount: number;
  classicMode?: boolean;
}

export default function UserStats(props: Props) {
  const { handle, followCount, followerCount, postsCount, classicMode } = props;
  const uppertext = classicMode ? "flex-col font-bold text-lg items-center" : "gap-1 text-skin-base font-semibold";
  const lowertext = classicMode ? "lowercase text-xs text-skin-tertiary font-semibold" : "text-skin-tertiary font-medium";

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ` + (classicMode ? "flex-row-reverse w-full p-4" : "" )}>
      <Link
        href={`/dashboard/user/${handle}/following`}
        className={"flex hover:brightness-110 " + uppertext}
      >
        {abbreviateNumber(followCount)}
        <span className={lowertext}>Following</span>
      </Link>

      <Link
        href={`/dashboard/user/${handle}/followers`}
        className={"flex hover:brightness-110 "+ uppertext}
      >
        {abbreviateNumber(followerCount)}
        <span className={lowertext}>Followers</span>
      </Link>
      <div className={"flex "+ uppertext}>
        <span>
          {abbreviateNumber(postsCount)}
        </span>
        <span className={lowertext}>Posts</span>
      </div>
    </div>
  );
}
