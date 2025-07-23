import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import { Page } from "src/blocks/Page/Page";
import { Section } from "src/blocks/Section/Section.transform";
import { DualPanel } from "src/blocks/DualPanel/DualPanel.transform";
import { IconBlock } from "src/blocks/IconBlock/IconBlock.transform";
import { Panel } from "src/blocks/Panel/Panel.transform";
import { ArticleCard } from "src/blocks/ArticleCard/ArticleCard.transform";
import { Carousel } from "src/blocks/Carousel/Carousel.transform";
import { ImagePanel } from "src/blocks/ImagePanel/ImagePanel.transform";
import { GridLayout } from "src/blocks/GridLayout/GridLayout.transform";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    Page,
    Section,
    DualPanel,
    ImagePanel,
    Panel,
    Carousel,
    IconBlock,
    ArticleCard,
    GridLayout,
  },
});
