import { signIn } from "@/auth";

export function SignIn({
  provider,
  children,
}: {
  provider: string;
  children?: React.ReactNode;
}) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider, { redirectTo: "/" });
      }}
    >
      {children}
    </form>
  );
}
