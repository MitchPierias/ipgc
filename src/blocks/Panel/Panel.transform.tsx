import { storyblokEditable } from "@storyblok/react";
import { Panel as PanelComponent } from "./Panel";

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

export const Panel = ({ blok }: { blok: PanelBlok }) => {
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
