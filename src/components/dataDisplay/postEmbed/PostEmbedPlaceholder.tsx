import {
  AppBskyEmbedExternal,
  AppBskyEmbedImages,
  AppBskyEmbedRecord,
  AppBskyEmbedRecordWithMedia,
  AppBskyGraphDefs,
  AppBskyFeedDefs,
  AppBskyEmbedVideo,
} from "@atproto/api";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import CensoredEmbed from "./CensoredEmbed";

interface Props {
  content: AppBskyFeedDefs.FeedViewPost["post"]["embed"];
  depth: number;
}

export default function PostEmbedPlaceholder(props: Props) {
  const { content, depth = 0 } = props;

  const getEmbed = (content: AppBskyFeedDefs.FeedViewPost["post"]["embed"]) => {
    if (AppBskyEmbedImages.isView(content)) {
      return ( 
        <CensoredEmbed width={content.images[0].aspectRatio?.width} height={content.images[0].aspectRatio?.height}/>
    );
    } else if (AppBskyGraphDefs.isStarterPackViewBasic(content?.record)) {
      return <>StarterPack</>;
    } else if (AppBskyEmbedExternal.isView(content)) {
      return <>ExternalEmbed</>;
    } else if (AppBskyFeedDefs.isGeneratorView(content?.record) && content?.record) {
      return <>FeedEmbed</>;
    } else if (AppBskyGraphDefs.isListView(content?.record) && content?.record) {
      return <>ListEmbed</>;
    } else if (AppBskyEmbedRecord.isView(content)) {
      return <>RecordEmbed</>;
    } else if (AppBskyEmbedRecordWithMedia.isView(content)) {
      if(content?.media.images) {return (<CensoredEmbed width={(content.media.images as AppBskyEmbedImages.ViewImage[])[0].aspectRatio?.width} height={(content.media.images as AppBskyEmbedImages.ViewImage[])[0].aspectRatio?.height} />);}
      else if(content?.media.thumbnail) {return (<CensoredEmbed width={(content.media.thumbnail as AppBskyEmbedImages.ViewImage[])[0].aspectRatio?.width} height={(content.media.thumbnail as AppBskyEmbedImages.ViewImage[])[0].aspectRatio?.height} />);}
    } else if (AppBskyEmbedVideo.isView(content)) {
      return (
        <CensoredEmbed width={content.aspectRatio?.width} height={content.aspectRatio?.height} />
      );
    }
  };

  const chosenEmbed = getEmbed(content);

  return <>{chosenEmbed && <>{chosenEmbed}</>}</>;
}
