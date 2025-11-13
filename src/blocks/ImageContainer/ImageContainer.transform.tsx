import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { ImageContainer as ImageContainerComponent } from "./ImageContainer";
import { LayoutPanel } from "../LayoutPanel/LayoutPanel.transform";

export type StoryblokImageMeta = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: "asset" | string;
  meta_data: {};
  is_external_url: boolean;
};

type ImageContainerContent = Common.PickBlockProps<typeof LayoutPanel>;

type ImageContainerBlok = {
  background_image?: StoryblokImageMeta;
  contents?: ImageContainerContent[];
};

export const ImageContainer = ({
  blok,
}: Common.BlokProps<ImageContainerBlok>) => {
  return (
    <ImageContainerComponent
      testID="image-container"
      media={
        blok.background_image?.filename && blok.background_image.filename !== ""
          ? {
              type: blok.background_image.filename.match(/video/)
                ? "video"
                : "image",
              format: blok.background_image?.filename.split(".").pop() || "",
              src: blok.background_image?.filename,
            }
          : undefined
      }
      {...storyblokEditable(blok)}
    >
      {blok.contents?.map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </ImageContainerComponent>
  );
};
