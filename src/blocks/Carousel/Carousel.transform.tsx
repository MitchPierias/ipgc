import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Carousel as CarouselComponent } from "./Carousel";
import { ArticleBlok } from "../ArticleCard/ArticleCard.transform";

type CarouselBlok = {
  step_interval?: number; // Time between steps in milliseconds
  pause_on_hover?: boolean;
  transition_duration?: number; // Duration of each step transition in milliseconds
  contents: ArticleBlok[];
};

export const Carousel = ({ blok }: { blok: CarouselBlok }) => {
  return (
    <CarouselComponent
      testID="carousel"
      stepInterval={blok.step_interval}
      pauseOnHover={blok.pause_on_hover}
      transitionDuration={blok.transition_duration}
      {...storyblokEditable(blok)}
    >
      {blok.contents.map((content) => (
        <StoryblokComponent key={content._uid} blok={content} />
      ))}
    </CarouselComponent>
  );
};
