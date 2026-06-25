import { ImageResponse } from "next/og";

import { profile } from "@/content/portfolio";

export const runtime = "edge";
export const alt = "Jays Thomas - Product Leader";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          color: "#111214",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%"
        }}
      >
        <div
          style={{
            border: "1px solid #e5e5e5",
            borderRadius: 48,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: 56,
            width: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
              justifyContent: "space-between",
              letterSpacing: -0.5
            }}
          >
            <span>{profile.name}</span>
            <span>Product Leader</span>
          </div>
          <div>
            <div
              style={{
                color: "#6b7280",
                fontSize: 22,
                letterSpacing: 4,
                marginBottom: 28,
                textTransform: "uppercase"
              }}
            >
              AI Cloud · Marketplaces · Enterprise Systems
            </div>
            <div
              style={{
                fontSize: 74,
                fontWeight: 700,
                letterSpacing: -5,
                lineHeight: 0.95,
                maxWidth: 920
              }}
            >
              Building products that solve complex business problems at scale.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
