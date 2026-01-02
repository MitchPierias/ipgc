import { storyblokEditable } from "@storyblok/react";
import { VideoPlayer as VideoPlayerComponent } from "./VideoPlayer";

export interface VideoPlayerBlok extends Common.Blok {
  component: "VideoPlayer";
  playback_id: string; // Mux playback ID
  thumbnail_image?: Common.ImageBlock;
  alt?: string; // Alt text for thumbnail
  auto_play?: boolean;
  loop?: boolean;
  muted?: boolean;
  plays_inline?: boolean;
}

const buildMuxUrl = (playbackId: string) => {
  return `https://stream.mux.com/${playbackId}.m3u8`;
};

export const VideoPlayer = ({ blok }: Common.BlokProps<VideoPlayerBlok>) => {
  return (
    <VideoPlayerComponent
      testID="video"
      src={buildMuxUrl(blok.playback_id)}
      thumbnailImage={blok.thumbnail_image?.filename}
      alt={blok.alt || blok.thumbnail_image?.alt || "Video thumbnail"}
      autoPlay={blok.auto_play}
      loop={blok.loop}
      muted={blok.muted}
      playsInline={blok.plays_inline}
      {...storyblokEditable(blok)}
    />
  );
};
