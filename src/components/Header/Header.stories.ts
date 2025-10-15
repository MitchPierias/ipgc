import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Header navigation component inspired by Okta's design, featuring dropdown menus, responsive behavior, and professional styling for a medical practice website.",
      },
    },
  },
} satisfies Meta<React.ComponentProps<typeof Header>>;

export const Default = {} satisfies StoryObj<
  Meta<React.ComponentProps<typeof Header>>
>;

export const WithDropdownOpen = {
  parameters: {
    docs: {
      description: {
        story:
          "Header with services dropdown opened by default. Shows the multi-column navigation structure with call-to-action sections.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    // You can add interactions here if needed for testing
    // For example, hovering over navigation items to show dropdowns
  },
} satisfies StoryObj<Meta<React.ComponentProps<typeof Header>>>;

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Header displayed in mobile view with hamburger menu and utility bar hidden.",
      },
    },
  },
} satisfies StoryObj<Meta<React.ComponentProps<typeof Header>>>;

export const Tablet = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story:
          "Header displayed in tablet view showing responsive behavior between mobile and desktop layouts.",
      },
    },
  },
} satisfies StoryObj<Meta<React.ComponentProps<typeof Header>>>;

export const WithUtilityBar = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story:
          "Header showing the utility bar at the top with contact information and patient login link, mimicking Okta's top navigation.",
      },
    },
  },
} satisfies StoryObj<Meta<React.ComponentProps<typeof Header>>>;
