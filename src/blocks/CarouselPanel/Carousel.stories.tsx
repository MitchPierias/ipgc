import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "./Carousel";
import { ArticleCard } from "../ArticleCard/ArticleCard";

const meta: Meta<typeof Carousel> = {
  title: "Blocks/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    stepInterval: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
    },
    pauseOnHover: {
      control: "boolean",
    },
    transitionDuration: {
      control: { type: "number", min: 200, max: 1000, step: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for demo cards
const sampleCards = [
  {
    title: "Advanced MRI Technology",
    description: "Learn about our cutting-edge MRI scanners",
    tags: ["Technology", "Innovation"],
  },
  {
    title: "Health Screening Benefits",
    description: "Understanding the importance of preventive health screening",
    tags: ["Health", "Prevention"],
  },
  {
    title: "Early Detection Success",
    description: "How early detection saves lives and improves outcomes",
    tags: ["Research", "Health"],
  },
  {
    title: "Whole Body Scanning",
    description: "Comprehensive health assessment in a single scan",
    tags: ["Scanning", "Comprehensive"],
  },
  {
    title: "Patient Care Excellence",
    description: "Our commitment to exceptional patient experience",
    tags: ["Care", "Experience"],
  },
  {
    title: "Medical Innovation",
    description: "Pioneering the future of diagnostic medicine",
    tags: ["Innovation", "Medicine"],
  },
];

export const Default: Story = {
  args: {
    stepInterval: 3000,
    pauseOnHover: true,
    transitionDuration: 500,
    testID: "carousel-demo",
  },
  render: (args) => (
    <div
      style={
        {
          padding: "2rem 0",
          "--layout-md": "1200px",
        } as React.CSSProperties
      }
    >
      <Carousel {...args}>
        {sampleCards.map((card, index) => (
          <ArticleCard
            key={index}
            testID={`article-card-${index}`}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </Carousel>
    </div>
  ),
};

export const FastStepping: Story = {
  args: {
    stepInterval: 1500,
    pauseOnHover: true,
    transitionDuration: 300,
    testID: "carousel-fast",
  },
  render: (args) => (
    <div
      style={
        {
          padding: "2rem 0",
          "--layout-md": "1000px",
        } as React.CSSProperties
      }
    >
      <Carousel {...args}>
        {sampleCards.slice(0, 4).map((card, index) => (
          <ArticleCard
            key={index}
            testID={`article-card-fast-${index}`}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </Carousel>
    </div>
  ),
};

export const SlowStepping: Story = {
  args: {
    stepInterval: 5000,
    pauseOnHover: false,
    transitionDuration: 800,
    testID: "carousel-slow",
  },
  render: (args) => (
    <div
      style={
        {
          padding: "2rem 0",
          "--layout-md": "1400px",
        } as React.CSSProperties
      }
    >
      <Carousel {...args}>
        {sampleCards.slice(0, 3).map((card, index) => (
          <ArticleCard
            key={index}
            testID={`article-card-slow-${index}`}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </Carousel>
    </div>
  ),
};

export const NarrowContent: Story = {
  args: {
    stepInterval: 2500,
    pauseOnHover: true,
    transitionDuration: 400,
    testID: "carousel-narrow",
  },
  render: (args) => (
    <div
      style={
        { padding: "2rem 0", "--layout-md": "800px" } as React.CSSProperties
      }
    >
      <Carousel {...args}>
        {sampleCards.slice(0, 5).map((card, index) => (
          <ArticleCard
            key={index}
            testID={`article-card-narrow-${index}`}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </Carousel>
    </div>
  ),
};
