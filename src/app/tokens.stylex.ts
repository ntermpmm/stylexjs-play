import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
  primaryColors: {
    default: "#00AAFF",
    [DARK]: "00FFAA",
  },
  primaryDarkColors: {
    default: "#0076B2",
    [DARK]: "01AC01",
  },
});
