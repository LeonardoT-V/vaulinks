"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useCreateBookmark } from "@/hooks/use-bookmarks";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

export default function SearchPageUrl({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { data, loading, scrapeDataFromUrl, reset } = useScrapeUrl();
  const create = useCreateBookmark();
  const { data: session } = useSession();
  const [url, setUrl] = useState("https://ui.shadcn.com");
  const [title, setTitle] = useState("");

  const reset = () => {
    setUrl("");
    setTitle("");
  };

  useEffect(() => {
    let toastId;
    if (create.isPending) {
      toast(
        <div className="flex items-center gap-2">
          <header>
            {" "}
            <img
              className="size-5"
              src={`https://www.google.com/s2/favicons?domain=${url}&sz=32`}
              alt="logo preferred"
            />{" "}
          </header>{" "}
          <Separator orientation="vertical" className="h-5" />
          <p className="text-sm">Saving...</p>{" "}
        </div>
      );
    }
    if (create.isSuccess) {
      toast.success("Saved successfully", { id: toastId });
      return;
    }

    if (create.isError) {
      toast.error("Error saving", { id: toastId });
      return;
    }
  }, [create.isPending]);

  const save = async () => {
    create.mutate({
      userId: session?.user?.id || "",
      url,
      title,
    });
  };

  return (
    <Dialog onOpenChange={() => reset()}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl text-center tracking-tighter">
            Save a new resource
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 flex flex-col justify-center">
          <div className="space-y-1">
            <Label
              htmlFor="url_input"
              className="text-sm tracking-tighter font-medium justify-center flex"
            >
              Enter a URL
            </Label>
            <Input
              id="url_input"
              className=""
              placeholder="https://yourwebsite.com"
              type="url"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="space-y-1 !mb-3">
            <Label
              htmlFor="title"
              className="text-sm tracking-tighter font-medium justify-center flex"
            >
              Write a title for your resource
            </Label>
            <Input
              id="title"
              className=""
              placeholder="Awesome resource"
              type="url"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <Button
            disabled={create.isPending}
            type="submit"
            onClick={() => save()}
          >
            Save now
          </Button>
        </div>
        {/* <img
                src={`https://www.google.com/s2/favicons?domain=${url}&sz=128`}
                alt="preview image"
                className="h-6 w-6 aspect-square rounded-full"
              /> */}
        {/* <picture>
            <source srcSet="https://www.google.com/s2/favicons?domain=https://ui.shadcn.com&sz=128" />
            <img src="/favicon.ico" alt="photo" />
          </picture> */}
      </DialogContent>
    </Dialog>
  );
}
