import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlankBlock } from "./BlankBlock";

const meta: Meta<typeof BlankBlock> = {
  title: "Blocks/BlankBlock",
  component: BlankBlock,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    height: {
      control: { type: "select" },
      options: ["none", "tight", "base", "loose"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testID: "blank-block",
    height: "base",
  },
};

export const Tight: Story = {
  args: {
    testID: "blank-block-tight",
    height: "tight",
  },
};

export const Loose: Story = {
  args: {
    testID: "blank-block-loose",
    height: "loose",
  },
};

export const None: Story = {
  args: {
    testID: "blank-block-none",
    height: "none",
  },
};

export const InContext: Story = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        Content above
      </div>
      <BlankBlock testID="blank-block" height="base" />
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        Content below
      </div>
    </div>
  ),
};

