"use client";

import { Navbar } from "@/components";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto md:px-6 lg:px-8 max-w-7xl">
      <Navbar />
      <div className="px-4 py-8">{children}</div>
    </div>
  );
}
