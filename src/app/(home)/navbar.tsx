import Image from "next/image";
import Link from "next/link";

import { UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="h-14 border-b">
      <div className="flex items-center justify-between h-full px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image src="/logo.svg" alt="Logo" fill />
          </div>
          <span className="text-lg font-medium">ReqEat</span>
        </Link>

        <div className="flex items-center">
          <UserButton />
        </div>
      </div>
    </nav>
  );
}
