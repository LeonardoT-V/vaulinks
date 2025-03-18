"use server";

import { prisma } from "@/db";
import { JSDOM } from "jsdom";

export async function findMyBookmark(userId: string) {
  const bookmarks = await prisma.bookmarkRepository.findMany({
    where: { createdById: userId },
    include: {
      refBookmark: true,
    },
  });
  // console.log({ bookmarks, userId });

  return bookmarks;
}

export async function createBookmark(bookmark: {
  title: string;
  url: string;
  userId: string;
}) {
  try {
    const { url } = bookmark;

    if (!bookmark) throw new Error("hola");

    const urlResponse = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/237.84.2.178 Safari/537.36",
        "accept-language": "en-US,en;q=0.9",
        accept: "*/*",
        referer: "https://www.google.com/",
      },
    });

    const webText = await urlResponse.text();

    const dom = new JSDOM(webText);
    const $dom = dom.window.document;

    const image =
      $dom.querySelector("meta[property='og:image']")?.content || "";
    const title = $dom.querySelector("title")?.textContent || "";
    const description =
      $dom.querySelector("meta[name='description']")?.content || "";
    // const created = await prisma.bookmark.upsert({
    //   create: {
    //     title: title,
    //     url: bookmark.url,
    //     description: description,
    //     og_image: image,
    //     userId: bookmark.userId,
    //   },
    //   update: {},
    // });
    const created = await prisma.bookmark.upsert({
      where: { url: bookmark.url },
      create: {
        title: title,
        url: bookmark.url,
        description: description,
        og_image: image,
        repository: {
          create: {
            createdById: bookmark.userId,
            title: bookmark.title || title,
          },
        },
      },
      update: {
        title: title,
        url: bookmark.url,
        description: description,
        og_image: image,
      },
    });
    console.log(created);

    return created;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}
