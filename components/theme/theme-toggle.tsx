"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const mounted = useMounted();
  const { setTheme, theme } = useTheme();

  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

  const label = mounted ? `Switch to ${nextTheme} theme` : "Change theme";

  return (
    <Button
      aria-label={label}
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
      size="sm"
      type="button"
      variant="outline"
    >
      {theme === "light" ? (
        <Sun aria-hidden="true" />
      ) : theme === "dark" ? (
        <Moon aria-hidden="true" />
      ) : (
        <Monitor aria-hidden="true" />
      )}
    </Button>
  );
}
