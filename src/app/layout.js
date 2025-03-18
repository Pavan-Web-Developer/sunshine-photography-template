import MainLayout from "@/layouts/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Sunshine Photography | Professional Photography Services",
  description:
    "Professional photography services specializing in portraits, events, and commercial photography. Capturing your special moments with artistic excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased `}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
