"use server";

import { prisma } from "@/db";

export async function createBookmark(bookmark) {
  try {
    if (!bookmark) throw new Error("hola");
    console.log(bookmark);
    const created = await prisma.bookmark.create({
      data: {
        title: bookmark.title,
        url: bookmark.url,
        description: bookmark?.description,
        og_image: bookmark?.image,
        userId: bookmark.userId,
      },
    });
    console.log(created);
    return "ok";
  } catch (error) {
    console.log(error.message);
    return error;
  }
}
