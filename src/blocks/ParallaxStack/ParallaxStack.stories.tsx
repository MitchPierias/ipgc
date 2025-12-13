import type { Meta, StoryObj } from "@storybook/react-vite";
import { ParallaxStack } from "./ParallaxStack";
import { Panel } from "../Panel/Panel";
import { IconBlock } from "../IconBlock/IconBlock";

const meta: Meta<typeof ParallaxStack> = {
  title: "Blocks/ParallaxStack",
  component: ParallaxStack,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    staggerDelay: {
      control: { type: "number", min: 50, max: 500, step: 50 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testID: "parallax-stack-default",
    staggerDelay: 150,
  },
  render: (args) => (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      <ParallaxStack {...args}>
        <Panel
          testID="stack-panel-1"
          title="Health Screening"
          subtitle="Early Detection Saves Lives"
          description="Our comprehensive health screening uses advanced MRI technology to detect potential health issues before symptoms appear."
          buttonText="Learn More"
          variant="glass"
        />
        <Panel
          testID="stack-panel-2"
          title="Advanced Technology"
          subtitle="State-of-the-Art Equipment"
          description="We use the latest MRI scanners and imaging technology to provide the most accurate and detailed health assessments."
          buttonText="View Technology"
          variant="glass"
        />
        <Panel
          testID="stack-panel-3"
          title="Expert Care"
          subtitle="Professional Medical Team"
          description="Our experienced medical professionals are dedicated to providing exceptional care throughout your health screening journey."
          buttonText="Meet Our Team"
          variant="glass"
        />
        <Panel
          testID="stack-panel-4"
          title="Research Innovation"
          subtitle="Leading Medical Research"
          description="We conduct cutting-edge research in preventive medicine and early detection technologies to improve patient outcomes."
          buttonText="Read Research"
          variant="glass"
        />
      </ParallaxStack>
    </div>
  ),
};

export const SlowStagger: Story = {
  args: {
    testID: "parallax-stack-slow",
    staggerDelay: 300,
  },
  render: (args) => (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      <ParallaxStack {...args}>
        <IconBlock
          testID="slow-icon-1"
          title="Advanced Scanning"
          description="State-of-the-art MRI technology providing detailed health assessments with precision and accuracy."
        />
        <IconBlock
          testID="slow-icon-2"
          title="Expert Analysis"
          description="Professional medical team analyzing your results to provide comprehensive health insights."
        />
        <IconBlock
          testID="slow-icon-3"
          title="Personalized Care"
          description="Tailored health recommendations based on your individual screening results and health profile."
        />
        <IconBlock
          testID="slow-icon-4"
          title="Ongoing Support"
          description="Continuous support and follow-up care to ensure your optimal health and wellbeing."
        />
        <IconBlock
          testID="slow-icon-5"
          title="Health Monitoring"
          description="Regular health monitoring and screening to track changes and maintain optimal health status."
        />
      </ParallaxStack>
    </div>
  ),
};

export const MixedContent: Story = {
  args: {
    testID: "parallax-stack-mixed",
    staggerDelay: 150,
  },
  render: (args) => (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      <ParallaxStack {...args}>
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#0066cc",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2>Welcome to IPGC</h2>
          <p>
            Leading the way in preventive healthcare through advanced MRI
            technology.
          </p>
        </div>

        <Panel
          testID="mixed-panel"
          title="Our Services"
          subtitle="Comprehensive Health Screening"
          description="We offer a full range of health screening services using the latest medical technology."
          buttonText="Explore Services"
          variant="glass"
        />

        <IconBlock
          testID="mixed-icon"
          title="Why Choose IPGC"
          description="Experience the difference with our patient-centered approach and cutting-edge technology."
        />

        <div
          style={{
            padding: "3rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h3>Book Your Screening Today</h3>
          <p>
            Take the first step towards better health with our comprehensive MRI
            screening.
          </p>
          <button
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#0066cc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Schedule Appointment
          </button>
        </div>
      </ParallaxStack>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    testID: "parallax-stack-long",
    staggerDelay: 200,
  },
  render: (args) => (
    <div style={{ padding: "2rem", minHeight: "150vh" }}>
      <div style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h1>Scroll down to see the parallax stagger effect</h1>
        <p>Items will animate in as they come into view</p>
      </div>

      <ParallaxStack {...args}>
        {Array.from({ length: 8 }, (_, index) => (
          <Panel
            key={index}
            testID={`long-panel-${index}`}
            title={`Health Topic ${index + 1}`}
            subtitle={`Section ${index + 1} of 8`}
            description={`This is content section ${
              index + 1
            }. Each panel will animate in as you scroll, demonstrating the parallax stagger effect with customizable delays.`}
            buttonText="Learn More"
            variant={index % 2 === 0 ? "glass" : "invert"}
          />
        ))}
      </ParallaxStack>

      <div style={{ marginTop: "3rem", textAlign: "center", padding: "2rem" }}>
        <h2>End of Content</h2>
        <p>All items should now be visible with staggered animation effects.</p>
      </div>
    </div>
  ),
};
