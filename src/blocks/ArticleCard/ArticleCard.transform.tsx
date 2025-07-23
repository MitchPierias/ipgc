"use client";

import { StoryblokImageMeta } from "../Section/Section.transform";
import { ArticleCard as ArticleCardComponent } from "./ArticleCard";

export type ArticleBlok = {
  _uid: string;
  component: "ArticleCard";
  title: string;
  tags: string[];
  media?: StoryblokImageMeta;
};

export const ArticleCard = ({ blok }: { blok: ArticleBlok }) => {
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
    />
  );
};
