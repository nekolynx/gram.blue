import Button from "@/components/actions/button/Button";
import Dropdown from "@/components/actions/dropdown/Dropdown";
import useLike from "@/lib/hooks/bsky/feed/useLike";
import useRepost from "@/lib/hooks/bsky/feed/useRepost";
import { useClipboard } from "use-clipboard-copy";
import { AppBskyFeedPost, type AppBskyFeedDefs } from "@atproto/api";
import { useCallback } from "react";
import { getPostId } from "@/lib/utils/link";
import useMuteUser from "@/lib/hooks/bsky/feed/useMuteUser";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { abbreviateNumber } from "@/lib/utils/number";
import useDeletePost from "@/lib/hooks/bsky/feed/useDeletePost";
import { useComposerControls } from "@/app/providers/composer";
import toast from "react-hot-toast";
import {
  BiDotsHorizontalRounded,
  BiHeart,
  BiMessageRounded,
  BiRepost,
  BiSolidBell,
  BiSolidBellOff,
  BiSolidCopy,
  BiSolidHeart,
  BiSolidQuoteAltRight,
  BiSolidTrash,
} from "react-icons/bi";
import { getTranslateLink } from "@/lib/utils/text";
import { MdOutlineTranslate, MdIosShare } from "react-icons/md";
import { RiChat1Line, RiHeartFill, RiHeartLine } from "react-icons/ri";

interface Props {
  post: AppBskyFeedDefs.PostView;
  mode?: "thread" | "feed" | "reply";
}

function DropdownMenuForPosts(props: Props){
  const { post, mode = "feed" } = props;
  const text = AppBskyFeedPost.isRecord(post.record) && post.record.text;
  const { data: session } = useSession();
  const { deletePost } = useDeletePost({ post: post });
  const { muted, toggleMuteUser } = useMuteUser({ author: post.author });
  const clipboard = useClipboard({ copiedTimeout: 3500 });

  const handleShare = useCallback(() => {
    const postId = getPostId(post.uri);
    const shareUrl = `https://gram.blue/dashboard/user/${post.author.handle}/post/${postId}`;
    clipboard.copy(shareUrl);
    toast.success("Copied link to post", { id: "Copy post link" });
  }, [clipboard, post.uri, post.author.handle]);

  const handleCopyPostText = useCallback(() => {
    toast.success("Copied post text", { id: "Copy post text" });
    clipboard.copy(text);
  }, [clipboard, text]);

  const handleTranslation = useCallback(() => {
    if (text) {
      window.open(getTranslateLink(text), "_blank");
    }
  }, [text]);

  if (!session) return null;

  return ( 
    <Dropdown>
      <Dropdown.Trigger>
        <Button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="text-skin-icon-muted hover:text-skin-base"
        >
          <BiDotsHorizontalRounded className="" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {text && (
          <>
          <Dropdown.MenuItem
            onSelect={handleTranslation}
            text="Translate"
            icon={<MdOutlineTranslate />}
          />
          <hr/>
          </>
        )}
        
        <Dropdown.MenuItem
          onSelect={handleShare}
          text="Copy Link to Post"
          icon={<MdIosShare />}
        />
        {text && (
          <Dropdown.MenuItem
            onSelect={handleCopyPostText}
            text="Copy Post Text"
            icon={<BiSolidCopy />}
          />
        )}
        {session.user?.handle !== post.author.handle && (
          <>
          <hr/>
          <Dropdown.MenuItem
            onSelect={() => {
              toggleMuteUser.mutate();
            }}
            text={`${muted ? "Unmute User" : "Mute User"}`}
            icon={muted ? <BiSolidBell /> : <BiSolidBellOff />}
          />
          </>
        )}
        {session.user?.handle === post.author.handle && (
          <>
          <hr/>
          <Dropdown.MenuItem
            onSelect={() => {
              deletePost.mutate();
            }}
            text="Delete Post"
            icon={<BiSolidTrash />}
          />
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default function PostActions(props: Props) {
  const { post, mode = "feed" } = props;
  const text = AppBskyFeedPost.isRecord(post.record) && post.record.text;
  const { data: session } = useSession();
  const { liked, toggleLike, likeCount } = useLike({ post: post });
  const { reposted, toggleRepost, repostCount } = useRepost({ post: post });
  const quoteCount = post.quoteCount ?? 0;
  const { openComposer } = useComposerControls();

  if (!session) return null;

  if (mode === "reply") {
    return (
      <>
        <div className={`mt-1 flex justify-start gap-3`}>
        <Button
            onClick={(e) => {
              e.stopPropagation();
              toggleLike.mutate();
            }}
            className={
              liked
                ? "text-skin-icon-like"
                : "text-skin-icon-muted hover:text-skin-icon-like"
            }
          >
            {liked ? (
              <RiHeartFill className="text-xl" />
            ) : (
              <RiHeartLine className="text-xl" />
            )}
            {likeCount}
          </Button>
          <Button
            disabled={post.viewer?.replyDisabled}
            onClick={(e) => {
              e.stopPropagation();
              openComposer({
                replyTo: {
                  uri: post.uri,
                  cid: post.cid,
                  text: text.toString(),
                  author: {
                    handle: post.author.handle,
                    displayName: post.author.displayName,
                    avatar: post.author.avatar,
                  },
                },
              });
            }}
            className="hover:text-primary text-skin-icon-muted"
          >
            <RiChat1Line className="text-xl" />
            {post.replyCount! > 0 ? post.replyCount : <></>}
          </Button>
          <Dropdown>
            <Dropdown.Trigger>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={
                  reposted
                    ? "text-skin-icon-repost"
                    : "text-skin-icon-muted hover:text-skin-icon-repost"
                }
              >
                <BiRepost className="text-2xl" />
                {repostCount + quoteCount > 0 ? repostCount+quoteCount : <></>}
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.MenuItem
                onSelect={() => {
                  toggleRepost.mutate();
                }}
                text={`${reposted ? "Undo repost" : "Repost"}`}
                icon={<BiRepost />}
              />
              <Dropdown.MenuItem
                onSelect={() => {
                  openComposer({
                    quote: {
                      uri: post.uri,
                      cid: post.cid,
                      text: text.toString(),
                      indexedAt: post.indexedAt,
                      author: {
                        did: post.author.did,
                        handle: post.author.handle,
                        displayName: post.author.displayName,
                        avatar: post.author.avatar,
                      },
                    },
                  });
                }}
                text="Quote Post"
                icon={<BiSolidQuoteAltRight />}
              />
            </Dropdown.Menu>
          </Dropdown>
          
          <DropdownMenuForPosts post={post}/>
        </div>
      </>
    )
  }

  return (
    <div className="flex gap-2">
      <Button
        onClick={(e) => {
          e.stopPropagation();
          toggleLike.mutate();
        }}
        className={`font-medium ${
          liked
            ? "text-skin-icon-like"
            : "text-skin-icon-muted hover:text-skin-icon-like"
        }
          `}
      >
        {liked ? (
          <RiHeartFill className="" />
        ) : (
          <RiHeartLine className="" />
        )}
        <span className="hidden">{likeCount > 0 && abbreviateNumber(likeCount)}</span>
      </Button>

      <Button
        disabled={post.viewer?.replyDisabled}
        onClick={(e) => {
          e.stopPropagation();
          openComposer({
            replyTo: {
              uri: post.uri,
              cid: post.cid,
              text: text.toString(),
              author: {
                handle: post.author.handle,
                displayName: post.author.displayName,
                avatar: post.author.avatar,
              },
            },
          });
        }}
        className="hover:text-primary text-skin-icon-muted font-medium"
      >
        <RiChat1Line className="" />
        <span className="hidden">{post.replyCount ? abbreviateNumber(post.replyCount) : null}</span>
      </Button>

      <Dropdown>
        <Dropdown.Trigger>
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`font-medium
              ${
                reposted
                  ? "text-skin-icon-repost"
                  : "text-skin-icon-muted hover:text-skin-icon-repost"
              }
            `}
          >
            <BiRepost className="" />
            <span className="hidden">{repostCount > 0 && abbreviateNumber(repostCount)}</span>
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.MenuItem
            onSelect={() => {
              toggleRepost.mutate();
            }}
            text={`${reposted ? "Undo repost" : "Repost"}`}
            icon={<BiRepost />}
          />
          <Dropdown.MenuItem
            onSelect={() => {
              openComposer({
                quote: {
                  uri: post.uri,
                  cid: post.cid,
                  text: text.toString(),
                  indexedAt: post.indexedAt,
                  author: {
                    did: post.author.did,
                    handle: post.author.handle,
                    displayName: post.author.displayName,
                    avatar: post.author.avatar,
                  },
                },
              });
            }}
            text="Quote Post"
            icon={<BiSolidQuoteAltRight />}
          />
        </Dropdown.Menu>
      </Dropdown>

      <span className="grow"></span>
      
      <DropdownMenuForPosts post={post}/>
      
    </div>
  );
}
