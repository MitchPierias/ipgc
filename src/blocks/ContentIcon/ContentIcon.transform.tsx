import { BlockIcon } from "src/elements/Icons/BlockIcon";

interface ContentIconBlok extends Common.Blok {
  icon: string;
}

export const ContentIcon = ({
  testID = "content-icon",
  blok,
}: Common.BlokProps<ContentIconBlok>) => {
  return (
    <div data-testid={testID} style={{ width: "2rem", height: "2rem" }}>
      <BlockIcon />
    </div>
  );
};
