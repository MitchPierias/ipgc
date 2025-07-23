import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<React.ComponentProps<typeof Header>>;

export const Default = {} satisfies StoryObj<
  Meta<React.ComponentProps<typeof Header>>
>;

export const WithSearchOpen = {
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
} satisfies StoryObj<Meta<React.ComponentProps<typeof Header>>>;

export const WithMobileMenuOpen = {
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
} satisfies StoryObj<Meta<React.ComponentProps<typeof Header>>>;
