import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { IconBlockBlok } from "../IconBlock/IconBlock.transform";
import { GridLayout as GridLayoutComponent } from "./GridLayout";

export type GridLayoutBlok = {
  _uid: string;
  component: "GridLayout";
  contents: IconBlockBlok[];
  size?: Common.Layout;
};

export const GridLayout = ({ blok }: { blok: GridLayoutBlok }) => {
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
