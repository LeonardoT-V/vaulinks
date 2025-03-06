import { BookmarkIcon, HomeIcon } from "lucide-react";

export const ROUTES = {
  logged: [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Bookmarks",
      url: "/bookmarks",
      icon: BookmarkIcon,
    },
    // {
    //   title: "Media",
    //   url: "/media",
    //   icon: FilmIcon,
    // },
    // {
    //   title: "TODO",
    //   url: "/todo",
    //   icon: ListTodoIcon,
    // },
  ],
  discover: [
    {
      title: "Bookmarks",
      url: "/discover/bookmarks",
      icon: BookmarkIcon,
    },
    // {
    //   title: "Media",
    //   url: "/discover/media",
    //   icon: FilmIcon,
    // },
  ],
};
