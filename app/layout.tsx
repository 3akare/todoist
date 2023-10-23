import "./globals.css";
import type { Metadata } from "next";

//components
import { NavBar } from "./components";

export const metadata: Metadata = {
  title: "Todoist",
  description: "Task management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./logo.svg" type="image/x-icon" />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
