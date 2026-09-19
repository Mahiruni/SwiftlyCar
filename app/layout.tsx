import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Swiftly — Everything you need, delivered.",
  description: "Rides, food, groceries, packages and more in one beautifully simple platform.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
