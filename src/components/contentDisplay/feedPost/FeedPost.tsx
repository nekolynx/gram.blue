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

interface Props {
  post: AppBskyFeedDefs.FeedViewPost;
  isParent?: boolean;
  isReply?: boolean;
  filter: ContentFilterResult;
}

export default function FeedPost(props: Props) {
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
    <>
    { isReply ? 

    <article className="p-3">
      <ProfileHoverCard handle={author.handle}>
        <Avatar
          src={author.avatar?.replace("avatar", "avatar_thumbnail")}
          size="xs"
          className="float-left mr-2"
        />
      </ProfileHoverCard>
      <Link
        href={`/dashboard/user/${author.handle}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex gap-1"
        >
      <div className="text-skin-base hover:text-skin-secondary line-clamp-1 max-w-[90%] shrink-0 overflow-ellipsis break-all font-semibold">
        {author.displayName || author.handle}{" "}
      </div>
      <div className="text-primary line-clamp-1 min-w-[10%] shrink break-all font-semibold">
        @{author.handle}
      </div>
      &nbsp;
      </Link>
      <PostText record={post.post.record} />
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
      <PostActions post={post.post} mode="thread" />
    </article>

    :

    <article
      onClick={(e) => {/*
        e.stopPropagation();
        router.push(
          `/dashboard/user/${post.post.author.handle}/post/${getPostId(
            post.post.uri,
          )}`,
        );
      */}}
      className="py-3 mb-4"
    >
      {reason && <Reason reason={reason} />}

      <div className="relative">
        <div className="flex items-center gap-2 px-2 mb-2">
          <div
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/dashboard/user/${author.handle}`);
            }}
            className="z-20 shrink-0 hover:brightness-90"
          >
            <ProfileHoverCard handle={author.handle}>
              <Avatar
                src={author.avatar?.replace("avatar", "avatar_thumbnail")}
                size="sm"
              />
            </ProfileHoverCard>
          </div>
          <div className="flex items-center w-full">
            <Link
              href={`/dashboard/user/${author.handle}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex gap-1"
            >
              <span className="text-skin-base hover:text-skin-secondary line-clamp-1 max-w-[90%] shrink-0 overflow-ellipsis break-all font-semibold hidden">
                {author.displayName || author.handle}{" "}
              </span>
              <span className="text-primary line-clamp-1 min-w-[10%] shrink break-all font-semibold">
                @{author.handle}
              </span>
              
            </Link>
            <span className="grow"/>
            <span className="text-skin-tertiary whitespace-nowrap font-medium">
              <Link href={`/dashboard/user/${post.post.author.handle}/post/${getPostId(post.post.uri,)}`}
                className="cursor-pointer"
                onClick={(e) => {e.stopPropagation();}}>
              {getRelativeTime(indexedAt)}
              </Link>
            </span>
          </div>
        </div>
        <div className={`${isParent && "pb-6"}`}>
          {isParent && !reason && <Threadline />}
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
          {post.post.embed == null && (
              <div className="bg-skin-tertiary font-semibold p-6 border border-x-0 border-skin-base" style={{minHeight: "40vh"}}>
                <PostText record={post.post.record} />
                <div className="font-semibold text-primary">&mdash;{author.displayName}</div>
              </div>
          )}
          <div className="py-3 mx-3 border border-t-0 border-x-0 border-skin-base" style={{fontSize: "2em"}}>
            <PostActions post={post.post} />
          </div>
          <PostActionsBy post={post.post}/>
          {post.post.embed != null && (
            <div className="p-3">
              <Link href={`/dashboard/user/${author.handle}`}><span className="font-semibold text-primary">{author.displayName}</span></Link>&nbsp;
              <PostText record={post.post.record} />
            </div>
          )}
          <Link href={`/dashboard/user/${post.post.author.handle}/post/${getPostId(post.post.uri,)}`}
                className="cursor-pointer px-3 w-full text-skin-tertiary"
                onClick={(e) => {e.stopPropagation();}}>
                  View all {post.post.replyCount} comments.
          </Link>
        </div>
      </div>
    </article>
        }
    </>
  );
}
