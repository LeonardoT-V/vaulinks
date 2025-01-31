import { useState } from "react";

export function useScrapeUrl() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    image?: string;
    title: string;
    description?: string;
    url: string;
  } | null>(null);

  function reset() {
    setData(null);
  }

  async function scrapeDataFromUrl(url: string) {
    setLoading(true);
    let webText = "";
    const urlResponse = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/237.84.2.178 Safari/537.36",
        "accept-language": "en-US,en;q=0.9",
      },
    });
    if (!urlResponse.ok) return null;
    webText = await urlResponse.text();

    const { head } = new DOMParser().parseFromString(webText, "text/html");
    const image =
      head.querySelector("meta[property='og:image']")?.content || "";
    const title = head.querySelector("title")?.textContent || "";
    const description =
      head.querySelector("meta[name='description']")?.content || "";
    setData({
      image,
      title,
      description,
      url,
    });
    setLoading(false);
  }

  return {
    loading,
    data,
    scrapeDataFromUrl,
    reset,
  };
}
