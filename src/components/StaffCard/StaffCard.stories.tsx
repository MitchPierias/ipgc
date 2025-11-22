import type { Meta, StoryObj } from "@storybook/react-vite";
import { StaffCard } from "./StaffCard";

const meta: Meta<typeof StaffCard> = {
  title: "Components/StaffCard",
  component: StaffCard,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    name: {
      control: "text",
      description: "Staff member's full name",
    },
    title: {
      control: "text",
      description: "Professional title or role",
    },
    education: {
      control: "text",
      description: "Education or qualifications",
    },
    bio: {
      control: "text",
      description: "Brief biography or description",
    },
    imageUrl: {
      control: "text",
      description: "Profile image URL",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Dr. Sarah Johnson",
    title: "Senior Radiologist",
    education:
      "Bachelor of Nursing, Graduate Certificate in Clinical Nursing and Teaching",
    bio: "Experienced radiologist specializing in MRI diagnostics with over 10 years in medical imaging. Expert in advanced scanning techniques and patient care.",
    imageUrl: "/images/chloe-glen.webp",
  },
};

export const LongBio: Story = {
  args: {
    name: "Dr. Alexandra Martinez",
    title: "Research Radiologist",
    education:
      "Bachelor of Nursing, Graduate Certificate in Clinical Nursing and Teaching",
    bio: "Internationally recognized researcher in advanced MRI techniques with expertise in cardiac imaging, neurological disorders, and preventive medicine. Has published over 150 peer-reviewed articles and leads multiple clinical trials focused on early disease detection through innovative imaging protocols.",
    imageUrl: "/images/deidre-basson.webp",
  },
};
