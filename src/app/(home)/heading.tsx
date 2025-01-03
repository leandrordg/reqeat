"use client";

import Link from "next/link";

import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";

import { SmallLoader } from "@/components/small-loader";
import { Button } from "@/components/ui/button";
import { SearchInput } from "./search-input";

export function Heading() {
  const categories = useQuery(api.categories.get);

  if (categories === undefined) return <SmallLoader />;

  return (
    <div
      style={{
        backgroundImage: "url('/heading-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center justify-center min-h-[70vh] gap-6 p-6 lg:px-10"
    >
      <div className="space-y-3">
        <h1 className="text-4xl font-bold sm:text-center">
          Faça seu pedido favorito com a gente!
        </h1>
        <p className="font-light sm:text-center">
          Peça aquela comida favorita sem sair de casa. Rápido e fácil!
        </p>
      </div>

      <SearchInput />

      <div className="flex items-center justify-center gap-2 flex-wrap max-w-[50%]">
        {categories.map((category) => (
          <Button key={category._id} variant="badge" asChild>
            <Link href={`/categorias/${category._id}`}>{category.title}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
