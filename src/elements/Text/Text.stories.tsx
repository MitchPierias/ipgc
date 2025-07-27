import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading, Headline, Subheading, Subtitle, Text, Title } from "./Text";

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
      <Headline {...props}>Headline</Headline>
      <Heading {...props}>Heading</Heading>
      <Subheading {...props}>Subheading</Subheading>
      <Title {...props}>Title</Title>
      <Subtitle {...props}>Subtitle</Subtitle>
      <Text {...props}>Text</Text>
    </div>
  ),
} satisfies StoryObj<Meta<React.ComponentProps<typeof Text>>>;
