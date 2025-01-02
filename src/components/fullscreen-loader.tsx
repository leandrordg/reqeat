import { Loader2Icon } from "lucide-react";

interface FullscreenLoaderProps {
  label?: string;
}

export function FullscreenLoader({ label }: FullscreenLoaderProps) {
  return (
    <div className="min-h-dvh flex flex-col gap-3 items-center justify-center text-muted-foreground">
      <Loader2Icon className="size-8 animate-spin" />
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
}
