import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollWheel } from "./ScrollWheel";
import { ParallaxProvider } from "react-scroll-parallax";

const meta: Meta<typeof ScrollWheel> = {
  title: "Blocks/ScrollWheel",
  component: ScrollWheel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    startAngle: {
      control: { type: "number", min: 0, max: 360, step: 15 },
    },
    endAngle: {
      control: { type: "number", min: 0, max: 360, step: 15 },
    },
  },
  decorators: [
    (Story) => (
      <ParallaxProvider>
        <Story />
      </ParallaxProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testID: "scroll-wheel-default",
    startAngle: 0,
    endAngle: 180,
  },
  render: (args) => (
    <div
      style={{
        minHeight: "200vh",
        padding: "2rem",
        background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          padding: "2rem",
        }}
      >
        <h1>Scroll Wheel Demo</h1>
        <p>
          Scroll down to see the wheel rotate and reveal different content
          sections.
        </p>
        <p>The wheel shows various health services and screening options.</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <ScrollWheel {...args} />
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "2rem",
        }}
      >
        <h2>Continue Scrolling</h2>
        <p>The wheel continues to rotate as you scroll through the page.</p>
      </div>
    </div>
  ),
};

export const FullRotation: Story = {
  args: {
    testID: "scroll-wheel-full",
    startAngle: 0,
    endAngle: 360,
  },
  render: (args) => (
    <div
      style={{
        minHeight: "300vh",
        padding: "2rem",
        background: "linear-gradient(to bottom, #0066cc, #004499, #002266)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          padding: "2rem",
          color: "white",
        }}
      >
        <h1>Full Rotation Scroll Wheel</h1>
        <p>This wheel completes a full 360-degree rotation as you scroll.</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "200vh",
          alignItems: "center",
        }}
      >
        <ScrollWheel {...args} />
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "2rem",
          color: "white",
        }}
      >
        <h2>Full Circle Complete</h2>
        <p>The wheel has completed its full rotation cycle.</p>
      </div>
    </div>
  ),
};

export const QuarterTurn: Story = {
  args: {
    testID: "scroll-wheel-quarter",
    startAngle: 45,
    endAngle: 135,
  },
  render: (args) => (
    <div
      style={{
        minHeight: "150vh",
        padding: "2rem",
        background: "linear-gradient(45deg, #f8f9fa, #0066cc)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          padding: "2rem",
        }}
      >
        <h1>Quarter Turn Wheel</h1>
        <p>This wheel rotates from 45° to 135° (quarter turn).</p>
        <p>Perfect for subtle animation effects.</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "80vh",
          alignItems: "center",
        }}
      >
        <ScrollWheel {...args} />
      </div>
    </div>
  ),
};

export const ReverseRotation: Story = {
  args: {
    testID: "scroll-wheel-reverse",
    startAngle: 180,
    endAngle: 0,
  },
  render: (args) => (
    <div
      style={{
        minHeight: "200vh",
        padding: "2rem",
        background: "linear-gradient(to bottom, #e9ecef, #0066cc)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          padding: "2rem",
        }}
      >
        <h1>Reverse Rotation Wheel</h1>
        <p>This wheel rotates backwards from 180° to 0°.</p>
        <p>Demonstrates reverse animation capabilities.</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "120vh",
          alignItems: "center",
        }}
      >
        <ScrollWheel {...args} />
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "2rem",
        }}
      >
        <h2>Reverse Complete</h2>
        <p>The wheel has completed its reverse rotation.</p>
      </div>
    </div>
  ),
};

export const MultipleWheels: Story = {
  render: () => (
    <div
      style={{
        minHeight: "400vh",
        padding: "2rem",
        background:
          "linear-gradient(to bottom, #f8f9fa, #0066cc, #004499, #002266)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          padding: "2rem",
        }}
      >
        <h1>Multiple Scroll Wheels</h1>
        <p>Different wheels with various rotation ranges and speeds.</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          minHeight: "100vh",
          alignItems: "center",
          marginBottom: "8rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3>Fast Rotation</h3>
          <ScrollWheel
            testID="multi-wheel-fast"
            startAngle={0}
            endAngle={270}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Slow Rotation</h3>
          <ScrollWheel
            testID="multi-wheel-slow"
            startAngle={90}
            endAngle={180}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center", color: "white" }}>
          <h3>Center Wheel</h3>
          <ScrollWheel
            testID="multi-wheel-center"
            startAngle={0}
            endAngle={360}
          />
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "2rem",
          color: "white",
        }}
      >
        <h2>All Wheels Active</h2>
        <p>Multiple scroll wheels can work together in the same page.</p>
      </div>
    </div>
  ),
};
