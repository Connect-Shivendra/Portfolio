"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only scroll to top on pathname changes, not hash changes
    if (!pathname.includes('#')) {
      window.scrollTo(0, 0);
    }
  }, [pathname, searchParams]);

  return null;
} 