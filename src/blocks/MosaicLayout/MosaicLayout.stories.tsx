import type { Meta, StoryObj } from "@storybook/react-vite";
import { MosaicLayout } from "./MosaicLayout";

const meta: Meta<typeof MosaicLayout> = {
  title: "Blocks/MosaicLayout",
  component: MosaicLayout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCards = [
  {
    title: "Advanced MRI Technology",
    description: "State-of-the-art scanning equipment",
    tags: ["Technology", "Innovation"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-3-scaled.jpg",
    },
  },
  {
    title: "Health Screening",
    description: "Comprehensive health assessments",
    tags: ["Health", "Prevention"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-34.jpg",
    },
  },
  {
    title: "Early Detection",
    description: "Detecting health issues before symptoms appear",
    tags: ["Research", "Health"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-3-scaled.jpg",
    },
  },
  {
    title: "Patient Care",
    description: "Exceptional patient experience and support",
    tags: ["Care", "Experience"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-34.jpg",
    },
  },
];

export const Default: Story = {
  args: {
    testID: "mosaic-layout-default",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <MosaicLayout {...args}>
        {sampleCards.map((card, index) => (
          <div key={index}>Stuff</div>
        ))}
      </MosaicLayout>
    </div>
  ),
};
