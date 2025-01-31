"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useId } from "react";

export default function Component() {
  const { theme, setTheme } = useTheme();
  const id = useId();

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id={id}
        checked={theme === "light" ? true : false}
        onCheckedChange={(e) => setTheme(e ? "light" : "dark")}
        aria-label="Change theme"
      />
      <Label htmlFor={id}>
        <span className="sr-only">Change theme</span>
        {theme === "light" ? (
          <Sun size={16} strokeWidth={2} aria-hidden="true" />
        ) : (
          <Moon size={16} strokeWidth={2} aria-hidden="true" />
        )}
      </Label>
    </div>
  );
}
