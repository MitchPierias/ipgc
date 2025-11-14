import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { ScrollWheel as ScrollWheelComponent } from "./ScrollWheel";
import { Panel } from "../Panel/Panel.transform";

interface ScrollWheelBlok extends Common.Blok {
  component: "ScrollWheel";
  startAngle?: number;
  endAngle?: number;
  contents: Common.PickBlockProps<typeof Panel>[];
}

export const ScrollWheel = ({ blok }: Common.BlokProps<ScrollWheelBlok>) => {
  return (
    <ScrollWheelComponent testID="scroll-wheel" {...storyblokEditable(blok)}>
      {blok.contents.map((content) => (
        <StoryblokComponent key={content._uid} blok={content} />
      ))}
    </ScrollWheelComponent>
  );
};
