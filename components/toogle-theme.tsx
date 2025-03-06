"use client";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
export default function Component() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <SunMoonIcon
          size={16}
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          aria-hidden="true"
        />
      </Button>
    );
  }
  return (
    <Toggle
      variant="default"
      className="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent"
      pressed={theme === "dark"}
      onPressedChange={() =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
      }
    >
      <MoonIcon
        size={16}
        className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
        aria-hidden="true"
      />
      <SunIcon
        size={16}
        className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
        aria-hidden="true"
      />
    </Toggle>
  );
}
