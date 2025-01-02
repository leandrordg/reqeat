"use client";

import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";

import { FullscreenLoader } from "@/components/fullscreen-loader";
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
