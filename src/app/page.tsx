import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SandwichIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 lg:px-10 gap-6">
      <div className="w-12 h-12 relative">
        <Image src="/logo.svg" alt="Logo" fill />
        <span className="absolute -top-2 -right-2 bg-white w-5 h-5 rounded-full border flex items-center justify-center text-xs">
          3
        </span>
      </div>

      <h1 className="text-2xl font-medium">ReqEat</h1>

      <Button>
        Clique aqui <SandwichIcon className="size-4" />
      </Button>
    </div>
  );
}
