import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import { Page } from "src/blocks/Page/Page";
import { Section } from "src/blocks/Section/Section.transform";
import { LayoutPanel } from "src/blocks/LayoutPanel/LayoutPanel.transform";
import { IconBlock } from "src/blocks/IconBlock/IconBlock.transform";
import { Panel } from "src/blocks/Panel/Panel.transform";
import { ImagePanel } from "src/blocks/ImagePanel/ImagePanel.transform";
import { GridLayout } from "src/blocks/GridLayout/GridLayout.transform";
import { ParallaxVideoSection } from "src/blocks/ParallaxVideoSection/ParallaxVideoSection.transform";
import { Typewriter } from "src/components/Typewriter/Typewriter.transform";
import { MosaicLayout } from "src/blocks/MosaicLayout/MosaicLayout.transform";
import { ParallaxStack } from "src/blocks/ParallaxStack/ParallaxStack.transform";
import { ContentIcon } from "src/blocks/ContentIcon/ContentIcon.transform";
import { ContentText } from "src/blocks/ContentText/ContentText.transform";
import { ContentAction } from "src/blocks/ContentAction/ContentAction.transform";
import { ScrollWheel } from "src/blocks/ScrollWheel/ScrollWheel.transform";
import { StaffBlock } from "src/blocks/StaffBlock/StaffBlock.transform";
import { BlockHeader } from "src/blocks/BlockHeader/BlockHeader.transform";
import { BackgroundMedia } from "src/blocks/BackgroundMedia/BackgroundMedia.transform";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    Page,
    Section,
    LayoutPanel,
    ImagePanel,
    Panel,
    IconBlock,
    GridLayout,
    ParallaxVideoSection,
    Typewriter,
    MosaicLayout,
    ParallaxStack,
    ScrollWheel,
    ContentIcon,
    ContentText,
    ContentAction,
    StaffBlock,
    BlockHeader,
    BackgroundMedia,
  },
});
