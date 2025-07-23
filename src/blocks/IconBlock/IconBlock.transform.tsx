import { storyblokEditable } from "@storyblok/react";
import { IconBlock as IconBlockComponent } from "./IconBlock";

export type IconBlockBlok = {
  _uid: string;
  component: "IconBlock";
  title: string;
  description?: string;
};

export const IconBlock = ({ blok }: { blok: IconBlockBlok }) => {
  return (
    <IconBlockComponent
      testID={"icon-block"}
      title={blok.title}
      description={blok.description || ""}
      {...storyblokEditable(blok)}
    />
  );
};
