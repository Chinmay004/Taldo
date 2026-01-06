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

  const hideContact = pathname.startsWith("/recruiters");

  return (
    <>
      <Header />
      {children}
      {!hideContact && <Contact />}
      <Footer />
    </>
  );
}