import type { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "./HeroBanner";

const meta: Meta<typeof HeroBanner> = {
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
