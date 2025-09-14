import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArticleCard } from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
  title: "Blocks/ArticleCard",
  component: ArticleCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    tags: {
      control: "object",
    },
    media: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testID: "article-card-default",
    title: "Advanced MRI Technology",
    description: "Learn about our cutting-edge MRI scanners and their benefits",
    tags: ["Technology", "Innovation", "Health"],
    media: {
      type: "image",
      format: "jpg",
      src: "/images/WBMRI-3-scaled.jpg",
    },
  },
};

export const WithoutImage: Story = {
  args: {
    testID: "article-card-no-image",
    title: "Health Screening Benefits",
    description: "Understanding the importance of preventive health screening",
    tags: ["Health", "Prevention"],
  },
};

export const LongTitle: Story = {
  args: {
    testID: "article-card-long-title",
    title:
      "Comprehensive Whole Body MRI Scanning for Early Detection of Health Issues",
    description:
      "How comprehensive health assessment in a single scan can save lives",
    tags: ["Scanning", "Comprehensive", "Early Detection"],
    media: {
      type: "image",
      format: "jpg",
      src: "/images/WBMRI-34.jpg",
    },
  },
};

export const ManyTags: Story = {
  args: {
    testID: "article-card-many-tags",
    title: "Medical Innovation",
    description: "Pioneering the future of diagnostic medicine",
    tags: [
      "Innovation",
      "Medicine",
      "Technology",
      "Research",
      "Healthcare",
      "Future",
    ],
    media: {
      type: "image",
      format: "jpg",
      src: "/images/WBMRI-3-scaled.jpg",
    },
  },
};

export const MinimalContent: Story = {
  args: {
    testID: "article-card-minimal",
    title: "Patient Care",
    tags: ["Care"],
    media: {
      type: "image",
      format: "jpg",
      src: "/images/WBMRI-34.jpg",
    },
  },
};
