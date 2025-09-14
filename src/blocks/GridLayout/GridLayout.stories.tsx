import type { Meta, StoryObj } from "@storybook/react-vite";
import { GridLayout } from "./GridLayout";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { Panel } from "../Panel/Panel";

const meta: Meta<typeof GridLayout> = {
  title: "Blocks/GridLayout",
  component: GridLayout,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCards = [
  {
    title: "Advanced MRI Technology",
    description: "Learn about our cutting-edge MRI scanners",
    tags: ["Technology", "Innovation"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-3-scaled.jpg",
    },
  },
  {
    title: "Health Screening Benefits",
    description: "Understanding the importance of preventive health screening",
    tags: ["Health", "Prevention"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-34.jpg",
    },
  },
  {
    title: "Early Detection Success",
    description: "How early detection saves lives and improves outcomes",
    tags: ["Research", "Health"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-3-scaled.jpg",
    },
  },
  {
    title: "Whole Body Scanning",
    description: "Comprehensive health assessment in a single scan",
    tags: ["Scanning", "Comprehensive"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-34.jpg",
    },
  },
  {
    title: "Patient Care Excellence",
    description: "Our commitment to exceptional patient experience",
    tags: ["Care", "Experience"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-3-scaled.jpg",
    },
  },
  {
    title: "Medical Innovation",
    description: "Pioneering the future of diagnostic medicine",
    tags: ["Innovation", "Medicine"],
    media: {
      type: "image" as const,
      format: "jpg",
      src: "/images/WBMRI-34.jpg",
    },
  },
];

export const WithArticleCards: Story = {
  args: {
    testID: "grid-layout-articles",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <GridLayout {...args}>
        {sampleCards.map((card, index) => (
          <ArticleCard
            key={index}
            testID={`grid-article-${index}`}
            title={card.title}
            description={card.description}
            tags={card.tags}
            media={card.media}
          />
        ))}
      </GridLayout>
    </div>
  ),
};

export const WithPanels: Story = {
  args: {
    testID: "grid-layout-panels",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <GridLayout {...args}>
        <Panel
          testID="grid-panel-1"
          title="Health Services"
          subtitle="Comprehensive Care"
          description="Our team provides comprehensive health services using advanced technology."
          buttonText="Learn More"
          variant="glass"
        />
        <Panel
          testID="grid-panel-2"
          title="Technology"
          subtitle="Advanced Equipment"
          description="State-of-the-art MRI scanners and imaging technology."
          buttonText="View Details"
          variant="glass"
        />
        <Panel
          testID="grid-panel-3"
          title="Research"
          subtitle="Medical Innovation"
          description="Leading research in preventive medicine and early detection."
          buttonText="Read More"
          variant="glass"
        />
        <Panel
          testID="grid-panel-4"
          title="Support"
          subtitle="Patient Care"
          description="Dedicated support team for all your health screening needs."
          buttonText="Contact Us"
          variant="glass"
        />
      </GridLayout>
    </div>
  ),
};

export const MixedContent: Story = {
  args: {
    testID: "grid-layout-mixed",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <GridLayout {...args}>
        <ArticleCard
          testID="mixed-article-1"
          title="Latest MRI Technology"
          description="Discover our newest scanning capabilities"
          tags={["Technology", "New"]}
          media={{
            type: "image",
            format: "jpg",
            src: "/images/WBMRI-3-scaled.jpg",
          }}
        />
        <Panel
          testID="mixed-panel-1"
          title="Quick Facts"
          subtitle="Health Screening"
          description="Fast, accurate, and comprehensive health assessments."
          buttonText="Learn More"
          variant="glass"
        />
        <ArticleCard
          testID="mixed-article-2"
          title="Patient Success Stories"
          description="Read about our patients' health journey"
          tags={["Stories", "Health"]}
          media={{
            type: "image",
            format: "jpg",
            src: "/images/WBMRI-34.jpg",
          }}
        />
        <div
          style={{
            padding: "1.5rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <h3>Custom Content</h3>
          <p>
            This grid can contain any type of content, including custom
            components.
          </p>
        </div>
      </GridLayout>
    </div>
  ),
};

export const SingleItem: Story = {
  args: {
    testID: "grid-layout-single",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <GridLayout {...args}>
        <Panel
          testID="single-panel"
          title="Featured Content"
          subtitle="Highlighted Information"
          description="This is a single item in the grid layout, demonstrating how the component handles minimal content."
          buttonText="Explore"
          variant="glass"
        />
      </GridLayout>
    </div>
  ),
};
