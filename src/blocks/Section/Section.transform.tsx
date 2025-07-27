import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Section as SectionComponent } from "./Section";
import { type DualPanelBlok } from "../DualPanel/DualPanel.transform";

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

type SectionBlok = {
  background_image?: StoryblokImageMeta;
  padded?: boolean;
  full?: boolean;
  contents?: DualPanelBlok[];
};

export const Section = ({ blok }: { blok: SectionBlok }) => {
  return (
    <SectionComponent
      testID="section"
      padded={blok.padded || false}
      width={blok.full ? "full" : "content"}
      height={blok.full ? "full" : "content"}
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
