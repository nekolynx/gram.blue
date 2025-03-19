
import { AppBskyFeedPost, type AppBskyFeedDefs } from "@atproto/api";
import Link from "next/link";
import { getPostId } from "@/lib/utils/link";
import { RiHeartFill } from "react-icons/ri";

interface Props {
  post: AppBskyFeedDefs.PostView;
  className?: string;
}

export default function PostActionsBy(props: Props) {
    const { post, className } = props;
    return(
        <div className={"font-semibold text-primary "+className}>
            <Link href={`/dashboard/user/${post.author.handle}/post/${getPostId(post.uri)}/liked-by`}>
              <RiHeartFill className="inline-block relative bottom-[1pt] text-[11pt]"/>&nbsp;{post.likeCount} likes
            </Link>
            {post.repostCount! > 0 && 
            <>
                &nbsp;&bull;&nbsp;
                <Link href={`/dashboard/user/${post.author.handle}/post/${getPostId(post.uri)}/reposted-by`}>
                    {post.repostCount} reposts
                </Link>
            </>
            }
            {post.quoteCount! > 0 && 
            <>
                &nbsp;&bull;&nbsp;
                <Link href={`/dashboard/user/${post.author.handle}/post/${getPostId(post.uri)}/quotes`}>
                    {post.quoteCount} quotes
                </Link>
            </>
            }
            
        </div>
    )
}