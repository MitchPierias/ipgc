import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { ParallaxStack as ParallaxStackComponent } from "./ParallaxStack";
import { Panel } from "../Panel/Panel.transform";

interface ParallaxStackBlok extends Common.Blok {
  component: "ParallaxStack";
  staggerDelay?: number;
  // Children will be handled by Storyblok's nested components
  panels: Common.PickBlockProps<typeof Panel>[];
}

export const ParallaxStack = ({
  blok,
}: Common.BlokProps<ParallaxStackBlok>) => {
  return (
    <ParallaxStackComponent
      testID="parallax-stack"
      staggerDelay={blok.staggerDelay}
      {...storyblokEditable(blok)}
    >
      {blok.panels.map((panel) => (
        <StoryblokComponent key={panel._uid} blok={panel} />
      ))}
    </ParallaxStackComponent>
  );
};
