import { ImageResponse } from "next/og";

import { site } from "../lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OpenGraphImage = () => new ImageResponse(
  (
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      width: "100%", height: "100%", padding: 64,
      background: "#e8edf7", color: "#2442d8", fontFamily: "sans-serif",
    }}>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 700, letterSpacing: -5, lineHeight: 1.05 }}>
        <span>Is Mariah Carey</span>
        <span>defrosted?</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#17254b", fontSize: 25 }}>
        <span>A seasonal Mariah Carey check.</span>
        <span>ismariahcareydefrosted.com</span>
      </div>
    </div>
  ),
  size,
);

export default OpenGraphImage;
