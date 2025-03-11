"use client";

import Avatar from "@/components/dataDisplay/avatar/Avatar";
import PostActions from "@/components/dataDisplay/postActions/PostActions";
import PostActionsBy from "@/components/dataDisplay/postActions/PostActionsBy";
import PostEmbed from "@/components/dataDisplay/postEmbed/PostEmbed";
import PostText from "@/components/dataDisplay/postText/postText";
import Reason from "@/components/dataDisplay/reason/Reason";
import { AppBskyFeedDefs } from "@atproto/api";
import { ContentFilterResult } from "../../../../types/feed";
import PostHider from "@/components/dataDisplay/postHider/PostHider";
import Link from "next/link";
import Threadline from "@/components/dataDisplay/threadLine/ThreadLine";
import { getPostId } from "@/lib/utils/link";
import { getRelativeTime } from "@/lib/utils/time";
import { getPostFilter } from "@/lib/utils/feed";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProfileHoverCard from "../profileHoverCard/ProfileHoverCard";
import NotFoundEmbed from "@/components/dataDisplay/postEmbed/NotFoundEmbed";
import { FaPlus } from "react-icons/fa";
import { MdModeComment } from "react-icons/md";
import { getNotificationLabel } from "@/lib/utils/text";

interface Props {
  post: AppBskyFeedDefs.FeedViewPost;
  isParent?: boolean;
  isReply?: boolean;
  filter: ContentFilterResult;
}

export default function FeedPostReply(props: Props) {
  const { post, isReply, isParent, filter } = props;
  const { author, indexedAt } = post.post;
  const { reason } = post;
  const { showToggle, shouldHide, message } = getPostFilter(post, filter);
  const [hidden, setHidden] = useState(shouldHide);
  const router = useRouter();
  const notFound = post.post.viewer === undefined;
  const isAuthorMuted = !notFound && post.post.author?.viewer?.muted;
  const [showPost, setShowPost] = useState(!isAuthorMuted);

  if (notFound) {
    return (
      <article>
        <NotFoundEmbed depth={0} />
        {isParent && !reason && (
          <div className="px-3 -mt-9">
            <div className="relative flex items-start gap-3">
              <div className={`flex grow flex-col ${isParent && "pb-12"}`}>
                <Threadline />
              </div>
            </div>
          </div>
        )}
      </article>
    );
  }

  if (!showPost) {
    return (
      <article className="p-3">
        {reason && <Reason reason={reason} />}
        <div className="relative flex items-start gap-3">
          <Avatar size="md" className="z-20 shrink-0" />
          <div className={`flex grow flex-col ${isParent && "pb-6"}`}>
            {isParent && !reason && <Threadline />}
            <PostHider
              message={"Post by muted user"}
              hidden={true}
              onToggleVisibility={() => setShowPost(true)}
              showToggle={true}
            />
          </div>
        </div>
      </article>
    );
  }

  return (

    <article className="flex gap-2 p-3">
        <MdModeComment className="text-skin-icon-repost shrink-0 text-xl"/>
        <div className="flex flex-col gap-2">
            <ProfileHoverCard handle={author.handle}>
                <Avatar
                src={author.avatar?.replace("avatar", "avatar_thumbnail")}
                className="float-left mr-2"
                />
            </ProfileHoverCard>
            <div className="flex">
                <span className="text-skin-base hover:text-skin-secondary line-clamp-1 max-w-[90%] shrink-0 overflow-ellipsis break-all font-semibold">
                    <Link
                        href={`/dashboard/user/${author.handle}`}
                        onClick={(e) => {
                        e.stopPropagation();
                        }}
                        className="flex gap-1"
                        >
                        {author.displayName || author.handle}{" "}
                    </Link>
                </span>
                <span className="text-skin-tertiary break-words font-medium">
                    &nbsp;{getNotificationLabel("reply")}
                </span>
                <span className="text-skin-tertiary whitespace-nowrap font-medium">
                    &nbsp;· {getRelativeTime(indexedAt)}
                </span>
            </div>
            <div  onClick={(e) => {e.stopPropagation();router.push(`/dashboard/user/${post?.post.author.handle}/post/${getPostId(post.post.uri)}`,);}}
                className="text-skin-secondary cursor-pointer">
                <PostText record={post.post.record} />
            </div>
            {showToggle && (
                <PostHider
                message={message}
                hidden={hidden}
                onToggleVisibility={setHidden}
                showToggle={shouldHide}
                />
            )}
            {!hidden && post.post.embed && (
                <PostEmbed content={post.post.embed} depth={0} />
            )}
            <PostActions post={post.post} mode="reply" />
        </div>
    </article>

  );
}
