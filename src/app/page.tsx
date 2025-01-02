import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SandwichIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 lg:px-10 gap-6">
      <Image src="/logo.svg" alt="Logo" width={48} height={48} />

      <h1 className="text-2xl font-medium">ReqEat</h1>

      <Button>
        Clique aqui <SandwichIcon className="size-4" />
      </Button>
    </div>
  );
}
