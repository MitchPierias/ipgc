import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Panel as PanelComponent } from "./Panel";
import { ContentText } from "../ContentText/ContentText.transform";
import { ContentIcon } from "../ContentIcon/ContentIcon.transform";

type DeprecatedVariant = "overlay";

export interface Panel2Blok extends Common.Blok {
  component: "Panel";
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  variant?: "glass" | "invert" | DeprecatedVariant;
  padding?: Common.Space;
  spacing?: Common.Space;
}

export const Panel2 = ({
  blok,
  index,
}: {
  blok: Panel2Blok;
  index?: number;
}) => {
  return (
    <PanelComponent
      testID={"panel"}
      title={blok.title}
      subtitle={blok.subtitle}
      description={blok.description}
      buttonText={blok.buttonText}
      variant={blok.variant === "overlay" ? "glass" : blok.variant}
      index={index}
      padding={blok.padding}
      spacing={blok.spacing}
      {...storyblokEditable(blok)}
    />
  );
};

type ContentBlocks =
  | Common.PickBlockProps<typeof ContentText>
  | Common.PickBlockProps<typeof ContentIcon>;

interface PanelBlok extends Common.Blok {
  items: ContentBlocks[];
  padding?: Common.Space;
  spacing?: Common.Space;
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
      {...storyblokEditable(blok)}
    >
      {blok.items.map((item) => (
        <StoryblokComponent key={item._uid} blok={item} />
      ))}
    </PanelComponent>
  );
};
