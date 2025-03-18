import { AppBskyFeedDefs } from "@atproto/api";
import { BiRepost, BiSolidPin } from "react-icons/bi";
import Link from "next/link";
import {
  ReasonPin,
  ReasonRepost,
} from "@atproto/api/dist/client/types/app/bsky/feed/defs";

interface Props {
  reason:
    | ReasonRepost
    | ReasonPin
    | { [k: string]: unknown; $type: string }
    | undefined;
}

export default function Reason(props: Props) {
  const { reason } = props;
  const isRepost = AppBskyFeedDefs.isReasonRepost(reason);
  const isPin = AppBskyFeedDefs.isReasonPin(reason);

  return (
    <>
      {isRepost && (
        <Link
          href={`/dashboard/user/${reason.by.handle}`}
          onClick={(e) => e.stopPropagation()}
          className="max-w-fit"
        >
          <div className="px-3 py-1.5 mb-1 bg-skin-inverted text-skin-inverted hover:bg-primary inline-flex flex-wrap items-center gap-1 text-lg font-semibold ">
            <BiRepost />
            <small className="leading-[0.75]">{reason.by.displayName || reason.by.handle} reposted</small>
          </div>
        </Link>
      )}
      {isPin && (
        <div className="px-3 max-w-fit text-skin-secondary inline-flex flex-wrap items-center gap-1 text-lg font-semibold">
          <BiSolidPin />
          <small>Pinned post</small>
        </div>
      )}
    </>
  );
}
