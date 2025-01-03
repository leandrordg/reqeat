import Image from "next/image";
import Link from "next/link";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="h-32 bg-neutral-50 sticky top-0 z-10">
      <div className="flex items-center justify-between h-full px-6 lg:px-10 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image src="/logo.svg" alt="Logo" fill />
          </div>
          <span className="text-lg font-medium">ReqEat</span>
        </Link>

        <div className="flex items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button variant="link">criar conta</Button>
            <Button>Entrar</Button>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
