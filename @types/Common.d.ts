declare namespace Common {
  interface BlokProps<T> extends ComponentProps {
    blok: Blok & T;
  }

  interface Blok {
    [index: string]: string | number | object | boolean | undefined;
    _uid: string;
  }
  interface ComponentProps {
    testID: string;
  }

  interface ElementProps extends ComponentProps {
    className?: string;
  }

  type Size = "xs" | "sm" | "md" | "lg" | "xl";

  type Space = "none" | "base" | "loose" | "tight";

  type Alignment = "center" | "left" | "right";

  type Variant = "primary" | "secondary" | "accent" | "tertiary";

  type Layout = "full" | "content" | "gutter";

  type Width = "full" | "content" | "gutter";
  type Height = "full" | "content" | "gutter";

  type Media = {
    type: "image" | "video";
    format: "jpg" | "jpeg" | "png" | "gif" | "mp4" | "webm" | string;
    src: string;
  };

  type PickBlockProps<T> = Common.BlokProps<T>["blok"];

  type ImageBlock = {
    id: number;
    alt: string;
    name: string;
    focus: string;
    title: string;
    source: string;
    filename: string;
    copyright: string;
    fieldtype: "asset" | string;
    meta_data: {};
    is_external_url: boolean;
  };
}
