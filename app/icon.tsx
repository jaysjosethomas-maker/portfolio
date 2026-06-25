import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 64,
  height: 64
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#111214",
        borderRadius: "50%",
        color: "#ffffff",
        display: "flex",
        fontSize: 22,
        fontWeight: 700,
        height: "100%",
        justifyContent: "center",
        letterSpacing: -1,
        width: "100%"
      }}
    >
      JT
    </div>,
    size
  );
}
