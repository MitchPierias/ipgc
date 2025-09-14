import type { Meta, StoryObj } from "@storybook/react-vite";
import { MosaicLayout } from "./MosaicLayout";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { Panel } from "../Panel/Panel";
import { IconBlock } from "../IconBlock/IconBlock";

const meta: Meta<typeof MosaicLayout> = {
  title: "Blocks/MosaicLayout",
  component: MosaicLayout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    width: {
      control: { type: "select" },
      options: ["full", "gutter", undefined],
    },
    height: {
      control: { type: "select" },
      options: ["full", "gutter", undefined],
    },
  },
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
          <ArticleCard
            key={index}
            testID={`mosaic-article-${index}`}
            title={card.title}
            description={card.description}
            tags={card.tags}
            media={card.media}
          />
        ))}
      </MosaicLayout>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    testID: "mosaic-layout-full-width",
    width: "full",
  },
  render: (args) => (
    <MosaicLayout {...args}>
      <Panel
        testID="mosaic-panel-1"
        title="Health Services"
        subtitle="Comprehensive Care"
        description="Our team provides comprehensive health services using advanced technology."
        buttonText="Learn More"
        variant="glass"
      />
      <Panel
        testID="mosaic-panel-2"
        title="Technology"
        subtitle="Advanced Equipment"
        description="State-of-the-art MRI scanners and imaging technology."
        buttonText="View Details"
        variant="glass"
      />
      <Panel
        testID="mosaic-panel-3"
        title="Research"
        subtitle="Medical Innovation"
        description="Leading research in preventive medicine and early detection."
        buttonText="Read More"
        variant="glass"
      />
    </MosaicLayout>
  ),
};

export const WithGutter: Story = {
  args: {
    testID: "mosaic-layout-gutter",
    width: "gutter",
    height: "gutter",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <MosaicLayout {...args}>
        <IconBlock
          testID="mosaic-icon-1"
          title="Advanced Technology"
          description="State-of-the-art MRI scanners providing detailed health assessments."
        />
        <IconBlock
          testID="mosaic-icon-2"
          title="Expert Care"
          description="Professional medical team dedicated to your health and wellbeing."
        />
        <IconBlock
          testID="mosaic-icon-3"
          title="Early Detection"
          description="Identifying potential health issues before symptoms appear."
        />
        <IconBlock
          testID="mosaic-icon-4"
          title="Comprehensive Screening"
          description="Full body assessment in a single, convenient session."
        />
      </MosaicLayout>
    </div>
  ),
};

export const MixedContent: Story = {
  args: {
    testID: "mosaic-layout-mixed",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <MosaicLayout {...args}>
        <ArticleCard
          testID="mosaic-mixed-article"
          title="Latest Research"
          description="Breakthrough discoveries in preventive medicine"
          tags={["Research", "Innovation"]}
          media={{
            type: "image",
            format: "jpg",
            src: "/images/WBMRI-3-scaled.jpg",
          }}
        />
        <Panel
          testID="mosaic-mixed-panel"
          title="Quick Facts"
          subtitle="Health Screening"
          description="Fast, accurate, and comprehensive health assessments."
          buttonText="Learn More"
          variant="glass"
        />
        <IconBlock
          testID="mosaic-mixed-icon"
          title="Patient Support"
          description="Dedicated support team available throughout your health journey."
        />
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "200px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3>Custom Content</h3>
            <p>Mosaic layout supports any type of content.</p>
          </div>
        </div>
      </MosaicLayout>
    </div>
  ),
};

export const SingleItem: Story = {
  args: {
    testID: "mosaic-layout-single",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <MosaicLayout {...args}>
        <Panel
          testID="mosaic-single-panel"
          title="Featured Service"
          subtitle="Whole Body MRI"
          description="Comprehensive health assessment using advanced MRI technology to detect potential health issues early."
          buttonText="Book Screening"
          variant="glass"
        />
      </MosaicLayout>
    </div>
  ),
};

export const LargeContent: Story = {
  args: {
    testID: "mosaic-layout-large",
    width: "full",
    height: "full",
  },
  render: (args) => (
    <MosaicLayout {...args}>
      <div
        style={{
          padding: "4rem",
          backgroundColor: "#0066cc",
          color: "white",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "600px" }}>
          <h2>Full Screen Experience</h2>
          <p>
            This mosaic layout demonstrates full width and height capabilities
            for immersive content presentation.
          </p>
        </div>
      </div>
    </MosaicLayout>
  ),
};
