import { storyblokEditable } from "@storyblok/react";
import { ArticleCard as ArticleCardComponent } from "./ArticleCard";

type ArticleBlok = {
  component: "ArticleCard";
  title: string;
  tags: string[];
  media?: Common.ImageBlock;
};

export const ArticleCard = ({ blok }: Common.BlokProps<ArticleBlok>) => {
  return (
    <ArticleCardComponent
      testID={"article-card"}
      title={blok.title}
      tags={blok.tags}
      media={
        blok.media && {
          type: "image",
          format: blok.media.filename.split(".").pop() || "",
          src: blok.media.filename,
        }
      }
      {...storyblokEditable(blok)}
    />
  );
};
