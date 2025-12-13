import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { LayoutPanel as LayoutPanelComponent } from "./LayoutPanel";
import type { PanelBlok } from "../Panel/Panel.transform";

type LayoutPanelBlok = {
  component: "LayoutPanel";
  variant?: "card" | "transparent";
  layout?: Common.Layout;
  columns?: 1 | 2 | 3;
  contents?: PanelBlok[];
  padding?: Common.Space;
  spacing?: Common.Space;
};

export const LayoutPanel = ({ blok }: Common.BlokProps<LayoutPanelBlok>) => {
  return (
    <LayoutPanelComponent
      testID="layout-panel"
      variant={blok.variant || "transparent"}
      columns={blok.columns || 2}
      padding={blok.padding}
      spacing={blok.spacing}
      {...storyblokEditable(blok)}
    >
      {blok.contents?.map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </LayoutPanelComponent>
  );
};
