import {
  Heading,
  Leading,
  Subheading,
  Subtitle,
  Title,
  Text,
  Paragraph,
  Microcopy,
} from "src/elements/Text/Text";

interface ContentTextBlok extends Common.Blok {
  component: "ContentText";
  body: string;
  invert?: boolean;
  variant?:
    | "leading"
    | "heading"
    | "subheading"
    | "title"
    | "subtitle"
    | "paragraph"
    | "microcopy"
    | "text";
}

export const ContentText = ({
  testID = "content-block",
  blok,
}: Common.BlokProps<ContentTextBlok>) => {
  console.log(blok.variant, blok.body);
  switch (blok.variant) {
    case "leading":
      return <Leading testID={testID}>{blok.body}</Leading>;
    case "heading":
      return <Heading testID={testID}>{blok.body}</Heading>;
    case "subheading":
      return <Subheading testID={testID}>{blok.body}</Subheading>;
    case "title":
      return <Title testID={testID}>{blok.body}</Title>;
    case "subtitle":
      return <Subtitle testID={testID}>{blok.body}</Subtitle>;
    case "paragraph":
      return <Paragraph testID={testID}>{blok.body}</Paragraph>;
    case "microcopy":
      return <Microcopy testID={testID}>{blok.body}</Microcopy>;
    default:
      return <Text testID={testID}>{blok.body}</Text>;
  }
};
