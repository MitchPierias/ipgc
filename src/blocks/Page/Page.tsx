import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styles from "./Page.module.css";
import { BlankBlock } from "../BlankBlock/BlankBlock";

interface PageBlok {
  component: "Page";
  body: Common.Blok[];
  headerOffset?: boolean;
}

export const Page = ({ blok }: Common.BlokProps<PageBlok>) => (
  <main
    data-testid={"page"}
    className={styles.frame}
    {...storyblokEditable(blok)}
  >
    {blok.headerOffset && <BlankBlock testID="header-offset" />}
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
