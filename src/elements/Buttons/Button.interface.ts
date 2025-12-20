interface BaseProps extends Common.ComponentProps {
  variant?: Common.Variant;
  align?: "left" | "center" | "right";
  size?: Common.Size;
  disabled?: boolean;
}

// Base props for anchor elements
interface AnchorProps extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
}

// Base props for button elements
interface ButtonProps extends BaseProps {
  href?: never;
}

// Conditional type that determines element props based on href presence
export type IProps =
  | (AnchorProps &
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof AnchorProps> &
      React.RefAttributes<HTMLAnchorElement>)
  | (ButtonProps &
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps> &
      React.RefAttributes<HTMLButtonElement>);
