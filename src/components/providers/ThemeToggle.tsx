"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleChange() {
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      className="w-fit h-fit p-3"
      onClick={handleChange}
    >
      <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 sm:h-[1.2rem] sm:w-[1.2rem]" />
      <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 sm:h-[1.2rem] sm:w-[1.2rem]" />
    </Button>
  );
}
