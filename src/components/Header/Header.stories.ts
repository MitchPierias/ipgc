import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSearchOpen: Story = {
  parameters: {
    docs: {
      description: {
        story: "Header with search panel opened by default.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    // You can add interactions here if needed
  },
};

export const WithMobileMenuOpen: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Header displayed in mobile view.",
      },
    },
  },
};
