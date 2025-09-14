import type { Meta, StoryObj } from "@storybook/react-vite";
import { Section } from "./Section";
import { Panel } from "../Panel/Panel";
import { Heading, Text } from "../../elements/Text/Text";
import { Button } from "../../elements/Buttons/Button";

const meta: Meta<typeof Section> = {
  title: "Blocks/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    testID: "section",
  },
  argTypes: {
    width: {
      control: "select",
      options: ["content", "gutter", "full"],
    },
    height: {
      control: "select",
      options: ["content", "gutter", "full"],
    },
    padded: {
      control: "boolean",
    },
    media: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    padded: true,
  },
  render: (args) => (
    <Section {...args}>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Heading testID="section-heading">Welcome to IPGC</Heading>
        <Text testID="section-text" component="p">
          Leading the way in preventive healthcare through advanced MRI
          technology and comprehensive health screening services.
        </Text>
        <div style={{ marginTop: "2rem" }}>
          <Button testID="section-button">Learn More</Button>
        </div>
      </div>
    </Section>
  ),
};

export const WithBackgroundImage: Story = {
  args: {
    padded: true,
    media: {
      type: "image",
      format: "jpg",
      src: "/images/WBMRI-3-scaled.jpg",
    },
  },
  render: (args) => (
    <Section {...args}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "3rem",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "12px",
            maxWidth: "600px",
          }}
        >
          <Heading testID="image-section-heading">
            Advanced MRI Technology
          </Heading>
          <Text testID="image-section-text" component="p">
            Experience the future of medical imaging with our state-of-the-art
            MRI scanners. Our advanced technology provides detailed, accurate
            health assessments in a comfortable environment.
          </Text>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Button testID="image-section-primary">Book Screening</Button>
            <Button testID="image-section-secondary" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  ),
};

export const WithVideo: Story = {
  args: {
    padded: true,
    media: {
      type: "video",
      format: "mp4",
      src: "/mp4/whole-body-mri-journey-into-the-known.mp4",
    },
  },
  render: (args) => (
    <Section {...args}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "3rem",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            borderRadius: "12px",
            maxWidth: "700px",
          }}
        >
          <Heading testID="video-section-heading">
            Journey Into The Known
          </Heading>
          <Text testID="video-section-text" component="p">
            Discover what lies beneath the surface with our comprehensive whole
            body MRI screening. Take a journey into the known and gain valuable
            insights into your health.
          </Text>
          <div style={{ marginTop: "2rem" }}>
            <Button testID="video-section-button">Start Your Journey</Button>
          </div>
        </div>
      </div>
    </Section>
  ),
};

export const ContentWidth: Story = {
  args: {
    padded: true,
  },
  render: (args) => (
    <Section {...args}>
      <Panel
        testID="content-panel"
        title="Health Screening Services"
        subtitle="Comprehensive Care"
        description="Our health screening services use advanced MRI technology to provide detailed health assessments and early detection of potential health issues."
        buttonText="Explore Services"
        variant="glass"
      />
    </Section>
  ),
};

export const FullWidthGutter: Story = {
  args: {
    padded: false,
  },
  render: (args) => (
    <Section {...args}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <Panel
          testID="gutter-panel-1"
          title="Technology"
          subtitle="Advanced Equipment"
          description="State-of-the-art MRI scanners and imaging technology."
          buttonText="View Details"
          variant="glass"
        />
        <Panel
          testID="gutter-panel-2"
          title="Expertise"
          subtitle="Medical Professionals"
          description="Experienced team of medical professionals and technicians."
          buttonText="Meet Team"
          variant="glass"
        />
        <Panel
          testID="gutter-panel-3"
          title="Research"
          subtitle="Medical Innovation"
          description="Leading research in preventive medicine and early detection."
          buttonText="Read More"
          variant="glass"
        />
      </div>
    </Section>
  ),
};

export const MinimalPadding: Story = {
  args: {
    padded: false,
  },
  render: (args) => (
    <Section {...args}>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <Text testID="minimal-text" component="h3">
          Minimal Padding Section
        </Text>
        <Text testID="minimal-description" component="p">
          This section demonstrates minimal padding for compact layouts.
        </Text>
      </div>
    </Section>
  ),
};

export const DarkTheme: Story = {
  args: {
    padded: true,
    media: {
      type: "image",
      format: "jpg",
      src: "/images/WBMRI-34.jpg",
    },
  },
  render: (args) => (
    <Section {...args}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
        }}
      >
        <div
          style={{
            padding: "3rem",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            color: "white",
            borderRadius: "8px",
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          <Heading testID="dark-heading">Professional Health Screening</Heading>
          <Text testID="dark-text" component="p">
            Our professional health screening services combine advanced
            technology with expert medical analysis to provide you with
            comprehensive insights into your health status and potential risks.
          </Text>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            <Button testID="dark-primary">Schedule Screening</Button>
            <Button testID="dark-secondary" variant="secondary">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </Section>
  ),
};
