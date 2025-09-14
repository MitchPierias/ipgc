import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconBlock } from "./IconBlock";

const meta: Meta<typeof IconBlock> = {
  title: "Blocks/IconBlock",
  component: IconBlock,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testID: "icon-block-default",
    title: "Advanced Technology",
    description:
      "State-of-the-art MRI scanners providing detailed health assessments with precision and accuracy.",
  },
};

export const HealthScreening: Story = {
  args: {
    testID: "icon-block-health",
    title: "Health Screening",
    description:
      "Comprehensive health screening services designed to detect potential issues early and maintain optimal health.",
  },
};

export const PatientCare: Story = {
  args: {
    testID: "icon-block-care",
    title: "Patient Care",
    description:
      "Exceptional patient experience with personalized care and support throughout your health journey.",
  },
};

export const Research: Story = {
  args: {
    testID: "icon-block-research",
    title: "Medical Research",
    description:
      "Leading research in preventive medicine and innovative diagnostic techniques for better health outcomes.",
  },
};

export const EarlyDetection: Story = {
  args: {
    testID: "icon-block-detection",
    title: "Early Detection",
    description:
      "Advanced imaging technology enables early detection of health issues, improving treatment outcomes and saving lives.",
  },
};

export const LongContent: Story = {
  args: {
    testID: "icon-block-long",
    title: "Comprehensive Whole Body MRI Scanning",
    description:
      "Our comprehensive whole body MRI scanning service provides detailed imaging of all major organ systems, allowing for early detection of various health conditions including cardiovascular disease, cancer, and neurological disorders. This advanced screening technology helps identify potential health issues before symptoms appear, enabling proactive treatment and better health outcomes for our patients.",
  },
};

export const ShortContent: Story = {
  args: {
    testID: "icon-block-short",
    title: "Innovation",
    description: "Pioneering medical technology.",
  },
};
