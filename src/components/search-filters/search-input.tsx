"use client";

import CategoriesSidebar from "@/components/search-filters/categories-sidebar";
import { Button } from "@/components/ui/button";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { CustomCategory } from "type";
import { Input } from "../ui/input";

interface Props {
  disabled?: boolean;
  data: CustomCategory[];
}

export const SearchInput = ({ disabled, data }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar
        data={data}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Search products"
          disabled={disabled}
        />
      </div>
      {/* Todo: Add categories and view all buttons */}
      <Button
        variant={"elavated"}
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon />
      </Button>
      {/* Todo: Add Library button */}
    </div>
  );
};
