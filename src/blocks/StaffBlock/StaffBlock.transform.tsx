"use client";

import { storyblokEditable } from "@storyblok/react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const handleClick = () => {
    router.push(`${window.location.pathname}/${blok._uid}`);
  };

  return (
    <StaffCard
      testID={testID}
      {...blok}
      imageUrl={blok.image.filename}
      onClick={handleClick}
      {...storyblokEditable(blok)}
    />
  );
};
