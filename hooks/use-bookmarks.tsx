import { createBookmark, findMyBookmark } from "@/actions/bookmarks";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

// export function useCreateFolderForm() {
//     return useForm<z.infer<typeof createFolderSchema>>({
//       resolver: zodResolver(createFolderSchema),
//       defaultValues: {
//         privacity: "public",
//         description: "",
//         name: "",
//       },
//     });
//   }

const BOOKMARK_QUERY_KEY = {
  myBookmark: "myBookmark",
};

export function useGetBookmarks() {
  const { data: session } = useSession();
  const user = session?.user;
  return useQuery({
    queryKey: [BOOKMARK_QUERY_KEY.myBookmark],
    queryFn: () => findMyBookmark(user?.id || ""),
    enabled: !!user,
  });
}

export function validateBookmark(form) {
  console.log(form);
}

export function useCreateBookmark() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (bookmark: {
      title: string;
      url: string;
      userId: string;
    }) => await createBookmark(bookmark),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [BOOKMARK_QUERY_KEY.myBookmark],
      }),
    onError: (error) => console.log("error"),
  });
}
