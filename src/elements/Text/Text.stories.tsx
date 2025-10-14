import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading, Subtitle, Paragraph, Text, Microcopy } from "./Text";

export default {
  title: "Elements/Text",
  component: Text,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    testID: "text",
  },
} satisfies Meta<React.ComponentProps<typeof Text>>;

export const Variations = {
  name: "Text",
  render: (props) => (
    <div>
      <Heading {...props}>Heading</Heading>
      <Subtitle {...props}>Subtitle</Subtitle>
      <Paragraph {...props}>Paragraph</Paragraph>
      <Text {...props}>Text</Text>
      <Microcopy {...props}>Microcopy</Microcopy>
    </div>
  ),
} satisfies StoryObj<Meta<React.ComponentProps<typeof Text>>>;

export const TypewriterEffect = {
  name: "Typewriter Effect",
  render: () => (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div>
        <h3>Basic Typewriter</h3>
        <Text typeOn testID="typewriter-basic">
          Hello, this text will type out character by character!
        </Text>
      </div>

      <div>
        <h3>Slow Typewriter</h3>
        <Text typeOn typeSpeed={100} testID="typewriter-slow">
          This text types more slowly...
        </Text>
      </div>

      <div>
        <h3>Fast Typewriter with Delay</h3>
        <Text typeOn typeSpeed={30} typeDelay={1000} testID="typewriter-fast">
          This text waits 1 second, then types quickly!
        </Text>
      </div>

      <div>
        <h3>Custom Cursor</h3>
        <Text typeOn cursorChar="█" testID="typewriter-cursor">
          This text uses a block cursor instead of a pipe.
        </Text>
      </div>

      <div>
        <h3>Typewriter Heading</h3>
        <Heading typeOn typeSpeed={80} testID="typewriter-heading">
          This is a typewriter heading!
        </Heading>
      </div>

      <div>
        <h3>Combined with Blur Animation</h3>
        <Text animate typeOn typeSpeed={60} testID="typewriter-blur">
          This text combines blur animation with typewriter effect.
        </Text>
      </div>
    </div>
  ),
} satisfies StoryObj<Meta<React.ComponentProps<typeof Text>>>;
