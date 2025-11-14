import { storyblokEditable } from "@storyblok/react";
import { MosaicLayout as MosaicLayoutComponent } from "./MosaicLayout";

interface MosaicLayoutBlok extends Common.Blok {
  component: "MosaicLayout";
  images: Common.ImageBlock[];
}

export const MosaicLayout = ({ blok }: Common.BlokProps<MosaicLayoutBlok>) => {
  return (
    <MosaicLayoutComponent
      testID="mosaic-layout"
      images={blok.images}
      {...storyblokEditable(blok)}
    />
  );
};
