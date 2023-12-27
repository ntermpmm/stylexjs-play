"use client";
import React from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "./Button";

const MEDIA_MOBILE = "@media (min-width: 480px)";

const styles = stylex.create({
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
    <main>
      <h1 {...stylex.props(styles.heading)}>Test StyleX</h1>
      <Button variant="primary" isLarge styles={styles.button}>
        Test Button
      </Button>
    </main>
  );
}
