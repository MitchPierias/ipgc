import { StoryblokComponent } from "@storyblok/react";
import { DualPanel as DualPanelComponent } from "./DualPanel";

export type DualPanelBlok = {
  _uid: string;
  component: "DualPanel";
  variant?: "card" | "transparent";
  full?: boolean;
  gutter?: boolean;
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
      full={blok.full}
      gutter={blok.gutter}
    >
      {blok.contents?.map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </DualPanelComponent>
  );
};
