import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { LayoutPanel as LayoutPanelComponent } from "./LayoutPanel";
import { SectionContainer } from "../SectionContainer/SectionContainer";

type LayoutPanelBlok = {
  component: "LayoutPanel";
  variant?: "card" | "transparent";
  layout?: Common.Layout;
  columns?: 1 | 2 | 3;
  contents?: {
    _uid: string;
    component: "Panel";
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    variant?: "card" | "transparent";
  }[];
};

export const LayoutPanel = ({ blok }: Common.BlokProps<LayoutPanelBlok>) => {
  return (
    <SectionContainer testID="section-container" size={blok.layout}>
      <LayoutPanelComponent
        testID="layout-panel"
        variant={blok.variant || "transparent"}
        columns={blok.columns || 2}
        {...storyblokEditable(blok)}
      >
        {blok.contents?.map((nestedBlok) => (
          <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
        ))}
      </LayoutPanelComponent>
    </SectionContainer>
  );
};
