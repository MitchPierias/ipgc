import { storyblokEditable } from "@storyblok/react";
import { Typewriter as TypewriterComponent } from "./Typewriter";

interface TypewriterBlok extends Common.Blok {
  component: "Typewriter";
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  actionPath?: string;
}

export const Typewriter = ({ blok }: Common.BlokProps<TypewriterBlok>) => {
  return (
    <TypewriterComponent
      testID="typewriter"
      title={blok.title}
      subtitle={blok.subtitle}
      action={
        blok.actionLabel && blok.actionPath
          ? {
              label: blok.actionLabel,
              href: blok.actionPath,
            }
          : undefined
      }
    />
  );
};
