import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { IconBlockBlok } from "../IconBlock/IconBlock.transform";
import { GridLayout as GridLayoutComponent } from "./GridLayout";

export interface GridLayoutBlok extends Common.Blok {
  component: "GridLayout";
  contents: IconBlockBlok[];
  size?: Common.Layout;
}

export const GridLayout = ({ blok }: Common.BlokProps<GridLayoutBlok>) => {
  return (
    <GridLayoutComponent
      testID={"grid-layout"}
      layout={blok.size || "content"}
      {...storyblokEditable(blok)}
    >
      {blok.contents.map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </GridLayoutComponent>
  );
};
