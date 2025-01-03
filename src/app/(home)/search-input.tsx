"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SearchIcon, XIcon } from "lucide-react";

export function SearchInput() {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleClear = () => setSearch("");

  return (
    <div className="md:max-w-[30%] w-full flex items-center gap-3">
      <div className="flex flex-[3] items-center gap-4 border rounded-md px-4 h-9 text-sm text-muted-foreground bg-neutral-100">
        <button>
          <SearchIcon className="size-4" />
        </button>

        <input
          value={search}
          onChange={handleChange}
          placeholder="Buscar por restaurantes, pratos, etc."
          className="flex-1 h-full outline-none bg-transparent text-black"
        />

        {search && (
          <button onClick={handleClear}>
            <XIcon className="size-4" />
          </button>
        )}
      </div>

      <Button className="flex-[1]">Buscar</Button>
    </div>
  );
}
