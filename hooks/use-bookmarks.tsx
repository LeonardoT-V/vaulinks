import { createBookmark } from "@/actions/bookmarks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

export function validateBookmark(form) {
  console.log(form);
}

export function useCreateBookmark() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (bookmark) => await createBookmark(bookmark),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getUsers"] }),
    onError: (error) => console.log("error"),
  });
}
