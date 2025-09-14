import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { DualPanel as DualPanelComponent } from "./DualPanel";

export type DualPanelBlok = {
  _uid: string;
  component: "DualPanel";
  variant?: "card" | "transparent";
  layout?: Common.Layout;
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

export const DualPanel = ({ blok }: { blok: DualPanelBlok }) => {
  return (
    <DualPanelComponent
      testID="dual-panel"
      variant={blok.variant || "transparent"}
      layout={blok.layout || "content"}
      {...storyblokEditable(blok)}
    >
      {blok.contents?.map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </DualPanelComponent>
  );
};
