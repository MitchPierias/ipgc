import { storyblokEditable } from "@storyblok/react";
import { StaffCard } from "~/components/StaffCard/StaffCard";

export type StaffBlockBlok = {
  component: "StaffBlock";
  name: string;
  title: string;
  location: string;
  bio: string;
  image: Common.ImageBlock;
};

export const StaffBlock = ({ blok }: Common.BlokProps<StaffBlockBlok>) => {
  return (
    <StaffCard
      {...blok}
      imageUrl={blok.image.filename}
      {...storyblokEditable(blok)}
    />
  );
};
