import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Elements/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    testID: "button",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
  },
  render: (args) => <Button {...args}>{args.children || "Click me"}</Button>,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
};

export const AsLink: Story = {
  argTypes: {
    href: {
      control: "text",
    },
    target: {
      control: { type: "select" },
      options: ["_self", "_blank", "_parent", "_top"],
    },
    rel: {
      control: "text",
    },
  },
  args: {
    variant: "primary",
    size: "md",
    href: "https://ipgc.com.au",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    variant: "secondary",
    size: "md",
  },
};
