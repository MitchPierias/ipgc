import { storyblokEditable } from "@storyblok/react";
import { BackgroundMedia as BackgroundMediaComponent } from "./BackgroundMedia";

interface BackgroundMediaBlok extends Common.Blok {
  component: "BackgroundMedia";
  media: Common.ImageBlock;
}

export const BackgroundMedia = ({
  testID = "background-media",
  blok,
}: Common.BlokProps<BackgroundMediaBlok>) => {
  return (
    <BackgroundMediaComponent
      testID={testID}
      src={blok.media.filename}
      {...storyblokEditable(blok)}
    />
  );
};
