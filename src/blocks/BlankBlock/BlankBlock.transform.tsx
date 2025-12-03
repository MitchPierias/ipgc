import { storyblokEditable } from "@storyblok/react";
import { BlankBlock as BlankBlockComponent } from "./BlankBlock";

export type BlankBlockBlok = {
  component: "BlankBlock";
  height?: Common.Space;
};

export const BlankBlock = ({ blok }: Common.BlokProps<BlankBlockBlok>) => {
  return (
    <BlankBlockComponent
      testID="blank-block"
      height={blok.height}
      {...storyblokEditable(blok)}
    />
  );
};
