import { storyblokEditable } from "@storyblok/react";
import { StaffCard } from "~/components/StaffCard/StaffCard";

export interface StaffBlockBlok extends Common.Blok {
  component: "StaffBlock";
  name: string;
  title: string;
  education: string;
  bio: string;
  image: Common.ImageBlock;
}

export const StaffBlock = ({
  testID = "staff-block",
  blok,
}: Common.BlokProps<StaffBlockBlok>) => {
  return (
    <StaffCard
      testID={testID}
      {...blok}
      imageUrl={blok.image.filename}
      {...storyblokEditable(blok)}
    />
  );
};
