import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

import { Label } from "@/components/ui/label";
import { ChangeEvent, useId, useRef } from "react";

interface TextAreaAutosizeProps extends React.ComponentProps<"textarea"> {
  label: string;
}

export function TextAreaAutosize({ label, ...props }: TextAreaAutosizeProps) {
  const id = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const defaultRows = 3;
  const maxRows = undefined; // You can set a max number of rows

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";

    const style = window.getComputedStyle(textarea);
    const borderHeight =
      parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth);
    const paddingHeight =
      parseInt(style.paddingTop) + parseInt(style.paddingBottom);

    const lineHeight = parseInt(style.lineHeight);
    const maxHeight = maxRows
      ? lineHeight * maxRows + borderHeight + paddingHeight
      : Infinity;

    const newHeight = Math.min(textarea.scrollHeight + borderHeight, maxHeight);

    textarea.style.height = `${newHeight}px`;
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        ref={textareaRef}
        onChange={handleInput}
        rows={defaultRows}
        className="min-h-[none] resize-none"
        {...props}
      />
    </div>
  );
}
