import { Loader2Icon } from "lucide-react";

export function SmallLoader() {
  return (
    <div className="flex items-center justify-center size-96 text-muted-foreground mx-auto">
      <Loader2Icon className="size-6 animate-spin" />
    </div>
  );
}
