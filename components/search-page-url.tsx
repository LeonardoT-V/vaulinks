"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useScrapeUrl } from "@/hooks/use-scrape-url";
import { TextAreaAutosize } from "./ui/textarea";
import { useCreateBookmark } from "@/hooks/use-bookmarks";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function SearchPageUrl() {
  const { data, loading, scrapeDataFromUrl, reset } = useScrapeUrl();
  const create = useCreateBookmark();
  const { data: session } = useSession();
  const [url, setUrl] = useState("https://ui.shadcn.com");
  const holita = async () => {
    await scrapeDataFromUrl(url);
  };

  const save = async () => {
    const res = create.mutate({ userId: session?.user?.id, ...data });
    console.log(res);
  };

  return (
    <Dialog onOpenChange={() => reset()}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-muted-foreground">
            Save a new resource
          </DialogTitle>
        </DialogHeader>
        {loading && (
          <div className="flex justify-center items-center">
            <h1>loading...</h1>
          </div>
        )}
        {!loading && !data && (
          <div className="space-y-1.5 flex flex-col justify-center">
            <label htmlFor="url_input" className="text-xs text-center">
              Please enter a valid URL
            </label>
            <Input
              id="url_input"
              name="url_input"
              placeholder="https://yourwebsite.com"
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button className="w-full !mt-4" onClick={holita}>
              Save now
            </Button>
          </div>
        )}
        {!loading && data && (
          <div className="flex flex-col gap-4">
            <Button
              className="rounded-full w-fit pl-1.5"
              variant="outline"
              type="reset"
              onClick={() => reset()}
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${url}&sz=128`}
                alt="preview image"
                className="h-6 w-6 aspect-square rounded-full"
              />
              <span className="text-sm text-muted-foreground">{url}</span>
            </Button>
            <TextAreaAutosize
              placeholder="Awesome resource"
              label="Resource name"
              defaultValue={data.title}
            />
            <TextAreaAutosize
              placeholder="Give a description of the resource"
              label="Resource description"
              defaultValue={data.description}
            />
            <img
              src={data?.image}
              alt="preview image"
              className="aspect-video rounded-md"
            />
            <Button
              disabled={create.isPending}
              type="submit"
              onClick={() =>
                toast.promise(save, {
                  loading: "loading...",
                  success: "Saved successfully",
                  error: "Something went wrong",
                })
              }
            >
              Save now
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
