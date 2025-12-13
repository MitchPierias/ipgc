import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Section as SectionComponent } from "./Section";
import { LayoutPanel } from "../LayoutPanel/LayoutPanel.transform";

type SectionBlok = {
  background_image?: Common.ImageBlock;
  variant?: "tinted";
  contents?: Common.PickBlockProps<typeof LayoutPanel>[];
};

export const Section = ({ blok }: Common.BlokProps<SectionBlok>) => {
  return (
    <SectionComponent
      testID="section"
      variant={blok.variant}
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
    </SectionComponent>
  );
};
