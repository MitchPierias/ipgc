import { storyblokEditable } from "@storyblok/react";
import { BlockHeader as BlockHeaderComponent } from "./BlockHeader";

interface BlockHeaderBlok extends Common.Blok {
  title: string;
  description: string;
}

export const BlockHeader = ({
  testID = "block-header",
  blok,
}: Common.BlokProps<BlockHeaderBlok>) => {
  return (
    <BlockHeaderComponent
      testID={testID}
      title={blok.title}
      description={blok.description}
      {...storyblokEditable(blok)}
    />
  );
};
