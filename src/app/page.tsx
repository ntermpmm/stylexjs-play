"use client";
import React from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "./Button";

const MEDIA_MOBILE = "@media (min-width: 480px)";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 32,
  },
  heading: {
    color: "red",
    [MEDIA_MOBILE]: {
      color: "blue",
    },
  },
  button: {
    padding: 8,
  },
});
export default function Home() {
  return (
    <main {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.heading)}>Test StyleX</h1>
      <Button isLarge styles={styles.button} variant="primary">
        Test Button
      </Button>
    </main>
  );
}
