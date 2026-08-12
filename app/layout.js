import "./globals.css";

export const metadata = {
  title: "AI & Autonomous IoT Systems Integration",
  description: "Lecture on Edge AI, Swarm Intelligence, Self-Healing Networks, and Interoperability Governance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
