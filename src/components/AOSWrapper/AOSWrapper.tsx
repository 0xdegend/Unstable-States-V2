"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });

    // small delay to handle images/font layout shifts in SPA
    const t = setTimeout(() => AOS.refresh(), 50);

    return () => {
      clearTimeout(t);
    };
  }, []);

  return <>{children}</>;
}
