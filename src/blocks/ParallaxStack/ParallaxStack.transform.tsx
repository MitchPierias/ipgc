import { storyblokEditable } from "@storyblok/react";
import { ParallaxStack as ParallaxStackComponent } from "./ParallaxStack";

export type ParallaxStackBlok = {
  _uid: string;
  component: "ParallaxStack";
  staggerDelay?: number;
  // Children will be handled by Storyblok's nested components
};

export const ParallaxStack = ({
  blok,
  children,
}: {
  blok: ParallaxStackBlok;
  children?: React.ReactNode;
}) => {
  return (
    <ParallaxStackComponent
      testID="parallax-stack"
      staggerDelay={blok.staggerDelay}
      {...storyblokEditable(blok)}
    >
      {children}
    </ParallaxStackComponent>
  );
};
