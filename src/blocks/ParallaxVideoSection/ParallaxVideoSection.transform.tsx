import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { ParallaxVideoSection as Component } from "./ParallaxVideoSection";
import { DualPanelBlok } from "../DualPanel/DualPanel.transform";

export type ParallaxVideoSectionBlok = {
  _uid: string;
  component: "ParallaxVideoSection";
  media: {
    filename: string;
    content_type: string;
  };
  background_speed: number;
  content_speed: number;
  width: string;
  height: string;
  padded: boolean;
  contents?: DualPanelBlok[];
};
export const ParallaxVideoSection = ({
  blok,
}: {
  blok: ParallaxVideoSectionBlok;
}) => {
  return (
    <Component
      testID={"parallax-video-section"}
      media={{
        type: "video",
        src: blok.media.filename,
        format: blok.media.content_type || "video/mp4",
      }}
      backgroundSpeed={blok.background_speed || 0.2}
      contentSpeed={blok.content_speed || 0.6}
      width={blok.width || "full"}
      height={blok.height || "full"}
      padded={blok.padded || false}
      {...storyblokEditable(blok)}
    >
      {blok.contents?.map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </Component>
  );
};
