import "./globals.css";

export const metadata = {
  title: "Kinematics Pipeline",
  description: "From Coordinate Frames to Forward Kinematics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
