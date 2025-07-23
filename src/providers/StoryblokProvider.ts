"use client";

import { getStoryblokApi } from "../lib/storyblok";

export const StoryblokProvider = ({ children }: React.PropsWithChildren) => {
  getStoryblokApi();

  return children;
};
