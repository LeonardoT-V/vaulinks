"use client";
import { scrapeDataFromUrl } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function SearchPageUrl() {
  // https://ui.shadcn.com
  const [url, setUrl] = useState("https://ui.shadcn.com");
  const [data, setData] = useState(null);
  const holita = async (ev) => {
    const hola = await scrapeDataFromUrl(url);
    setData(hola);
  };
  useEffect(() => {
    return () => setData(null);
  }, []);
  useEffect(() => {
    return () => setUrl("");
  }, []);
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save a new Resource</DialogTitle>
          <DialogDescription className="space-y-1.5 mt-3">
            <span className="text-sm text-center">
              Please enter a valid URL
            </span>
            <Input onChange={(e) => setUrl(e.target.value)} />
            <Button className="w-full !mt-3" onClick={holita}>
              Search
            </Button>
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <section>
          {data && (
            <div className="flex flex-col gap-3">
              <header className="flex gap-3">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${url}&sz=64`}
                  alt="preview image"
                  className="size-16 aspect-square rounded-xl border border-muted"
                />
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-lg font-medium tracking-tight">
                    {data?.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {data?.description}
                  </p>
                </div>
              </header>
              <img
                src={data?.image}
                alt="preview image"
                className="aspect-video rounded-xl"
              />
            </div>
          )}
        </section>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
{
  /* <div>
  <input
    placeholder="https://"
    type="url"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
  />
  <button onClick={holita}>Search</button>
</div>
{data && (
  <div>
    <img
      src={`https://www.google.com/s2/favicons?domain=${url}&sz=32`}
      alt="preview image"
    />
    <h1>{data?.ogTitle}</h1>
    <h1>{data?.ogDescription}</h1>
    <img src={data?.ogImage} alt="preview image" />
  </div>
)} */
}
