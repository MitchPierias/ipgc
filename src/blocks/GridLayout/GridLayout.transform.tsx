import { StoryblokComponent } from "@storyblok/react";
import { IconBlockBlok } from "../IconBlock/IconBlock.transform";
import { GridLayout as GridLayoutComponent } from "./GridLayout";

export type GridLayoutBlok = {
  _uid: string;
  component: "GridLayout";
  contents: IconBlockBlok[];
};

export const GridLayout = ({ blok }: { blok: GridLayoutBlok }) => {
  return (
    <GridLayoutComponent testID={"grid-layout"}>
      {blok.contents.map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </GridLayoutComponent>
  );
};
