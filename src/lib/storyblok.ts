import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import { Page } from "src/blocks/Page/Page";
import { ImageContainer } from "src/blocks/ImageContainer/ImageContainer.transform";
import { LayoutPanel } from "src/blocks/LayoutPanel/LayoutPanel.transform";
import { IconBlock } from "src/blocks/IconBlock/IconBlock.transform";
import { Panel } from "src/blocks/Panel/Panel.transform";
import { ArticleCard } from "src/blocks/ArticleCard/ArticleCard.transform";
import { Carousel } from "src/blocks/CarouselPanel/Carousel.transform";
import { ImagePanel } from "src/blocks/ImagePanel/ImagePanel.transform";
import { GridLayout } from "src/blocks/GridLayout/GridLayout.transform";
import { ParallaxVideoSection } from "src/blocks/ParallaxVideoSection/ParallaxVideoSection.transform";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    Page,
    Section: ImageContainer, // @deprecated
    ImageContainer,
    LayoutPanel,
    DualPanel: LayoutPanel, // @deprecated
    ImagePanel,
    Panel,
    Carousel,
    IconBlock,
    ArticleCard,
    GridLayout,
    ParallaxVideoSection,
  },
});
