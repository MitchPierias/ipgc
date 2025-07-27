declare namespace Common {
  interface ComponentProps {
    testID: string;
  }

  interface ElementProps extends ComponentProps {
    className?: string;
  }

  type Size = "small" | "medium" | "large";

  type Variant = "primary" | "secondary" | "accent";

  type Layout = "full" | "content" | "gutter";
}
