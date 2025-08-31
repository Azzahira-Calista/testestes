"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
    });
  }, []);

  return <>{children}</>;
}
