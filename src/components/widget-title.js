import React from "react";
import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <div
    style={{
      backgroundColor: `#cdcdcf`,
    }}
  >
    <div
      style={{
        fontStyle: `normal`,
        fontSize: `${rhythm(0.8)}`,
        fontWeight: `600`,
        backgroundColor: '#4078c0',
        color: `#fff`,
        padding: `${rhythm(0.30)} ${rhythm(0.45)}`,
        display: `inline-block`,
      }}
    >
      {children}
    </div>
  </div>
);