
import { AppBskyFeedPost, type AppBskyFeedDefs } from "@atproto/api";
import Link from "next/link";
import { getPostId } from "@/lib/utils/link";

interface Props {
  post: AppBskyFeedDefs.PostView;
}

export default function PostActions(props: Props) {
    const { post } = props;
    return(
        <div className="font-semibold text-primary px-3 pt-3">
            <Link href={`/dashboard/user/${post.author.handle}/post/${getPostId(post.uri)}/liked-by`}>
              &hearts;&nbsp;{post.likeCount} likes
            </Link>
            &nbsp;&bull;&nbsp;
            <Link href={`/dashboard/user/${post.author.handle}/post/${getPostId(post.uri)}/reposted-by`}>
                {post.repostCount} reposts
            </Link>
            &nbsp;&bull;&nbsp;
            <Link href={`/dashboard/user/${post.author.handle}/post/${getPostId(post.uri)}/quotes`}>
                {post.quoteCount} quotes
            </Link>
            
        </div>
    )
}