import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 shadow bg-white">
      <Link href="/" className="font-bold text-xl">
        PromptHub
      </Link>
      <div className="flex gap-4">
        <Button variant="ghost" asChild>
          <Link href="/explore">Explore prompt</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/create">Create prompt</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/profile">Profile</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </nav>
  );
}
