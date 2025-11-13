import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { ParallaxStack as ParallaxStackComponent } from "./ParallaxStack";
import { Panel, Panel2 } from "../Panel/Panel.transform";

export type ParallaxStackBlok = {
  component: "ParallaxStack";
  staggerDelay?: number;
  // Children will be handled by Storyblok's nested components
  panels: (
    | Common.PickBlockProps<typeof Panel>
    | Common.PickBlockProps<typeof Panel2>
  )[];
};

export const ParallaxStack = ({
  blok,
  children,
}: {
  blok: ParallaxStackBlok;
  children?: React.ReactNode;
}) => {
  console.log("HERE", blok.panels);
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
