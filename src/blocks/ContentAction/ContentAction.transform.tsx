import { Button } from "src/elements/Buttons/Button";

interface ContentActionBlok extends Common.Blok {
  component: "ContentAction";
  label: string;
  href: string;
}

export const ContentAction = ({
  testID = "content-action",
  blok,
}: Common.BlokProps<ContentActionBlok>) => {
  return (
    <Button testID={testID} href={blok.href}>
      {blok.label}
    </Button>
  );
};
