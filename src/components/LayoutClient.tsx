"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isRecruiterPage = pathname.startsWith("/recruiters");
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />}
      {children}
      {!isRecruiterPage && !isAdminPage && <Contact />}
      {!isAdminPage && <Footer />}
    </>
  );
}