import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styles from "./Page.module.css";

interface PageBlok {
  component: "Page";
  body: Common.Blok[];
}

export const Page = ({ blok }: Common.BlokProps<PageBlok>) => (
  <main
    data-testid={"page"}
    className={styles.frame}
    {...storyblokEditable(blok)}
  >
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
