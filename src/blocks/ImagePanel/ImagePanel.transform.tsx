import { storyblokEditable } from "@storyblok/react";
import { ImagePanel as ImagePanelComponent } from "./ImagePanel";

export type ImagePanelBlok = {
  _uid: string;
  component: "ImagePanel";
  image: Common.ImageBlock;
};

export const ImagePanel = ({ blok }: { blok: ImagePanelBlok }) => {
  return (
    <ImagePanelComponent
      testID={"image-panel"}
      image={blok.image.filename}
      {...storyblokEditable(blok)}
    />
  );
};
