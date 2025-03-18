import React from "react";
import { Edit2Icon, ExternalLinkIcon, TrashIcon } from "lucide-react";

import { Button } from "../ui/button";
export default function BookmarkCard({ bookmark }: { bookmark: any }) {
  return (
    <div className="group/card overflow-hidden hover:bg-card rounded-lg border transition-all duration-300">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={bookmark.refBookmark.og_image}
          alt={`Preview of`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t h-full from-black/80 to-transparent opacity-0 group-hover/card:opacity-100 scale-110 transition-opacity duration-300"></div>
        <div className="flex gap-2 absolute top-0 right-2 transform -translate-y-full group-hover/card:translate-y-2 transition-transform duration-300">
          <Button
            variant={"outline"}
            size={"icon"}
            className="hover:bg-destructive hover:text-destructive-foreground"
          >
            <TrashIcon />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <Edit2Icon />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-sm font-medium">
            {bookmark.refBookmark.description}
          </p>
        </div>
      </div>
      <a
        className="p-4 block group/content"
        href={bookmark.refBookmark.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-start gap-3">
          <img
            src={`https://www.google.com/s2/favicons?domain=${bookmark.refBookmark.url}&sz=48`}
            width={16}
            height={16}
            className="flex-shrink-0 mt-1"
          />
          <div className="flex-grow min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium text-sm truncate group-hover/content:text-primary transition-colors">
                {bookmark.title || bookmark.refBookmark.title}
              </h3>
              <ExternalLinkIcon className="flex-shrink-0 w-4 h-4 text-muted-foreground group-hover/content:text-primary transition-colors" />
            </div>
            {bookmark.refBookmark.description && (
              <p className="text-xs mt-1 line-clamp-2">
                {bookmark.refBookmark.description}
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {bookmark.refBookmark.url}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
