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
