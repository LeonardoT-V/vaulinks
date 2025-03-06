import React from "react";
import { signOut } from "next-auth/react";

export default function SignOutForm({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <form
      action={async () => {
        await signOut({ redirectTo: "/login" });
      }}
    >
      {children}
    </form>
  );
}
