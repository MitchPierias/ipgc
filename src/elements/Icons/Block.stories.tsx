import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlockIcon } from "./Block";

const meta: Meta<typeof BlockIcon> = {
  title: "Elements/Icons",
  component: BlockIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "50px", height: "50px", color: "#0066cc" }}>
      <BlockIcon />
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <div style={{ width: "24px", height: "24px", color: "#333" }}>
      <BlockIcon />
    </div>
  ),
};

export const Medium: Story = {
  render: () => (
    <div style={{ width: "50px", height: "50px", color: "#0066cc" }}>
      <BlockIcon />
    </div>
  ),
};

export const Large: Story = {
  render: () => (
    <div style={{ width: "100px", height: "100px", color: "#004499" }}>
      <BlockIcon />
    </div>
  ),
};

export const ExtraLarge: Story = {
  render: () => (
    <div style={{ width: "150px", height: "150px", color: "#0066cc" }}>
      <BlockIcon />
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
        gap: "2rem",
        alignItems: "center",
        justifyItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "60px", height: "60px", color: "#0066cc" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>Primary Blue</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "60px", height: "60px", color: "#004499" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>Dark Blue</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "60px", height: "60px", color: "#333" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>Dark Gray</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "60px", height: "60px", color: "#666" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>Medium Gray</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "60px", height: "60px", color: "#28a745" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>Success Green</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "60px", height: "60px", color: "#dc3545" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>Error Red</span>
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        padding: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "16px", height: "16px", color: "#0066cc" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>16px</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "24px", height: "24px", color: "#0066cc" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>24px</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "32px", height: "32px", color: "#0066cc" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>32px</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "48px", height: "48px", color: "#0066cc" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>48px</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "64px", height: "64px", color: "#0066cc" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>64px</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ width: "96px", height: "96px", color: "#0066cc" }}>
          <BlockIcon />
        </div>
        <span style={{ fontSize: "12px", color: "#666" }}>96px</span>
      </div>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
        maxWidth: "600px",
      }}
    >
      {/* Icon in text content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.5rem",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <div style={{ width: "40px", height: "40px", color: "#0066cc" }}>
          <BlockIcon />
        </div>
        <div>
          <h3 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>
            Health Screening Services
          </h3>
          <p style={{ margin: 0, color: "#666" }}>
            Advanced MRI technology for comprehensive health assessments.
          </p>
        </div>
      </div>

      {/* Icon as a decorative element */}
      <div
        style={{
          position: "relative",
          padding: "2rem",
          backgroundColor: "#0066cc",
          color: "white",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "30px",
            height: "30px",
            color: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <BlockIcon />
        </div>
        <h3 style={{ margin: "0 0 1rem 0" }}>Featured Service</h3>
        <p style={{ margin: 0 }}>
          Whole body MRI screening for early detection of health issues.
        </p>
      </div>

      {/* Icon in navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "20px", height: "20px", color: "#0066cc" }}>
            <BlockIcon />
          </div>
          <span style={{ fontWeight: "500", color: "#333" }}>
            Health Dashboard
          </span>
        </div>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </div>

      {/* Icon grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          padding: "1rem",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        {[
          "MRI Scanning",
          "Health Reports",
          "Patient Portal",
          "Consultation",
          "Results Review",
          "Follow-up Care",
        ].map((title, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem",
              backgroundColor: "white",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <div style={{ width: "32px", height: "32px", color: "#0066cc" }}>
              <BlockIcon />
            </div>
            <span style={{ fontSize: "14px", color: "#333" }}>{title}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const OnDarkBackground: Story = {
  render: () => (
    <div
      style={{
        padding: "3rem",
        backgroundColor: "#1a1a1a",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>Icons on Dark Background</h2>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ width: "50px", height: "50px", color: "white" }}>
            <BlockIcon />
          </div>
          <span style={{ fontSize: "12px", color: "#ccc" }}>White</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ width: "50px", height: "50px", color: "#66b3ff" }}>
            <BlockIcon />
          </div>
          <span style={{ fontSize: "12px", color: "#ccc" }}>Light Blue</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ width: "50px", height: "50px", color: "#ffcc66" }}>
            <BlockIcon />
          </div>
          <span style={{ fontSize: "12px", color: "#ccc" }}>Light Orange</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ width: "50px", height: "50px", color: "#66ff66" }}>
            <BlockIcon />
          </div>
          <span style={{ fontSize: "12px", color: "#ccc" }}>Light Green</span>
        </div>
      </div>
    </div>
  ),
};
