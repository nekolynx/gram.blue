"use client";

import FeedPost from "@/components/contentDisplay/feedPost/FeedPost";
import FeedPostMedia from "@/components/contentDisplay/feedPost/FeedPostMedia";
import { AppBskyFeedDefs } from "@atproto/api";
import { PostView } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
import { ContentFilterResult } from "../../../types/feed";
import { memo } from "react";

interface Props {
  post: AppBskyFeedDefs.FeedViewPost;
  isReply?: boolean;
  filter: ContentFilterResult;
  mediaOnly?: boolean;
}

const PostContainer = memo(function PostContainer(props: Props) {
  const { post, isReply, filter, mediaOnly } = props;
  const parent = {
    post: post?.reply?.parent as PostView,
  };

  return (
    <>
    { mediaOnly 
      ?
        <FeedPostMedia
          post={post}
          filter={filter}
        />
      : 
        {parent?.post && !post.reason && !mediaOnly && (
          <FeedPost
            post={parent}
            isReply={false}
            isParent={true}
            filter={filter}
          />
        )}
        
        <FeedPost
          post={post}
          isReply={isReply}
          isParent={false}
          filter={filter}
        />
        
      </div>
    }
    </>
  );
});

export default PostContainer;
