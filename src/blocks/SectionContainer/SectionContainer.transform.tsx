import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { SectionContainer as SectionContainerComponent } from "./SectionContainer";
import { LayoutPanel } from "../LayoutPanel/LayoutPanel.transform";

type SectionContainerContent = React.ComponentProps<typeof LayoutPanel>["blok"];

type SectionContainerBlok = {
  contents?: SectionContainerContent[];
};

export const SectionContainer = ({
  blok,
}: Common.BlokProps<SectionContainerBlok>) => {
  return (
    <SectionContainerComponent
      testID="section-container"
      {...storyblokEditable(blok)}
    >
      {blok.contents?.map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </SectionContainerComponent>
  );
};
