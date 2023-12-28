import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
  primaryColors: {
    default: "#00AAFF",
    [DARK]: "#00FFAA",
  },
  primaryDarkColors: {
    default: "#0076B2",
    [DARK]: "#01AC01",
  },
});

export const spacing = stylex.defineVars({
  borderRadius: ".25em",
});

export const fadeIn = stylex.keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});
