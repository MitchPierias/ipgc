import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImagePanel } from "./ImagePanel";
import { Panel } from "../Panel/Panel";
import { Heading, Paragraph, Text } from "../../elements/Text/Text";

const meta: Meta<typeof ImagePanel> = {
  title: "Blocks/ImagePanel",
  component: ImagePanel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    image: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testID: "image-panel-default",
    image: {
      filename: "/images/WBMRI-3-scaled.jpg",
      alt: "Whole Body MRI",
    } as Common.ImageBlock,
  },
  render: (args) => (
    <ImagePanel {...args}>
      <div
        style={{
          padding: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          margin: "2rem",
          maxWidth: "500px",
        }}
      >
        <Heading testID="panel-heading">Advanced MRI Technology</Heading>
        <Text testID="panel-text" component="p">
          Experience the future of medical imaging with our state-of-the-art MRI
          scanners. Our advanced technology provides detailed, accurate health
          assessments in a comfortable environment.
        </Text>
      </div>
    </ImagePanel>
  ),
};

export const WithPanel: Story = {
  args: {
    testID: "image-panel-with-panel",
    image: {
      filename: "/images/WBMRI-34.jpg",
      alt: "Whole Body MRI",
    } as Common.ImageBlock,
  },
  render: (args) => (
    <ImagePanel {...args}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <Panel
          testID="overlay-panel"
          title="Health Screening"
          subtitle="Early Detection Saves Lives"
          description="Our comprehensive health screening uses advanced MRI technology to detect potential health issues before symptoms appear. Book your appointment today."
          buttonText="Schedule Screening"
          variant="glass"
        />
      </div>
    </ImagePanel>
  ),
};

export const MinimalOverlay: Story = {
  args: {
    testID: "image-panel-minimal",
    image: {
      filename: "/images/WBMRI-3-scaled.jpg",
      alt: "Whole Body MRI",
    } as Common.ImageBlock,
  },
  render: (args) => (
    <ImagePanel {...args}>
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          padding: "1rem 2rem",
          backgroundColor: "rgba(0, 102, 204, 0.9)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <Heading testID="minimal-heading" component="h3">
          Whole Body MRI
        </Heading>
        <Text testID="minimal-text">
          Comprehensive health assessment in one scan
        </Text>
      </div>
    </ImagePanel>
  ),
};

export const CenteredContent: Story = {
  args: {
    testID: "image-panel-centered",
    image: {
      filename: "/images/WBMRI-34.jpg",
      alt: "Whole Body MRI",
    } as Common.ImageBlock,
  },
  render: (args) => (
    <ImagePanel {...args}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "3rem",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            borderRadius: "12px",
            maxWidth: "600px",
          }}
        >
          <Heading testID="centered-heading">Welcome to IPGC</Heading>
          <Paragraph testID="centered-text">
            Leading the way in preventive healthcare through advanced MRI
            technology and comprehensive health screening services.
          </Paragraph>
        </div>
      </div>
    </ImagePanel>
  ),
};

export const MultipleElements: Story = {
  args: {
    testID: "image-panel-multiple",
    image: {
      filename: "/images/WBMRI-3-scaled.jpg",
      alt: "Whole Body MRI",
    } as Common.ImageBlock,
  },
  render: (args) => (
    <ImagePanel {...args}>
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          padding: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "8px",
          maxWidth: "300px",
        }}
      >
        <Text testID="top-text" component="h4">
          Quick Facts
        </Text>
        <Text testID="fact-text" component="p">
          • Non-invasive scanning
          <br />
          • Early detection
          <br />• Expert analysis
        </Text>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          right: "2rem",
          padding: "2rem",
          backgroundColor: "rgba(0, 102, 204, 0.95)",
          color: "white",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Heading testID="bottom-heading">
          Book Your Health Screening Today
        </Heading>
        <Text testID="bottom-text" component="p">
          Take control of your health with our comprehensive MRI screening
          services.
        </Text>
      </div>
    </ImagePanel>
  ),
};
