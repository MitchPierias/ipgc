import { storyblokEditable } from "@storyblok/react";
import { ImagePanel as ImagePanelComponent } from "./ImagePanel";

interface ImagePanelBlok extends Common.Blok {
  component: "ImagePanel";
  image: Common.ImageBlock;
}

export const ImagePanel = ({ blok }: Common.BlokProps<ImagePanelBlok>) => {
  return (
    <ImagePanelComponent
      testID={"image-panel"}
      image={blok.image}
      {...storyblokEditable(blok)}
    />
  );
};
