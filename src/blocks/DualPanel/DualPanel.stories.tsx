import type { Meta, StoryObj } from "@storybook/react-vite";
import { DualPanel } from "./DualPanel";
import { Panel } from "../Panel/Panel";
import { ArticleCard } from "../ArticleCard/ArticleCard";

const meta: Meta<typeof DualPanel> = {
  title: "Blocks/DualPanel",
  component: DualPanel,
  parameters: {
    layout: "fullscreen",
  },
  args: { testID: "dual-panel-default" },
  argTypes: {
    variant: {
      control: "select",
      options: ["card", "transparent"],
    },
    layout: {
      control: "select",
      options: ["content", "gutter", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "transparent",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <DualPanel {...args}>
        <Panel
          testID="left-panel"
          title="Health Screening"
          subtitle="Early Detection Saves Lives"
          description="Our comprehensive health screening uses advanced MRI technology to detect potential health issues before symptoms appear."
          buttonText="Learn More"
          variant="glass"
        />
        <Panel
          testID="right-panel"
          title="Advanced Technology"
          subtitle="State-of-the-Art Equipment"
          description="We use the latest MRI scanners and imaging technology to provide the most accurate and detailed health assessments."
          buttonText="View Technology"
          variant="glass"
        />
      </DualPanel>
    </div>
  ),
};

export const CardVariant: Story = {
  args: {
    variant: "card",
  },
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <DualPanel {...args}>
        <ArticleCard
          testID="card-1"
          title="MRI Technology Advancement"
          description="Latest developments in MRI scanning technology"
          tags={["Technology", "Innovation"]}
          media={{
            type: "image",
            format: "jpg",
            src: "/images/WBMRI-3-scaled.jpg",
          }}
        />
        <ArticleCard
          testID="card-2"
          title="Patient Care Excellence"
          description="Our commitment to exceptional patient experience"
          tags={["Care", "Experience"]}
          media={{
            type: "image",
            format: "jpg",
            src: "/images/WBMRI-34.jpg",
          }}
        />
      </DualPanel>
    </div>
  ),
};
