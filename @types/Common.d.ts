declare namespace Common {
  interface ComponentProps {
    testID: string;
  }

  interface ElementProps extends ComponentProps {
    className?: string;
  }

  type Size = "xs" | "sm" | "md" | "lg" | "xl";

  type Variant = "primary" | "secondary" | "accent" | "tertiary";

  type Layout = "full" | "content" | "gutter";

  type Width = "full" | "content" | "gutter";
  type Height = "full" | "content" | "gutter";
}
