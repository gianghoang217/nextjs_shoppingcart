import { ReactNode } from "react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default async function PromptLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  console.log("Token", token);

  if (!token) {
    redirect("/login");
  }

  try {
    const secret = process.env.JWT_SECRET || "default_secret";
    jwt.verify(token, secret);
  } catch (error) {
    console.error("Invalid token:", error);
    redirect("/login");
  }

  return (
    <>
      <h1>FROM LAYOUT WITH LOVE</h1>
      {children}
    </>
  );
}
