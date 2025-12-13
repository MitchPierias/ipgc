import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Panel as PanelComponent } from "./Panel";
import { ContentText } from "../ContentText/ContentText.transform";
import { ContentIcon } from "../ContentIcon/ContentIcon.transform";

type ContentBlocks =
  | Common.PickBlockProps<typeof ContentText>
  | Common.PickBlockProps<typeof ContentIcon>;

interface PanelBlok extends Common.Blok {
  items: ContentBlocks[];
  padding?: Common.Space;
  spacing?: Common.Space;
  align?: Common.Alignment;
  invert?: boolean;
}

export const Panel = ({
  testID = "panel",
  blok,
}: Common.BlokProps<PanelBlok>) => {
  return (
    <PanelComponent
      testID={testID}
      padding={blok.padding}
      spacing={blok.spacing}
      invert={blok.invert}
      align={blok.align}
      {...storyblokEditable(blok)}
    >
      {blok.items.map((item) => (
        <StoryblokComponent key={item._uid} blok={item} />
      ))}
    </PanelComponent>
  );
};
