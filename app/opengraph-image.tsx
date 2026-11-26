import { ImageResponse } from "next/og";

export const alt = "Mukesh B N — AI & Software Systems Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          color: "#18181b",
          padding: "72px",
          border: "1px solid #e4e4e7",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            <span>MUKESH B N</span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#52525b",
                backgroundColor: "#f4f4f5",
                padding: "4px 12px",
                borderRadius: "6px",
                border: "1px solid #e4e4e7",
              }}
            >
              MUKIIQ ECOSYSTEM
            </span>
          </div>
          <span style={{ fontSize: "16px", color: "#71717a" }}>
            AI &amp; Software Systems
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "54px",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#09090b",
            }}
          >
            Applied AI systems, full-stack software, and domain architectures.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#52525b",
              lineHeight: 1.4,
            }}
          >
            AI Dealer · AI STEM Splitter · MUKIIQ RISE · GridBee · EV Battery Intelligence
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #e4e4e7",
            paddingTop: "28px",
            fontSize: "18px",
            color: "#52525b",
          }}
        >
          <span>github.com/mukeshbn2007-hue</span>
          <span>Next.js · TypeScript · Python</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
