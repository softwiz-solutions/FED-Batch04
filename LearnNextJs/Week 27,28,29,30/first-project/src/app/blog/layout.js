import BlogNavbar from "@/components/BlogNavbar";
import React from "react";

export default function BlogLayout({ children }) {
  return (
    <div className="bg-red-400 min-h-100">
      <div>
        <h1 className="text-3xl font-bold text-center py-4">Blog Layout</h1>
      </div>
      <BlogNavbar />
      {children}
    </div>
  );
}
