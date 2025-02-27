"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ScrollToTop from "../shared/ScrollToTop";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <div className="relative">
        {children}
        <ScrollToTop />
      </div>
    </NextThemesProvider>
  );
}
