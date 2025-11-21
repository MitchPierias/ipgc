import { storyblokEditable } from "@storyblok/react";
import { IconBlock as IconBlockComponent } from "./IconBlock";

export interface IconBlockBlok extends Common.Blok {
  component: "IconBlock";
  title: string;
  description?: string;
}

export const IconBlock = ({ blok }: Common.BlokProps<IconBlockBlok>) => {
  return (
    <IconBlockComponent
      testID={"icon-block"}
      title={blok.title}
      description={blok.description || ""}
      {...storyblokEditable(blok)}
    />
  );
};
