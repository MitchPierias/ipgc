import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./Footer";

export default {
  title: "Sections/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    testID: "footer",
  },
} satisfies Meta<React.ComponentProps<typeof Footer>>;

export const Default = {} satisfies StoryObj<
  Meta<React.ComponentProps<typeof Footer>>
>;
