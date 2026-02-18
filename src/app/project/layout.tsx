import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

export default function ProjectLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:px-50">
      <Header />
      <div className="flex flex-col gap-5 bg-base border border-dashed dark:border-gray-700 border-gray-200 border-t-0 p-6">
        {children}
      </div>
      <Footer />
    </div>
  );
}
