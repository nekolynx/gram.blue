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
import { useSession } from "next-auth/react";
import { IoMdClock } from "react-icons/io";
import PostEmbedPlaceholder from "@/components/dataDisplay/postEmbed/PostEmbedPlaceholder";
import { RiChat1Fill } from "react-icons/ri";

interface Props {
  post: AppBskyFeedDefs.FeedViewPost;
  isParent?: boolean;
  isReply?: boolean;
  filter: ContentFilterResult;
}

export function StrangerDanger(props: Props) {
  const { post, filter } = props;
  const { author } = post.post;
  const { data: session } = useSession();
  return (
    <>
      {(!author.viewer?.following && author.handle !== session?.user?.handle) && <FaPlus className="absolute bottom-0 right-0 bg-skin-inverted text-skin-inverted rounded-full p-1"/>}
    </>
  )
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
  const bgPattern = "";

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
          <div className={`flex grow flex-col ${isParent && ""}`}>
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
      <div style={{paddingLeft: "1.75rem"}}>
      <PostText record={post.post.record}/>
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
      </div>
      <div style={{paddingLeft: "1.75rem"}}>
        <PostActions post={post.post} mode="reply" />
      </div>
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
      className={`py-3 ${isParent ? " " : "mb-5"}`}
    >
      {reason && <Reason reason={reason} />}

      <div className="relative">
        <div className="flex items-center gap-2 px-2 mb-2">
          <div
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/dashboard/user/${author.handle}`);
            }}
            className="z-20 shrink-0 hover:brightness-90 relative"
          >
            <ProfileHoverCard handle={author.handle}>
              <Avatar
                src={author.avatar?.replace("avatar", "avatar_thumbnail")}
                size="sm"
              />
            </ProfileHoverCard>
            <StrangerDanger post={post} filter={filter}/>
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
                className="cursor-pointer flex items-center"
                onClick={(e) => {e.stopPropagation();}}>
              <IoMdClock />&nbsp;{getRelativeTime(indexedAt)}
              </Link>
            </span>
          </div>
        </div>
        <div className={`${isParent ? "pl-8" : ""}`}>
          {isParent && !reason && <Threadline />}
          {showToggle && (
              <PostHider
                message={message}
                hidden={hidden}
                onToggleVisibility={setHidden}
                showToggle={shouldHide}
              />
          )}
          {!hidden && post.post.embed 
          ? (
            <PostEmbed content={post.post.embed} depth={0} />
          )
          :
            <PostEmbedPlaceholder content={post.post.embed} depth={0} />
          }
          {post.post.embed == null && (
              <div className="bg-skin-tertiary font-semibold border border-x-0 border-skin-base relative flex flex-col justify-center min-h-[35vh] p-[3rem] quoted-with-the-sauce">
                <span className="absolute text-xl top-3 left-3 opacity-25">&ldquo;</span>
                <PostText record={post.post.record} />
                <div className="font-semibold text-primary mt-3">&mdash;{author.displayName}</div>
              </div>
          )}
          <div className="py-3 mx-3 border border-t-0 border-x-0 border-skin-base text-[2em]">
            <PostActions post={post.post} />
          </div>
          <PostActionsBy post={post.post} className="px-3 pt-3"/>
          {post.post.embed != null && (
            <div className="px-5 py-0.5 ml-3 relative">
              <RiChat1Fill className="absolute top-[5pt] left-0 text-[11pt] text-skin-tertiary"/>
              <Link href={`/dashboard/user/${author.handle}`}><span className="font-semibold text-primary">{author.displayName}</span></Link>&nbsp;
              <PostText record={post.post.record} />
            </div>
          )}
          <Link href={`/dashboard/user/${post.post.author.handle}/post/${getPostId(post.post.uri,)}`}
                className="cursor-pointer px-5 w-full text-skin-tertiary font-medium ml-3"
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
