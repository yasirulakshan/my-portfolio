import type { Metadata } from "next";
import "./globals.css";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";

export const metadata: Metadata = {
  title: "Yasiru Wickramasinghe",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
