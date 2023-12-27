import "./globals.css";

import * as stylex from "@stylexjs/stylex";

export const metadata = {
  title: "StyleX + Next",
  description: "StyleX with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main {...stylex.props(styles.main)}>{children}</main>
      </body>
    </html>
  );
}

const MEDIA_MOBILE = "@media (max-width: 700px)";

const styles = stylex.create({
  main: {
    paddingInline: 32,
    minHeight: "100vh",
    width: "100%",
    maxWidth: 1240,
    marginInline: "auto",
  },
});
