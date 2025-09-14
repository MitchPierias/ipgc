import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel } from "./Panel";
import { Heading, Text } from "../../elements/Text/Text";
import { Button } from "../../elements/Buttons/Button";

const meta: Meta<typeof Panel> = {
  title: "Blocks/Panel",
  component: Panel,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
    description: {
      control: "text",
    },
    buttonText: {
      control: "text",
    },
    variant: {
      control: { type: "select" },
      options: ["glass", "invert", undefined],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testID: "panel-default",
    title: "Health Screening",
    subtitle: "Early Detection Saves Lives",
    description:
      "Our comprehensive health screening uses advanced MRI technology to detect potential health issues before symptoms appear.",
    buttonText: "Learn More",
  },
};

export const GlassVariant: Story = {
  args: {
    testID: "panel-glass",
    title: "Advanced Technology",
    subtitle: "State-of-the-Art Equipment",
    description:
      "We use the latest MRI scanners and imaging technology to provide the most accurate and detailed health assessments.",
    buttonText: "View Technology",
    variant: "glass",
  },
};

export const InvertVariant: Story = {
  args: {
    testID: "panel-invert",
    title: "Patient Care",
    subtitle: "Exceptional Experience",
    description:
      "Our team is dedicated to providing exceptional patient care throughout your health screening journey.",
    buttonText: "Contact Us",
    variant: "invert",
  },
};

export const WithoutButton: Story = {
  args: {
    testID: "panel-no-button",
    title: "Medical Research",
    subtitle: "Leading Innovation",
    description:
      "We conduct cutting-edge research in preventive medicine and early detection technologies to improve patient outcomes.",
    variant: "glass",
  },
};

export const MinimalContent: Story = {
  args: {
    testID: "panel-minimal",
    title: "Quick Facts",
    buttonText: "Details",
  },
};

export const LongContent: Story = {
  args: {
    testID: "panel-long",
    title: "Comprehensive Whole Body MRI Screening",
    subtitle: "Complete Health Assessment in One Visit",
    description:
      "Our comprehensive whole body MRI screening service provides detailed imaging of all major organ systems, allowing for early detection of various health conditions including cardiovascular disease, cancer, and neurological disorders. This advanced screening technology helps identify potential health issues before symptoms appear, enabling proactive treatment and better health outcomes. The process is non-invasive, comfortable, and typically completed within 90 minutes.",
    buttonText: "Schedule Your Screening",
    variant: "glass",
  },
};

export const WithCustomChildren: Story = {
  args: {
    testID: "panel-custom",
    variant: "glass",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <Panel {...args}>
        <Heading testID="custom-heading">Custom Panel Content</Heading>
        <Text testID="custom-text" component="p">
          This panel demonstrates how you can pass custom children instead of
          using the built-in title, subtitle, and description props.
        </Text>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Button testID="custom-button-1" variant="primary">
            Primary Action
          </Button>
          <Button testID="custom-button-2" variant="secondary">
            Secondary Action
          </Button>
        </div>
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: "rgba(0, 102, 204, 0.1)",
            borderRadius: "4px",
          }}
        >
          <Text testID="custom-note" component="small">
            Note: Custom content allows for complete flexibility in panel layout
            and design.
          </Text>
        </div>
      </Panel>
    </div>
  ),
};

export const MultipleVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        padding: "2rem",
        maxWidth: "1200px",
      }}
    >
      <Panel
        testID="multiple-default"
        title="Default Panel"
        subtitle="Standard Styling"
        description="This is the default panel variant with standard styling."
        buttonText="Default"
      />
      <Panel
        testID="multiple-glass"
        title="Glass Panel"
        subtitle="Glass Effect"
        description="This panel uses the glass variant for a translucent appearance."
        buttonText="Glass"
        variant="glass"
      />
      <Panel
        testID="multiple-invert"
        title="Invert Panel"
        subtitle="Inverted Colors"
        description="This panel uses the invert variant with inverted color scheme."
        buttonText="Invert"
        variant="invert"
      />
    </div>
  ),
};
