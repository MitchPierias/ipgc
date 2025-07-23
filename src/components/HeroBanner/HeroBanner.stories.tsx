import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroBanner } from "./HeroBanner";

export default {
  title: "Components/HeroBanner",
  component: HeroBanner,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Why Choose Us?",
    description:
      "State of the art equipment. Respected Doctors. Unparalleled experience.",
  },
} satisfies Meta<React.ComponentProps<typeof HeroBanner>>;

export const Default = {} satisfies StoryObj<
  Meta<React.ComponentProps<typeof HeroBanner>>
>;
