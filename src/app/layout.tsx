import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
