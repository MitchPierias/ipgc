import { storyblokEditable } from "@storyblok/react";
import { StoryblokImageMeta } from "../Section/Section.transform";
import { ImagePanel as ImagePanelComponent } from "./ImagePanel";

export type ImagePanelBlok = {
  _uid: string;
  component: "ImagePanel";
  image: StoryblokImageMeta;
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
