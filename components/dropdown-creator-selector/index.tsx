import { Button } from "@/components/ui/button";

import { BookmarkPlusIcon, EllipsisIcon, FilmIcon } from "lucide-react";
import SearchPageUrl from "../search-page-url";

export default function DropdownCreatorSelector() {
  return (
    <div className="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse items-center">
      <SearchPageUrl>
        <Button
          className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
          variant="outline"
        >
          <BookmarkPlusIcon
            className="-ms-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </SearchPageUrl>
      <Button
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        variant="outline"
      >
        <FilmIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Menu"
      >
        <EllipsisIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}
