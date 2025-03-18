"use client";
import React from "react";
import { useGetBookmarks } from "@/hooks/use-bookmarks";

import BookmarkCard from "@/components/base/bookmark-card";

export default function PageClient() {
  const { data, isLoading } = useGetBookmarks();
  return (
    <>
      <h1 className="text-2xl font-bold">Recent Bookmarks</h1>
      <div className="grid auto-rows-min gap-4 grid-cols-4">
        <div className="flex flex-col gap-4">
          {isLoading && (
            <>
              <div className="bg-card/80 border border-border min-h-32 rounded-lg p-4 animate-pulse" />
              <div className="bg-card/80 border border-border min-h-32 rounded-lg p-4 animate-pulse" />
              <div className="bg-card/80 border border-border min-h-32 rounded-lg p-4 animate-pulse" />
              <div className="bg-card/80 border border-border min-h-32 rounded-lg p-4 animate-pulse" />
              <div className="bg-card/80 border border-border min-h-32 rounded-lg p-4 animate-pulse" />
              <div className="bg-card/80 border border-border min-h-32 rounded-lg p-4 animate-pulse" />
              <div className="bg-card/80 border border-border min-h-32 rounded-lg p-4 animate-pulse" />
              <div className="bg-card/80 border border-border min-h-32 rounded-lg p-4 animate-pulse" />
            </>
          )}
          {!isLoading &&
            data &&
            data?.map((bookmark) => (
              <BookmarkCard key={bookmark.id} bookmark={bookmark} />
            ))}
        </div>
      </div>
    </>
  );
}
