import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

type PageBlok = {
  _uid: string;
  component: "Page";
  body: any[];
};

export const Page = ({ blok }: { blok: PageBlok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
