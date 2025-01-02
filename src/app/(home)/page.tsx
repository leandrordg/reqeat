"use client";

import Image from "next/image";

import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";

import { FullscreenLoader } from "@/components/fullscreen-loader";
import { Button } from "@/components/ui/button";
import { SandwichIcon } from "lucide-react";
import { Navbar } from "./navbar";

export default function Page() {
  const documents = useQuery(api.products.get);

  if (documents === undefined)
    return <FullscreenLoader label="Obtendo os produtos..." />;

  return (
    <div className="min-h-screen">
      <Navbar />
    </div>
  );
}
