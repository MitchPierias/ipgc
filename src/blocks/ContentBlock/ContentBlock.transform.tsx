import { storyblokEditable } from "@storyblok/react";
import { ContentBlock as ContentBlockComponent } from "./ContentBlock";

type DeprecatedVariant = "overlay";

export type ContentBlockBlok = {
  component: "ContentBlock";
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  variant?: "glass" | "invert" | DeprecatedVariant;
};

export const ContentBlock = ({ blok }: Common.BlokProps<ContentBlockBlok>) => {
  return (
    <ContentBlockComponent
      testID={"content-block"}
      title={blok.title}
      subtitle={blok.subtitle}
      description={blok.description}
      buttonText={blok.buttonText}
      variant={blok.variant === "overlay" ? "glass" : blok.variant}
      {...storyblokEditable(blok)}
    />
  );
};
