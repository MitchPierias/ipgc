import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Panel as PanelComponent } from "./Panel";
import { ContentText } from "../ContentText/ContentText.transform";
import { ContentIcon } from "../ContentIcon/ContentIcon.transform";

type DeprecatedVariant = "overlay";

export type PanelBlok = {
  _uid: string;
  component: "Panel";
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  variant?: "glass" | "invert" | DeprecatedVariant;
};

export const Panel2 = ({ blok }: { blok: PanelBlok }) => {
  return (
    <PanelComponent
      testID={"panel"}
      title={blok.title}
      subtitle={blok.subtitle}
      description={blok.description}
      buttonText={blok.buttonText}
      variant={blok.variant === "overlay" ? "glass" : blok.variant}
      {...storyblokEditable(blok)}
    />
  );
};

type ContentBlocks =
  | Common.PickBlockProps<typeof ContentText>
  | Common.PickBlockProps<typeof ContentIcon>;

export const Panel = ({
  testID = "panel",
  blok,
}: Common.BlokProps<{ items: ContentBlocks[] }>) => {
  return (
    <PanelComponent testID={testID} {...storyblokEditable(blok)}>
      {blok.items.map((item) => (
        <StoryblokComponent key={item._uid} blok={item} />
      ))}
    </PanelComponent>
  );
};
