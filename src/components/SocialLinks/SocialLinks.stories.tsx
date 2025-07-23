import type { Meta, StoryObj } from "@storybook/react-vite";
import { SocialLinks } from "./SocialLinks";

export default {
  title: "Components/SocialLinks",
  component: SocialLinks,
  parameters: {
    layout: "centered",
  },
  args: {
    items: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/wholebodymri/",
        icon: "/wp-content/themes/wholebodymri/img/linkedin.svg",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/whole.body.mri/",
        icon: "/wp-content/themes/wholebodymri/img/instagram.svg",
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/@WholeBodyMRI",
        icon: "/wp-content/themes/wholebodymri/img/youtube.svg",
      },
    ],
  },
} satisfies Meta<React.ComponentProps<typeof SocialLinks>>;

export const Default = {} satisfies StoryObj<
  Meta<React.ComponentProps<typeof SocialLinks>>
>;
