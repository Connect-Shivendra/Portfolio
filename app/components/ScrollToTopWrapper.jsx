"use client";
import { Suspense } from "react";
import ScrollToTop from "./ScrollToTop";

export default function ScrollToTopWrapper() {
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
    </Suspense>
  );
}

