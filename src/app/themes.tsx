import * as stylex from "@stylexjs/stylex";
import { colors } from "./tokens.stylex";

// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: dark)";

export const dracula = stylex.createTheme(colors, {
  primaryColors: { default: "red", [DARK]: "purple" },
  primaryDarkColors: { default: "green", [DARK]: "blue" },
});
