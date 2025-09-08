import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ParallaxVideoSection } from "./ParallaxVideoSection";
import { Panel } from "../Panel/Panel";
import { Heading, Paragraph, Text } from "../../elements/Text/Text";

const meta: Meta<typeof ParallaxVideoSection> = {
  title: "Blocks/ParallaxVideoSection",
  component: ParallaxVideoSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    backgroundSpeed: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description:
        "Speed of background parallax (0 = no movement, 1 = normal scroll)",
    },
    contentSpeed: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description:
        "Speed of content parallax (0 = no movement, 1 = normal scroll)",
    },
    width: {
      control: { type: "select" },
      options: ["full", "content", "viewport", "auto"],
    },
    height: {
      control: { type: "select" },
      options: ["full", "content", "viewport", "auto"],
    },
    padded: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    media: {
      type: "video",
      src: "/mp4/whole-body-mri-journey-into-the-known.mp4",
    },
    backgroundSpeed: 0.2,
    contentSpeed: 0.6,
    children: (
      <Panel testID="panel">
        <Heading testID="heading">Parallax Video Section</Heading>
        <Paragraph testID="paragraph">
          This section demonstrates parallax scrolling with a video background.
          The background moves slowly while the content moves at a different
          speed, creating a depth effect as you scroll.
        </Paragraph>
      </Panel>
    ),
  },
};

export const SlowParallax: Story = {
  args: {
    ...Default.args,
    backgroundSpeed: 0.1,
    contentSpeed: 0.3,
  },
};

export const FastParallax: Story = {
  args: {
    ...Default.args,
    backgroundSpeed: 0.5,
    contentSpeed: 0.8,
  },
};

export const WithMultiplePanels: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <Panel testID="panel">
          <Heading testID="heading">Main Heading</Heading>
          <Paragraph testID="paragraph">
            This is the primary content panel with important information.
          </Paragraph>
        </Panel>
        <Panel testID="panel">
          <Heading testID="heading">Secondary Information</Heading>
          <Paragraph testID="paragraph">
            Additional details that support the main content above.
          </Paragraph>
        </Panel>
      </>
    ),
  },
};
