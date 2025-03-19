import {
  AppBskyEmbedExternal,
  AppBskyEmbedImages,
  AppBskyEmbedRecord,
  AppBskyEmbedRecordWithMedia,
  AppBskyGraphDefs,
  AppBskyFeedDefs,
  AppBskyEmbedVideo,
} from "@atproto/api";
import Image from "next/image";

interface Props {
  content: AppBskyFeedDefs.FeedViewPost["post"]["embed"];
  depth: number;
  blur?: boolean;
}

export default function PostThumbnail(props: Props) {
  const { content, depth = 0, blur } = props;

  const getEmbed = (content: AppBskyFeedDefs.FeedViewPost["post"]["embed"]) => {
    if (AppBskyEmbedImages.isView(content)) {
        return <div style={{backgroundImage: `url(${content.images[0].thumb})`,height: "33vw", maxHeight: "12rem", filter: `${blur ? "blur(20px)" : "none"}`}} className="w-full bg-cover bg-center"/>
    }
    else if(AppBskyEmbedVideo.isView(content)) {
        return <div style={{backgroundImage: `url(${content.thumbnail})`,height: "33vw", maxHeight: "12rem", filter: `${blur ? "blur(20px)" : "none"}`}} className="w-full bg-cover bg-center"/>
    }
    else if(AppBskyEmbedRecordWithMedia.isView(content)) {
       if(content.media != null){
        let url = "";
        switch(content.media.$type){
          case "app.bsky.embed.video#view": url = ""+content.media.thumbnail; break;
          case "app.bsky.embed.images#view": url = ""+(content.media.images as AppBskyEmbedImages.ViewImage[])[0].thumb; break;
        }
        return <div style={{backgroundImage: `url(${url})`,height: "33vw", maxHeight: "12rem", filter: `${blur ? "blur(20px)" : "none"}`}} className="w-full bg-cover bg-center"/>
       }
    }
  };

  const chosenEmbed = getEmbed(content);

  return <>{chosenEmbed && <>{chosenEmbed}</>}</>;
}
