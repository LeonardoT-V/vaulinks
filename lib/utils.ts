import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function scrapeDataFromUrl(url: string) {
  let webText = "";
  try {
    const urlResponse = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/237.84.2.178 Safari/537.36",
        "accept-language": "en-US,en;q=0.9",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
      },
    });
    console.log(urlResponse.ok);
    if (!urlResponse.ok) return null;

    webText = await urlResponse.text();
  } catch (error) {
    return error;
  }

  // const firtsHead = webText.indexOf("<head>");
  // const lastHead = webText.indexOf("</head>");
  const { head } = new DOMParser().parseFromString(webText, "text/html");
  const image = head.querySelector("meta[property='og:image']")?.content;
  const title = head.querySelector("title")?.textContent;
  const description = head.querySelector("meta[name='description']")?.content;
  console.log({
    image,
    title,
    description,
  });

  return {
    image,
    title,
    description,
  };
}
